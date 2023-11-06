/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { removeStorageData } from "../utils/localStorage";
import LogoutIcon from "../assets/svgs/LogoutIcon";

// eslint-disable-next-line react/prop-types
const Header = ({ userData, setUser }) => {
  const handleLogout = () => {
    setUser();
    removeStorageData("user");
    removeStorageData("token");
  };
  return (
    <header id="header">
      <NavLink to="/" id="header-title">
        Raw material management
      </NavLink>
      <ul id="header-navigation">
        <li>
          <NavLink to="/items">Items</NavLink>
        </li>
        <li>
          {userData?.ex_name ? (
            <button id="logout-button" onClick={handleLogout}>
              <LogoutIcon />
              Log Out
            </button>
          ) : (
            <NavLink to="/signin">Login</NavLink>
          )}
        </li>
        <li>
          <NavLink to="/change-password">Change Password</NavLink>
        </li>
        {userData?.ex_name && (
          <li>
            <p>{userData?.ex_name}</p>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
