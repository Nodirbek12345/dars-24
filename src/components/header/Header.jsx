import React from "react";
import { NavLink } from "react-router-dom";
import "../header/Header.css"
const Header = () => {
  return (
    <div className="flex bg-[#e1e4e7] shadow-2xl items-center h-[80px] px-[60px]">
      <NavLink
        className="text-[20px] font-medium"
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="text-[20px] ml-[40px] font-medium"
        to={"/users"}
      >
        Users
      </NavLink>
    </div>
  );
};

export default Header;
