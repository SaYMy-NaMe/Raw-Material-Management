import "./receipt.css";
import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import { userRole } from "../../utils/enums";

import Spinner from "../../components/spinner/Spinner";
import DamagedQuantity from "../../components/DamagedQuantity";
import dateFormatter from "../../utils/dateFormatter";
import AuthContext from "../../contexts/AuthContext";
const Receipt = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [receipt, setReceipts] = useState();
  const [isAddDamagedQuantity, setIsAddDamagedQuantity] = useState({
    isON: false,
    id: "",
  });
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/receipt/getAllReceipts`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setReceipts(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during see all Receipts. Please try again.");
      });
  }, []);

  const handleAddDamagedQuantity = (id) => {
    setIsAddDamagedQuantity();
    setIsAddDamagedQuantity({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 110, behavior: "smooth" });
  };

  return (
    <div id="receipt">
      {isAddDamagedQuantity?.isON && (
        <DamagedQuantity
          id={isAddDamagedQuantity.id}
          setIsAddDamagedQuantity={setIsAddDamagedQuantity}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeReceipt">
          <table>
            <thead>
              <tr>
                <th>Receipt Id</th>
                <th>PricedBill Id</th>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Expected Delivery Date</th>
                <th>Damaged Quantity</th>
                <th>Receiver Id</th>
                <th>Receiver Name</th>
                {user?.role_name === userRole.STOREKEEPER && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {receipt?.map((receipt) => (
                <tr key={receipt?.id}>
                  <td>{receipt?.id}</td>
                  <td>{receipt?.priced_bill_id}</td>
                  <td>{receipt?.priced_bill?.tender?.requisition?.item?.id}</td>
                  <td>
                    {receipt?.priced_bill?.tender?.requisition?.item?.item_name}
                  </td>
                  <td>{receipt?.priced_bill?.tender?.requisition?.quantity}</td>
                  <td>{dateFormatter(receipt?.expected_delivery_date)}</td>
                  <td>{receipt?.damaged_quantity}</td>
                  <td>{receipt?.receiver_id}</td>
                  <td>{receipt?.reciver?.ex_name}</td>
                  {user?.role_name === userRole.STOREKEEPER && (
                    <td>
                      <div className="button-container">
                        <button
                          className="primary-button"
                          disabled={receipt?.receiver_id ? true : false}
                          onClick={() => handleAddDamagedQuantity(receipt?.id)}
                        >
                          Add Damaged Quantity
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

export default Receipt;
