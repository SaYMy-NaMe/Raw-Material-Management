/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import "./items.css";
import CreateItem from "../../components/CreateItem";
import { useEffect, useState } from "react";
import { getStoredData } from "../../utils/localStorage";
const Items = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://icsrmms.vercel.app/item/getItem", {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during add Item. Please try again.");
      });
  }, []);
  return (
    <div id="items">
      <CreateItem />
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
