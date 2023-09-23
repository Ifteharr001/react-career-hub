import { NavLink } from "react-router-dom";
import logo from "../../logo/CareerHub.png";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <img src={logo} alt="" />
        <div className="dropdown">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
          Start Applying
        </a>
      </div>
    </div>
  );
};

export default Header;
