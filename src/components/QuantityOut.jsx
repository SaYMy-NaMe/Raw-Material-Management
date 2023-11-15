import InputField from "./InputField";

const QuantityOut = ({ id, setIsQuantityOut }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const quantityOutData = {
      item_id: id,
      quantity_in: e.target.quantity_in.value,
    };
    console.log(quantityOutData);
  };
  return (
    <div id="quantityOut" onSubmit={handleSubmit}>
      <h1>Quantity Out</h1>
      <form action="submit">
        <InputField type="text" fieldName="ID" value={id} />
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
