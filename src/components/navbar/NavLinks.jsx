import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../../utils/data";

const NavLinks = () => {
  return (
    <>
      {navData.map((item) => {
        return (
          <li key={item.id} className="capitalize custom-li">
            <NavLink
              aria-current="true"
              to={item.url}
              className={({ isActive }) =>
                isActive ? "activelink" : "inactivelink"
              }
            >
              {item.navTitle}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
