import { useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";
import { toast } from "react-hot-toast";
import Spinner from "./spinner/Spinner";

const CreateItem = ({ setIsItemAdded }) => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
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
        if (data?.status == "200") {
          setLoading(false);
          setIsItemAdded((isItemAdded) => !isItemAdded);
          toast.success("Item Created Successfully");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during add Item. Please try again.");
      });
  };
  return (
    <div id="addItem" onSubmit={handleSubmit}>
      {isLoading && <Spinner />}
      <h1>Add Item Here</h1>
      <form action="submit">
        <InputField
          type="text"
          name="item_name"
          fieldName="Item Name"
          placeholder="Enter Item Name"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
