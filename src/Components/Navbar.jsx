import { Link, NavLink } from "react-router";
import navLogo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm sm:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center">
            <img className="w-10" src={navLogo} alt="hero app logo" />
            <h1 className="linear-gradient-style text-gradient font-bold">
              HERO.IO
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="gap-8 menu-horizontal px-1 font-medium">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <Link
          target="_blank"
          to="https://github.com/samibyte"
          className="btn linear-gradient-style text-white font-semibold "
        >
          <FaGithub color="white" />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
