import { toast } from "react-hot-toast";
import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

const CreateReport = ({ id, setIsCreateReport }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createReportData = {
      item_id: id,
      start_date: e.target.start_date.value,
      end_date: e.target.end_date.value,
    };

    fetch(`${baseUrl}/report/addReport`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createReportData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsCreateReport({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success("Report Created Successfully");
          navigate("/report");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during create Report. Please try again.");
      });
  };
  return (
    <div id="createReport" action="submit" onSubmit={handleSubmit}>
      {isLoading && <Spinner />}
      <h1>Create Report</h1>
      <form>
        <InputField type="text" fieldName="Item Id" value={id} />
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
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateReport;
