import { useContext, useEffect, useState } from "react";
import "./inventory.css";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";
import { AuthContext } from "../../contexts/authContext";
import Spinner from "../../components/spinner/Spinner";
const Inventory = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [inventory, setInventory] = useState();
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
  return (
    <div id="inventory">
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
