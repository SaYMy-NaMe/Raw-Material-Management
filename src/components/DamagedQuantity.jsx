import InputField from "./InputField";

const DamagedQuantity = () => {
  return (
    <div id="damagedQuantity">
      <h1>Add Damaged Quantity</h1>
      <form action="submit">
        <InputField
          type="number"
          name="damaged_quantity"
          fieldName="Damaged Quantity"
          placeholder="Enter Damaged Quantity"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DamagedQuantity;
