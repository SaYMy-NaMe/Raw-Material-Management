import InputField from "./InputField";

const CreateReport = () => {
    return (
        <div id="createReport" action="submit">
        <form>
            <InputField
          type="date"
          name="start_date"
          fieldName="startDate"
          placeholder="Start Date"
        />
        <InputField
          type="date"
          name="end_date"
          fieldName="endDate"
          placeholder="End Date"
        />
        </form>
        </div>
    );
};

export default CreateReport;