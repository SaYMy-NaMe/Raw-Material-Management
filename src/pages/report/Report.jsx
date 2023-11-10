import "./report.css";
const Report = () => {
    return (
        <div id="report">
           <div id="seeReport">
           <table>
          <thead>
            <tr>
              <th>Report Id</th>
              <th>Item Id</th>
              <th>Total Quantity In</th>
              <th>Total Quantity Out</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Balance</th>
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
           </div>
        </div>
    );
};

export default Report;