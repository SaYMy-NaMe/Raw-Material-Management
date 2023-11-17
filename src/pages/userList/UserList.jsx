import { useEffect, useState } from "react";
import Spinner from "../../components/spinner/Spinner";
import { getStoredData } from "../../utils/localStorage";
import { baseUrl } from "../../utils/baseUrl";

const UserList = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/AllUser`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setUsers(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during see users. Please try again.");
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeUsers">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user?.ex_id}>
                  <td>{user?.ex_id}</td>
                  <td>{user?.ex_name}</td>
                  <td>{user?.ex_email}</td>
                  <td>{user?.ex_contactNO}</td>
                  <td>
                    <div className="button-container">
                      <button className="requisition-button">
                        Approve User
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
