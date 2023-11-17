/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import { removeStorageData } from "../utils/localStorage";
import LogoutIcon from "../assets/svgs/LogoutIcon";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { userRole } from "../utils/enums";

// eslint-disable-next-line react/prop-types
const Header = () => {
  const { user: userData, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser();
    removeStorageData("user");
    removeStorageData("token");
    navigate("/");
  };
  return (
    <header id="header">
      <NavLink to="/" id="header-title">
        IICT Construction Site Raw material management
      </NavLink>
      <ul id="header-navigation">
        {userData?.token ? (
          <>
            {userData?.role_name === userRole.SUPERADMIN && (
              <li>
                <NavLink to="/userList">User List</NavLink>
              </li>
            )}
            {(userData?.role_name === userRole.ADMIN ||
              userData?.role_name === userRole.STOREKEEPER ||
              userData?.role_name === userRole.SUPERADMIN) && (
              <>
                <li>
                  <NavLink to="/items">Items</NavLink>
                </li>

                {userData?.role_name === userRole.STOREKEEPER ? null : (
                  <li>
                    <NavLink to="/requisition">Requisition</NavLink>
                  </li>
                )}
              </>
            )}
            {(userData?.role_name === userRole.SUPERADMIN ||
              userData?.role_name === userRole.USER) && (
              <>
                <li>
                  <NavLink to="/tender">Tender</NavLink>
                </li>
                <li>
                  <NavLink to="/pricedBill">Priced Bill</NavLink>
                </li>
              </>
            )}
            {userData?.role_name === userRole.USER ? null : (
              <>
                <li>
                  <NavLink to="/inventory">Inventory</NavLink>
                </li>
                <li>
                  <NavLink to="/report">Report</NavLink>
                </li>
              </>
            )}

            <li>
              <NavLink to="/receipt">Receipt</NavLink>
            </li>

            <li>
              <NavLink to="/change-password">Change Password</NavLink>
            </li>
            <li>
              <button id="logout-button" onClick={handleLogout}>
                <LogoutIcon />
                Log Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/signin">Login</NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
