import InputField from "./InputField";

const CreateReport = () => {
  return (
    <div id="createReport" action="submit">
      <form>
        <InputField
          type="date"
          name="start_date"
          fieldName="Start Date"
          placeholder="Start Date"
        />
        <InputField
          type="date"
          name="end_date"
          fieldName="End Date"
          placeholder="End Date"
        />
      </form>
    </div>
  );
};

export default CreateReport;
