import { statusPricedBill } from "../utils/enums";
import InputField from "./InputField";

const Status = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pricedBillStatusData = {
      pricedBill_id: "",
      pricedBillStatus: e.target.pricedBillStatus.value,
    };
    console.log(pricedBillStatusData);
  };
  return (
    <div id="status">
      <h1>Status of Priced Bill</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="item_name"
          fieldName="Status Name"
          placeholder="Enter Status"
        />
        <div className="inputField">
          <p>Do you want to take the deal?</p>
          <select name="pricedBillStatus" id="pricedBillStatus">
            <option value={statusPricedBill.ACCEPTED}>
              {statusPricedBill.ACCEPTED}
            </option>
            <option value={statusPricedBill.CANCEL}>
              {statusPricedBill.CANCEL}
            </option>
          </select>
        </div>

        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Status;
