import { NavLink } from "react-router-dom";
import "./items.css";
import CreateItem from "../../components/CreateItem";
import { useEffect, useState } from "react";
import { getStoredData } from "../../utils/localStorage";
import { baseUrl } from "../../utils/baseUrl";
import CreateRequisition from "../../components/CreateRequisition";
import QuantityOut from "../../components/QuantityOut";
const Items = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(`${baseUrl}/item/getItem`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setItems(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during see Item. Please try again.");
      });
  }, []);
  return (
    <div id="items">
      <CreateItem />
      <CreateRequisition />
      <QuantityOut />
      <div id="seeItems">
        <table>
          <thead>
            <tr>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item) => (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>{item?.item_name}</td>
                <td>
                  <div className="button-container">
                    <button className="delete-button">Delete</button>
                    <NavLink to="/requisition" className="linkText">
                      <button className="requisition-button">
                        Create Requisition
                      </button>
                    </NavLink>
                    <NavLink to="/quantityOut" className="linkText">
                      <button className="quantityOut-button">
                        Quantity Out
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

export default Items;
