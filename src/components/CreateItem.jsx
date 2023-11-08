import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";

const CreateItem = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addItemData = {
      item_name: e.target.item_name.value,
    };
    fetch(`${baseUrl}/item/addItem`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addItemData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during add Item. Please try again.");
      });
  };
  return (
    <div id="addItem" onSubmit={handleSubmit}>
      <h1>Add Item Here</h1>
      <form action="submit">
        <InputField
          type="text"
          name="item_name"
          fieldName="Item Name"
          placeholder="Enter Item Name"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
