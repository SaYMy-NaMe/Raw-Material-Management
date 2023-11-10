import "./inventory.css";
const Inventory = () => {
  return <div id="inventory">
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
              <th>Actions</th>
            </tr>
          </thead>
          {/* <tbody>
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
                      <NavLink to="/report" className="linkText">
                      <button className="createReport-button">
                        Report
                      </button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
  </div>
  </div>;
};

export default Inventory;
