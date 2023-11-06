/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import InputField from "../../components/InputField";
import "./items.css";
const Items = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const addItemData = {
      item_name: e.target.item_name.value,
    };
    console.log(addItemData);
  };
  return (
    <div id="items">
      <div id="addItem" onSubmit={handleSubmit}>
        <h1>Add Item Here</h1>
        <form action="submit">
          <InputField
            type="text"
            name="item_name"
            fieldName="ItemName"
            placeholder="Enter Item Name"
          />
          <button className="authButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div id="seeItems">
        <table>
          <tr>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Item A</td>
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
          <tr>
            <td>2</td>
            <td>Item B</td>
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
        </table>
      </div>
    </div>
  );
};

export default Items;
