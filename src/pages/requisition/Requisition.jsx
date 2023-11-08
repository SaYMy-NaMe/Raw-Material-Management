import { NavLink } from "react-router-dom";
import "./requisition.css";
// import CreateRequisition from "../../components/CreateRequisition";
import { useEffect, useState } from "react";
import { getStoredData } from "../../utils/localStorage";
import { baseUrl } from "../../utils/baseUrl";
const Requisition = () => {
  const [requisitions, setRequisitions] = useState();
  useEffect(() => {
    fetch(`${baseUrl}/requisition/getAllRequisition`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRequisitions(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "An error occurred during see all Requisition. Please try again."
        );
      });
  }, []);

  return (
    <div id="Requisition">
      {/* <CreateRequisition /> */}
      <div id="seeRequisition">
        <table>
          <thead>
            <tr>
              <th>Requisition Id</th>
              <th>Project Name</th>
              <th>Address</th>
              <th>Item Id</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Purpose</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requisitions?.map((requisition) => (
              <tr key={requisition?.id}>
                <td>{requisition?.id}</td>
                <td>{requisition?.project_name}</td>
                <td>{requisition?.location}</td>
                <td>{requisition?.item?.id}</td>
                <td>{requisition?.item?.item_name}</td>
                <td>{requisition?.quantity}</td>
                <td>{requisition?.purpose}</td>
                <td>
                  <div className="button-container">
                    <button className="delete-button">Delete</button>
                    <NavLink to="/tender" className="linkText">
                      <button className="tender-button">Create Tender</button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requisition;
