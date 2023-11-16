import { useState } from "react";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getStoredData } from "../utils/localStorage";
import { baseUrl } from "../utils/baseUrl";
import Spinner from "./spinner/Spinner";

const CreateReceipt = ({ id, setIsCreateReceipt }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createReceiptData = {
      priced_bill_id: id,
      expected_delivery_date: e.target.expected_delivery_date.value,
    };
    fetch(`${baseUrl}/receipt/createReceipt`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createReceiptData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsCreateReceipt({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success("Receipt Created Successfully");
          navigate("/receipt");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during create Receipt. Please try again.");
      });
  };
  return (
    <div id="createReceipt">
      {isLoading && <Spinner />}
      <h1>Receipt</h1>
      <p>Create Receipt right here</p>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <InputField
          type="date"
          name="expected_delivery_date"
          fieldName="Expected Delivery Date"
          placeholder="Enter the probable delivery date"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateReceipt;
