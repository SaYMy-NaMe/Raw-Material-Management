import { NavLink } from "react-router-dom";
import InputField from "../../components/InputField";
import "./requisition.css";
const Requisition = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const createRequisitionData = {
      project_name: e.target.project_name.value,
      location: e.target.location.value,
      quantity: e.target.quantity.value,
      purpose: e.target.purpose.value,
    };
    console.log(createRequisitionData);
  };
  return (
    <div id="Requisition">
      <div id="createRequisition" onSubmit={handleSubmit}>
        <h1>Requisition</h1>
        <p>Create your Requisition right here</p>
        <form action="submit">
          <InputField
            type="text"
            name="project_name"
            fieldName="Project Name"
            placeholder="Project Name"
          />
          <InputField
            type="text"
            name="location"
            fieldName="Address"
            placeholder="Address"
          />
          <InputField
            type="number"
            name="quantity"
            fieldName="Quantity"
            placeholder="Quantity"
          />
          <InputField
            type="text"
            name="purpose"
            fieldName="Purpose"
            placeholder="Purpose"
          />
          <button className="authButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div id="seeRequisition">
        <table>
          <tr>
            <th>Requisition Id</th>
            <th>Project Name</th>
            <th>Address</th>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Purpose</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>1</td>
            <td>IICT</td>
            <td>SUST</td>
            <td>1</td>
            <td>Hafiz</td>
            <td>2 KG</td>
            <td>Mal ta ke garite tol</td>
            <td>
              <div className="button-container">
                <button className="delete-button">Delete</button>
                <NavLink to="/tender" className="linkText">
                  <button className="tender-button">Create Tender</button>
                </NavLink>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Requisition;
