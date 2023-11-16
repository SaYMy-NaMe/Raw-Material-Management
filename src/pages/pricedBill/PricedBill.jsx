import { useContext, useEffect, useState } from "react";
import "./pricedBill.css";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import Status from "../../components/Status";
import CreateReceipt from "../../components/CreateReceipt";
import { statusPricedBill, userRole } from "../../utils/enums";
import { AuthContext } from "../../contexts/authContext";
import Spinner from "../../components/spinner/Spinner";

const PricedBill = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [pricedBills, setPricedBill] = useState();
  const [isAddStatusPricedBill, setIsAddStatusPricedBill] = useState({
    isON: false,
    id: "",
  });
  const [isCreateReceipt, setIsCreateReceipt] = useState({
    isON: false,
    id: "",
  });
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/pricedBill/getAllPricedBill`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setPricedBill(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert(
          "An error occurred during see all Priced Bill. Please try again."
        );
      });
  }, []);
  const handleCreateReceipt = (id) => {
    setIsCreateReceipt();
    setIsCreateReceipt({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 110, behavior: "smooth" });
  };
  const handleAddStatusPricedBill = (id) => {
    setIsAddStatusPricedBill();
    setIsAddStatusPricedBill({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 110, behavior: "smooth" });
  };
  return (
    <div id="PricedBill">
      {isAddStatusPricedBill?.isON && (
        <Status
          id={isAddStatusPricedBill.id}
          setIsAddStatusPricedBill={setIsAddStatusPricedBill}
        />
      )}
      {isCreateReceipt?.isON && (
        <CreateReceipt
          id={isCreateReceipt.id}
          setIsCreateReceipt={setIsCreateReceipt}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seePricedBill">
          <table>
            <thead>
              <tr>
                <th>PricedBill Id</th>
                <th>Creator</th>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Status</th>
                {(user?.role_name === userRole.USER ||
                  user?.role_name === userRole.SUPERADMIN) && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {pricedBills?.map((pricedBill) => (
                <tr key={pricedBill?.id}>
                  <td>{pricedBill?.id}</td>
                  <td>{pricedBill?.user?.ex_name}</td>
                  <td>{pricedBill?.tender?.requisition?.item?.id}</td>
                  <td>{pricedBill?.tender?.requisition?.item?.item_name}</td>
                  <td>{pricedBill?.tender?.requisition?.quantity}</td>
                  <td>{pricedBill?.price}</td>
                  <td>{pricedBill?.total_price}</td>
                  <td>{pricedBill?.status}</td>
                  {(user?.role_name === userRole.USER ||
                    user?.role_name === userRole.SUPERADMIN) && (
                    <td>
                      <div className="button-container">
                        {/* <button className="delete-button">Delete</button> */}
                      </div>

                      <div className="button-container">
                        {user?.role_name === userRole.USER && (
                          <button
                            className="createReceipt-button"
                            disabled={
                              pricedBill?.status === statusPricedBill.ACCEPTED
                                ? false
                                : true
                            }
                            onClick={() => handleCreateReceipt(pricedBill?.id)}
                          >
                            Create Receipt
                          </button>
                        )}
                        {user?.role_name === userRole.SUPERADMIN && (
                          <button
                            className="createReceipt-button"
                            onClick={() =>
                              handleAddStatusPricedBill(pricedBill?.id)
                            }
                            disabled={
                              pricedBill?.status ===
                                statusPricedBill.ACCEPTED ||
                              pricedBill?.status === statusPricedBill.CANCEL
                            }
                          >
                            Accept
                          </button>
                        )}
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

export default PricedBill;
