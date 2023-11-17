import { toast } from "react-hot-toast";
import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

const QuantityOut = ({ id, setIsQuantityOut }) => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const quantityOutData = {
      item_id: id,
      quantity_out: e.target.quantity_out.value,
    };
    fetch(`${baseUrl}/inventory/itemIssue`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantityOutData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsQuantityOut({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success(" Item issued Successfully");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during item issue. Please try again.");
      });
  };
  return (
    <div id="quantityOut">
      {isLoading && <Spinner />}
      <h1>Quantity Out</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <InputField
          type="number"
          name="quantity_out"
          fieldName="Quantity Out"
          placeholder="Quantity Out"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuantityOut;
