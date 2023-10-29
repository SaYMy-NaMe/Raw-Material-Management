import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <NavLink to="/" id="header-title">
        Raw material management
      </NavLink>
      <ul id="header-navigation">
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
        <li>
          <NavLink to="/change-password">Change Password</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
