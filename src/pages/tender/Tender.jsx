import "./tender.css";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import CreatePricedBill from "../../components/CreatePricedBill";

import { userRole } from "../../utils/enums";
import Spinner from "../../components/spinner/Spinner";
import dateFormatter from "../../utils/dateFormatter";
import AuthContext from "../../contexts/AuthContext";
const Tender = () => {
  const { user } = useContext(AuthContext);
  const [tenders, setTenders] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isCreatePricedBill, setIsCreatePricedBill] = useState({
    isON: false,
    id: "",
  });
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/tender/getAllTender`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setTenders(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during see Tenders. Please try again.");
      });
  }, []);
  const handleCreatePricedBill = (id) => {
    setIsCreatePricedBill();
    setIsCreatePricedBill({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 115, behavior: "smooth" });
  };

  return (
    <div id="Tender">
      {isCreatePricedBill?.isON && (
        <CreatePricedBill
          id={isCreatePricedBill.id}
          setIsCreatePricedBill={setIsCreatePricedBill}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeTender">
          <table>
            <thead>
              <tr>
                <th>Tender Id</th>
                <th>Creator</th>
                <th>Project Name</th>
                <th>Address</th>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Deadline</th>
                {user?.role_name === userRole.USER && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {tenders &&
                tenders?.map((tender) => (
                  <tr key={tender?.id}>
                    <td>{tender?.id}</td>
                    <td>{tender?.user?.ex_name}</td>
                    <td>{tender?.requisition?.project_name}</td>
                    <td>{tender?.requisition?.location}</td>
                    <td>{tender?.requisition?.item?.id}</td>
                    <td>{tender?.requisition?.item?.item_name}</td>
                    <td>{tender?.requisition?.quantity}</td>
                    <td>{dateFormatter(tender?.deadline)}</td>
                    {user?.role_name === userRole.USER && (
                      <td>
                        <div className="button-container">
                          {/* <button className="delete-button">Delete</button> */}

                          <button
                            className="primary-button"
                            onClick={() => handleCreatePricedBill(tender?.id)}
                          >
                            Create PricedBill
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tender;
