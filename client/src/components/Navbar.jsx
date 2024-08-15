import React from "react";
import { Link, NavLink } from "react-router-dom";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <nav className="   bg-opacity-30 backdrop-blur-sm bg-[#45496a] text-white fixed top-0 left-0 right-0 z-10 h-[4rem] m-10 md:w-[60vw] flex items-center justify-between rounded-2xl p-3 md:fixed md:left-[18%] ">
      <h1 className="">NFTVAULT</h1>
      <div className=" hidden md:flex">
        <ul className=" md:flex md:gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-fuchsia-400 font-medium" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? "text-fuchsia-400 font-medium" : "text-white"
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                isActive ? "text-fuchsia-400 font-medium" : "text-white"
              }
            >
              Feed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                isActive ? "text-fuchsia-400 font-medium" : "text-white"
              }
            >
              Collections
            </NavLink>
          </li>
        </ul>
      </div>
      <div className=" hidden  md:flex md:flex-row md:gap-5 ">
        <Buttons className=" hover:bg-gradient-to-r from-[#8E4EC6] to-[#6E56CF] w-[6rem] rounded-lg border-white  outline-white bg-none ">
          <NavLink to="/Auth/signup">Sign Up </NavLink>
        </Buttons>
        <button className="h-[2.5rem] w-[8rem] text-white font-medium rounded-lg bg-gradient-to-r from-[#8E4EC6] to-[#6E56CF]">
          Add Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
