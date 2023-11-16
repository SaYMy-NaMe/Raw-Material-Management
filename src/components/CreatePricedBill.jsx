import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";
import { toast } from "react-hot-toast";
import Spinner from "./spinner/Spinner";
import { useState } from "react";

const CreatePricedBill = ({ id, setIsCreatePricedBill }) => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const CreatePricedBill = {
      tender_id: id,
      price: e.target.price.value,
    };
    fetch(`${baseUrl}/pricedBill/addPricedBill`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CreatePricedBill),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsCreatePricedBill({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success(
            "PricedBill created Successfully, Please wait for the confirmation!"
          );
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during create PricedBill. Please try again.");
      });
  };
  return (
    <div id="createPricedBill">
      {isLoading && <Spinner />}
      <h1>Priced Bill</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <InputField
          type="number"
          name="price"
          fieldName="Price"
          placeholder="Enter the Price"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePricedBill;
