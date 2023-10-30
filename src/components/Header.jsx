/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ userData }) => {
  console.log(userData);
  return (
    <header id="header">
      <NavLink to="/" id="header-title">
        Raw material management
      </NavLink>
      <ul id="header-navigation">
        <li>
          {userData?.ex_name ? (
            <button>Log Out</button>
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
