import { NavLink } from "react-router-dom";
import "./tender.css";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import CreatePricedBill from "../../components/CreatePricedBill";
const Tender = () => {
  const [tenders, setTenders] = useState();
  useEffect(() => {
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
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during see Tenders. Please try again.");
      });
  }, []);
  return (
    <div id="Tender">
      <CreatePricedBill />
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
              <th>Actions</th>
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
                  <td>{tender?.deadline}</td>
                  <td>
                    <div className="button-container">
                      <button className="delete-button">Delete</button>
                      <NavLink to="/pricedBill" className="linkText">
                        <button className="pricedBill-button">
                          Create PriceBill
                        </button>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tender;
