import "./items.css";
import CreateItem from "../../components/CreateItem";
import { useContext, useEffect, useState } from "react";
import { getStoredData } from "../../utils/localStorage";
import { baseUrl } from "../../utils/baseUrl";
import CreateRequisition from "../../components/CreateRequisition";
import QuantityOut from "../../components/QuantityOut";
import { AuthContext } from "../../contexts/authContext";
import { userRole } from "../../utils/enums";
import Spinner from "../../components/spinner/Spinner";

const Items = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const [isCreateRequisition, setIsCreateRequisition] = useState({
    isON: false,
    id: "",
  });
  const [isQuantityOut, setIsQuantityOut] = useState({
    isON: false,
    id: "",
  });

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/item/getItem`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setItems(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during see Item. Please try again.");
      });
  }, [isItemAdded]);

  const handleCreateRequisition = (id) => {
    setIsCreateRequisition();
    setIsCreateRequisition({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <div id="items">
      {user?.role_name === userRole.ADMIN && (
        <CreateItem setIsItemAdded={setIsItemAdded} />
      )}

      {isCreateRequisition?.isON && (
        <CreateRequisition
          id={isCreateRequisition.id}
          setIsCreateRequisition={setIsCreateRequisition}
        />
      )}
      {isQuantityOut?.isON && <QuantityOut />}
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeItems">
          <table>
            <thead>
              <tr>
                <th>Item Id</th>
                <th>Item Name</th>
                {(user?.role_name === userRole.ADMIN ||
                  user?.role_name === userRole.STOREKEEPER) && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {items?.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td>{item?.item_name}</td>
                  {(user?.role_name === userRole.ADMIN ||
                    user?.role_name === userRole.STOREKEEPER) && (
                    <td>
                      <div className="button-container">
                        {/* <button className="delete-button">Delete</button> */}
                        {user?.role_name === userRole.ADMIN && (
                          <button
                            className="requisition-button"
                            onClick={() => handleCreateRequisition(item?.id)}
                          >
                            Create Requisition
                          </button>
                        )}
                        {user?.role_name === userRole.STOREKEEPER && (
                          <button className="quantityOut-button">
                            Quantity Out
                          </button>
                        )}
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

export default Items;
