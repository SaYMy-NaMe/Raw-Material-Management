import InputField from "./InputField";

const CreateTender = () => {
    const handleSubmit = async (e) => {
    e.preventDefault();

    const createTenderData = {
      deadline: e.target.deadline.value,
    };
    console.log(createTenderData);
  };
    return (
      <div id="createTender">
        <h1>Tender</h1>
        <p>Create your tender here...</p>
        <form action="submit" onSubmit={handleSubmit}>
          <InputField
            type="date"
            name="deadline"
            fieldName="Deadline"
            placeholder="Deadline"
          />
          <button className="authButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
};

export default CreateTender;