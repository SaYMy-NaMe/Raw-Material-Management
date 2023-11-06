import { NavLink } from "react-router-dom";
import InputField from "../../components/InputField";
import "./Tender.css";
const Tender = () => {
  return (
    <div id="Tender">
      <div id="createTender">
        <h1>Tender</h1>
        <p>Create your tender here...</p>
        <form action="submit">
          <InputField
            type="date"
            name="deadline"
            fieldName="Deadline"
            placeholder="Deadline"
          />
          <button className="authButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div id="seeTender">
        <table>
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
          <tr>
            <td>1</td>
            <td>SuperAdmin</td>
            <td>IICT</td>
            <td>SUST</td>
            <td>1</td>
            <td>Balu</td>
            <td>20KG</td>
            <td>20/10/23</td>
            <td>
              <div className="button-container">
                <button className="delete-button">Delete</button>
                <NavLink to="/pricedBill" className="linkText">
                  <button className="pricedBill-button">
                    Create PricedBill
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

export default Tender;
