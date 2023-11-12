import InputField from "./InputField";

const QuantityOut = () => {
  return (
    <div id="quantityOut">
      <h1>Quantity Out</h1>
      <form action="submit">
        <InputField
          type="number"
          name="quantity_out"
          fieldName="Quantity Out"
          placeholder="Quantity Out"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuantityOut;
