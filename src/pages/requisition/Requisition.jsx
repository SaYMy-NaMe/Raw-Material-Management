import "./requisition.css";
import { useContext, useEffect, useState } from "react";
import { getStoredData } from "../../utils/localStorage";
import { baseUrl } from "../../utils/baseUrl";
import CreateTender from "../../components/CreateTender";
import { AuthContext } from "../../contexts/authContext";
import { userRole } from "../../utils/enums";
const Requisition = () => {
  const { user, setUser } = useContext(AuthContext);
  const [requisitions, setRequisitions] = useState();
  const [isCreateTender, setIsCreateTender] = useState({
    isON: false,
    id: "",
  });
  useEffect(() => {
    fetch(`${baseUrl}/requisition/getAllRequisition`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setRequisitions(data.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "An error occurred during see all Requisition. Please try again."
        );
      });
  }, []);

  const handleCreateTender = (id) => {
    setIsCreateTender();
    setIsCreateTender({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 150, behavior: "smooth" });
  };

  return (
    <div id="Requisition">
      {isCreateTender?.isON && (
        <CreateTender
          id={isCreateTender.id}
          setIsCreateTender={setIsCreateTender}
        />
      )}
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
              {user?.role_name === userRole.SUPERADMIN && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {requisitions &&
              requisitions?.map((requisition) => (
                <tr key={requisition?.id}>
                  <td>{requisition?.id}</td>
                  <td>{requisition?.project_name}</td>
                  <td>{requisition?.location}</td>
                  <td>{requisition?.item?.id}</td>
                  <td>{requisition?.item?.item_name}</td>
                  <td>{requisition?.quantity}</td>
                  <td>{requisition?.purpose}</td>
                  {user?.role_name === userRole.SUPERADMIN && (
                    <td>
                      <div className="button-container">
                        {/* <button className="delete-button">Delete</button> */}

                        <button
                          className="tender-button"
                          onClick={() => handleCreateTender(requisition?.id)}
                        >
                          Create Tender
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requisition;
