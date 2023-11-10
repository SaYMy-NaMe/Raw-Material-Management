import InputField from "./InputField";

const CreatePricedBill = () => {
    const handleSubmit = async (e) => {
    e.preventDefault();

    const CreatePricedBill = {
      price: e.target.price.value,
    };
    console.log(CreatePricedBill);
  };
    return (
        <div id="createPricedBill">
        <h1>Priced Bill</h1>
        <form action="submit" onSubmit={handleSubmit}>
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