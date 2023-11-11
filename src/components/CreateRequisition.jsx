import { baseUrl } from "../utils/baseUrl";
import { getStoredData } from "../utils/localStorage";
import InputField from "./InputField";

const CreateRequisition = ({ id, setIsCreateRequisition }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const createRequisitionData = {
      item_id: id,
      project_name: e.target.project_name.value,
      location: e.target.location.value,
      quantity: e.target.quantity.value,
      purpose: e.target.purpose.value,
    };
    fetch(`${baseUrl}/requisition/addRequisition`, {
      method: "POST",
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createRequisitionData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setIsCreateRequisition({
            isON: false,
            id: "",
          });
          //Toaster and Redirection
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during create Requisition. Please try again.");
      });
  };
  return (
    <div id="createRequisition" onSubmit={handleSubmit}>
      <h1>Requisition</h1>
      <p>Create your Requisition right here</p>
      <form action="submit">
        <InputField type="text" fieldName="ID" value={id} />
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
