import { NavLink } from "react-router-dom";
import CreateReceipt from "../../components/CreateReceipt";
import "./receipt.css";
const Receipt = () => {
  return <div id="receipt">
  <CreateReceipt />
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {requisitions?.map((requisition) => (
              <tr key={requisition?.id}>
                <td>{requisition?.id}</td>
                <td>{requisition?.project_name}</td>
                <td>{requisition?.location}</td>
                <td>{requisition?.item?.id}</td>
                <td>{requisition?.item?.item_name}</td>
                <td>{requisition?.quantity}</td>
                <td>{requisition?.purpose}</td>
                <td>
                  <div className="button-container">
                    <button className="delete-button">Delete</button>
                    <NavLink to="/tender" className="linkText">
                      <button className="tender-button">Create Tender</button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
  </div>
  </div>;
};

export default Receipt;
