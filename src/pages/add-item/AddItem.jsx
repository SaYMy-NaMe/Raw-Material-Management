import InputField from "../../components/InputField";
import "./addItem.css";
const AddItem = () => {
  return (
    <div id="addItem">
      <h1>Add Item Here</h1>
      <form action="submit">
        <InputField
          type="text"
          name="itemName"
          fieldName="ItemName"
          placeholder="Enter Item Name"
        />
        <InputField
          type="number"
          name="itemPrice"
          fieldName="ItemPrice"
          placeholder="Enter Current Item Price (Per Unit)"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
