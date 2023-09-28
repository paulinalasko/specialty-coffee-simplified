import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar border-bottom sticky-top p-1">
      <img className="logo" src={logo} alt="Specialty coffee simplified logo" />
      <div className="nav-links">
        <NavLink className="link" exact to="/specialty-coffee-simplified/">
          Home
        </NavLink>
        <NavLink className="link" to="/specialty-coffee-simplified/origin">
          Coffee Origin
        </NavLink>
        <NavLink className="link" to="/specialty-coffee-simplified/regions">
          Regions
        </NavLink>
        <NavLink className="link" to="/specialty-coffee-simplified/processing">
          Coffee Processing
        </NavLink>
        <NavLink
          className="link"
          to="/specialty-coffee-simplified/specialty-coffee"
        >
          Specialty Coffee
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
