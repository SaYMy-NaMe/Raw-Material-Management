import { useState } from "react";
import InputField from "./InputField";
import Spinner from "./spinner/Spinner";
import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DamagedQuantity = ({ id, setIsAddDamagedQuantity }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createDamagedQuantityData = {
      damaged_quantity: e.target.damaged_quantity.value,
    };
    // receipt/RECEIPT_0003
    fetch(`${baseUrl}/receipt/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createDamagedQuantityData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsAddDamagedQuantity({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success("Damaged Quantity Updated in Receipt Successfully");
          navigate("/inventory");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "An error occurred during add Damaged Quantity. Please try again."
        );
      });
  };
  return (
    <div id="damagedQuantity">
      {isLoading && <Spinner />}
      <h1>Add Damaged Quantity</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <InputField
          type="number"
          name="damaged_quantity"
          fieldName="Damaged Quantity"
          placeholder="Enter Damaged Quantity"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DamagedQuantity;
