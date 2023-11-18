import "./items.css";
import CreateItem from "../../components/CreateItem";
import { useContext, useEffect, useState } from "react";
import { getStoredData } from "../../utils/localStorage";
import { baseUrl } from "../../utils/baseUrl";
import CreateRequisition from "../../components/CreateRequisition";
import QuantityOut from "../../components/QuantityOut";

import { userRole } from "../../utils/enums";
import Spinner from "../../components/spinner/Spinner";
import CreateReport from "../../components/CreateReport";
import AuthContext from "../../contexts/AuthContext";
import NoDataFound from "../../components/NoDataFound";

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
  const [isCreateReport, setIsCreateReport] = useState({
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
  const handleQuantityOut = (id) => {
    setIsQuantityOut();
    setIsQuantityOut({
      isON: true,
      id: id,
    });
    window.scrollTo({ top: 110, behavior: "smooth" });
  };
  const handleCreateReport = (id) => {
    setIsCreateReport();
    setIsCreateReport({
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
      {isCreateReport?.isON && (
        <CreateReport
          id={isCreateReport.id}
          setIsCreateReport={setIsCreateReport}
        />
      )}

      {isCreateRequisition?.isON && (
        <CreateRequisition
          id={isCreateRequisition.id}
          setIsCreateRequisition={setIsCreateRequisition}
        />
      )}
      {isQuantityOut?.isON && (
        <QuantityOut
          id={isQuantityOut.id}
          setIsQuantityOut={setIsQuantityOut}
        />
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeItems">
          {items?.length < 1 ? (
            <NoDataFound />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Item Id</th>
                  <th>Item Name</th>
                  {(user?.role_name === userRole.ADMIN ||
                    user?.role_name === userRole.STOREKEEPER) && (
                    <th>Actions</th>
                  )}
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
                          <button
                            className="primary-button"
                            onClick={() => handleCreateReport(item?.id)}
                          >
                            Create Report
                          </button>
                          {user?.role_name === userRole.ADMIN && (
                            <button
                              className="primary-button"
                              onClick={() => handleCreateRequisition(item?.id)}
                            >
                              Create Requisition
                            </button>
                          )}
                          {user?.role_name === userRole.STOREKEEPER && (
                            <button
                              className="primary-button"
                              onClick={() => handleQuantityOut(item?.id)}
                            >
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
          )}
        </div>
      )}
    </div>
  );
};

export default Items;
