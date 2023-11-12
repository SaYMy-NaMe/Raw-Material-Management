import "./receipt.css";
import DamagedQuantity from "../../components/damagedQuantity";
import { useEffect, useState } from "react";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
const Receipt = () => {
  const [receipt, setReceipts] = useState();
  useEffect(() => {
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
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during see all Receipts. Please try again.");
      });
  }, []);

  return (
    <div id="receipt">
      <DamagedQuantity />
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
              {/* <th>Receiver Name</th> */}
              <th>Action</th>
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
                <td>{receipt?.expected_delivery_date}</td>
                <td>{receipt?.damaged_quantity}</td>
                <td>{receipt?.receiver_id}</td>
                {/* <td>{receipt?.receiver_name}</td> */}
                <td>
                  <div className="button-container">
                    <button className="delete-button">Delete</button>
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

export default Receipt;
