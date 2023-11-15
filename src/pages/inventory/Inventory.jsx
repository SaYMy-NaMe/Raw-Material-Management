import { useContext, useEffect, useState } from "react";
import "./inventory.css";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import CreateReport from "../../components/CreateReport";
import { AuthContext } from "../../contexts/authContext";
import { userRole } from "../../utils/enums";
import Spinner from "../../components/spinner/Spinner";
const Inventory = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [inventory, setInventory] = useState();
  const [isCreateReport, setIsCreateReport] = useState({
    isON: false,
    id: "",
  });
  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/inventory/getAllInventory`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setInventory(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during see all Inventory. Please try again.");
      });
  }, []);
  const handleCreateReport = (id) => {
    setIsCreateReport();
    setIsCreateReport({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 100, behavior: "smooth" });
  };
  return (
    <div id="inventory">
      {isCreateReport?.isON && (
        <CreateReport
          id={isCreateReport.id}
          setIsCreateReport={setIsCreateReport}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeInventory">
          <table>
            <thead>
              <tr>
                <th>Inventory Id</th>
                <th>Item Id</th>
                <th>Item Name</th>
                <th>Quantity In</th>
                <th>Quantity Out</th>
                <th>Manager Id</th>
                <th>Manager Name</th>
                {(user?.role_name === userRole.STOREKEEPER ||
                  user?.role_name === userRole.ADMIN) && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {inventory?.map((inventory) => (
                <tr key={inventory?.id}>
                  <td>{inventory?.id}</td>
                  <td>{inventory?.item?.id}</td>
                  <td>{inventory?.item?.item_name}</td>
                  <td>{inventory?.quantity_in}</td>
                  <td>{inventory?.quantity_out}</td>
                  <td>{inventory?.manager?.ex_id}</td>
                  <td>{inventory?.manager?.ex_name}</td>
                  {(user?.role_name === userRole.STOREKEEPER ||
                    user?.role_name === userRole.ADMIN) && (
                    <td>
                      <div className="button-container">
                        {/* <button className="delete-button">Delete</button> */}
                        <button
                          className="createReport-button"
                          onClick={() =>
                            handleCreateReport(inventory?.item?.id)
                          }
                        >
                          CreateReport
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Inventory;
