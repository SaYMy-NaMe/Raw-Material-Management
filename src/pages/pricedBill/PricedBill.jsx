import { useContext, useEffect, useState } from "react";
import "./pricedBill.css";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import Status from "../../components/Status";
import CreateReceipt from "../../components/CreateReceipt";
import { userRole } from "../../utils/enums";
import { AuthContext } from "../../contexts/authContext";

const PricedBill = () => {
  const { user } = useContext(AuthContext);
  const [pricedBills, setPricedBill] = useState();
  useEffect(() => {
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
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "An error occurred during see all Priced Bill. Please try again."
        );
      });
  }, []);
  return (
    <div id="PricedBill">
      {user?.role_name === userRole.SUPERADMIN && <Status />}
      {user?.role_name === userRole.USER && <CreateReceipt />}
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
              {user?.role_name === userRole.USER && <th>Actions</th>}
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
                {user?.role_name === userRole.USER && (
                  <td>
                    <div className="button-container">
                      {/* <button className="delete-button">Delete</button> */}
                    </div>

                    <div className="button-container">
                      <button
                        className="createReceipt-button"
                        disabled={
                          pricedBill?.status === "ACCEPTED" ? false : true
                        }
                      >
                        Create Receipt
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricedBill;
