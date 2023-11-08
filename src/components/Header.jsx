/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { removeStorageData } from "../utils/localStorage";
import LogoutIcon from "../assets/svgs/LogoutIcon";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Header = () => {
  const { user: userData, setUser } = useContext(AuthContext);

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
        {userData?.token ? (
          <>
            <li>
              <NavLink to="/items">Items</NavLink>
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
