import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "./spinner/Spinner";

const CreateTender = ({ id, setIsCreateTender }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createTenderData = {
      requisition_id: id,
      deadline: e.target.deadline.value,
    };
    fetch(`${baseUrl}/tender/addTender`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createTenderData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsCreateTender({
            isON: false,
            id: "",
          });
          setLoading(false);
          toast.success("Tender Created Successfully");
          navigate("/tender");
        } else {
          setLoading(false);
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during create Requisition. Please try again.");
      });
  };
  return (
    <div id="createTender">
      {isLoading && <Spinner />}

      <h1>Tender</h1>
      <p>Create your tender here...</p>
      <form action="submit" onSubmit={handleSubmit}>
        <InputField type="text" fieldName="ID" value={id} />
        <InputField
          type="date"
          name="deadline"
          fieldName="Deadline"
          placeholder="Deadline"
        />
        <button className="authButton" type="submit" disabled={isLoading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTender;
