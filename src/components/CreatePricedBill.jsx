import InputField from "./InputField";

const CreatePricedBill = ({ id, setIsCreatePricedBill }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const CreatePricedBill = {
      tender_id: id,
      price: e.target.price.value,
      // Status ENUM
    };
    console.log(CreatePricedBill);
    //API implementation
  };
  return (
    <div id="createPricedBill">
      <h1>Priced Bill</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <InputField
          type="number"
          name="price"
          fieldName="Price"
          placeholder="Enter the Price"
        />
        {/* Dropdown: Accepted/Rejected/Pending */}
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePricedBill;
