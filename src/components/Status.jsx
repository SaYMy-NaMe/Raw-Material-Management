import InputField from "./InputField";

const Status = () => {
  return (
    <div id="status">
      <h1>Do you want to take the Deal?</h1>
      <form action="submit">
        <InputField
          type="text"
          name="item_name"
          fieldName="Status Name"
          placeholder="Enter Status"
        />
        <button className="authButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Status;
