import InputField from "./InputField";

const CreateRequisition = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const createRequisitionData = {
      project_name: e.target.project_name.value,
      location: e.target.location.value,
      quantity: e.target.quantity.value,
      purpose: e.target.purpose.value,
    };
    console.log(createRequisitionData);
  };
  return (
    <div id="createRequisition" onSubmit={handleSubmit}>
      <h1>Requisition</h1>
      <p>Create your Requisition right here</p>
      <form action="submit">
        <InputField
          type="text"
          name="project_name"
          fieldName="Project Name"
          placeholder="Project Name"
        />
        <InputField
          type="text"
          name="location"
          fieldName="Location"
          placeholder="Enter the location"
        />
        <InputField
          type="number"
          name="quantity"
          fieldName="Quantity"
          placeholder="Quantity"
        />
        <InputField
          type="text"
          name="purpose"
          fieldName="Purpose"
          placeholder="Purpose"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateRequisition;
