import InputField from "./InputField";

const CreateReceipt = () => {
    return (
    <div id="createReceipt">
      <h1>Receipt</h1>
      <p>Create Receipt right here</p>
      <form action="submit">
        <InputField
          type="date"
          name="expected_delivery_date"
          fieldName="Expected Delivery Date"
          placeholder="Enter the probable delivery date"
        />
        <InputField
          type="number"
          name="damaged_quantity"
          fieldName="Enter Damaged Quantity"
          placeholder="Enter Damaged Quantity"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
    );
};

export default CreateReceipt;