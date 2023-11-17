import { toast } from "react-hot-toast";
import { baseUrl } from "../utils/baseUrl";
import { statusPricedBill } from "../utils/enums";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

const Status = ({ id, setIsAddStatusPricedBill }) => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const statusData = {
      status: e.target.status.value,
    };
    fetch(`${baseUrl}/pricedBill/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statusData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsAddStatusPricedBill({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success("PricedBill Accepted Successfully");
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
    <div id="status">
      {isLoading && <Spinner />}
      <h1>Status of Priced Bill</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <div className="inputField">
          <p>Do you want to take the deal?</p>
          <select name="status" id="pricedBillStatus">
            <option value={statusPricedBill.ACCEPTED}>
              {statusPricedBill.ACCEPTED}
            </option>
            <option value={statusPricedBill.CANCEL}>
              {statusPricedBill.CANCEL}
            </option>
          </select>
        </div>

        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Status;
