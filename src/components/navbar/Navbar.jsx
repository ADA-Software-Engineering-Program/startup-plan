import React, { useState, useRef, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const navref = useRef(null);
  const [showNav, setShowNav] = useState(false);

  const hideNav = () => {
    setShowNav(false);
  };

  const showNavbar = () => {
    setShowNav(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 60) {
        navref.current.classList.add("navOnScroll");
      } else {
        navref.current.classList.remove("navOnScroll");
      }
    });
  }, []);

  return (
    <nav className="w-full bg-rgba(255, 69, 0, 0.9); 2md:bg-transparent" ref={navref}>
      <div className="w-90 mx-auto flex items-center justify-between py-3">
        <div className="w-full-custom flex justify-between items-center ">
          <figure
            className="m-0 p-0 logo-size cursor-pointer"
            onClick={() => navigate("/startup-plan")}
          ></figure>

          <button
            className="mobile-view text-lg text-white"
            onClick={showNavbar}
          >
            <RiMenu3Fill />
          </button>
        </div>
        <div className="links-size">
          <ul className={`w-full flex-custom ${showNav && "active-nav"}`}>
            <button
              className="w-full flex justify-start text-orange cursor-pointer hide-desktop pb-5"
              onClick={hideNav}
            >
              <FaTimes />
            </button>
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
