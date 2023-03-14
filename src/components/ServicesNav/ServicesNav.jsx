
// import React, { useState, useEffect } from "react";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import { NavLink } from 'react-router-dom';

// import Logo from "../../assets/Logo.svg";
// import "./ServicesNav.css";

// const ServicesNav = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     document.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <div className={`Nav w-full ${scrolled ? "bg-gray-800" : "bg-lightOrange 2md:bg-transparent"}`}>
//       <div className="logo">
//         <img src={Logo} alt="logo" />
//       </div>

//       <div className="Nav_link_container">
//         <p className="Nlink">
//           <NavLink exact to="/">Home</NavLink>
//         </p>
//         <p className="Nlink">
//           <NavLink exact to="/OurServices">Our Services</NavLink>
//         </p>
//         <p className="Nlink">
//           <NavLink to ="/contact-us">Contact</NavLink>
//         </p>
//       </div>

//       <div className="Nav-menu">
//         {toggleMenu ? (
//           <RiCloseLine
//             color="#fff"
//             size={27}
//             onClick={() => setToggleMenu(false)}
//           />
//         ) : (
//           <RiMenu3Line
//             color="#fff"
//             size={27} onClick={()=> setToggleMenu(true)} />

//         )}

//         {toggleMenu &&(
//           <div className="Nav-menu_container">
//             <div className="Nav-menu_container-links">
//               <p><NavLink exact to="/">Home</NavLink></p>
//               <p><NavLink to="/" activeClassName="active">Our Services</NavLink></p>
//               <p><NavLink to="/contact-us">Contact</NavLink></p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServicesNav;

import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

import Logo from "../../assets/Logo.svg";
import WhiteLogo from "../../assets/WhiteLogo.svg";
import "./ServicesNav.css";

const ServicesNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`Nav w-full ${scrolled ? "bg-orange" : "bg-white"}`}>
      <div className="logo">
        <img src={scrolled ? WhiteLogo : Logo} alt="logo" />
      </div>

      <div className="Nav_link_container">
        <p className="Nlink">
          <NavLink exact to="/">Home</NavLink>
        </p>
        <p className="Nlink">
          <NavLink exact to="/OurServices">Our Services</NavLink>
        </p>
        <p className="Nlink">
          <NavLink to ="/contact-us">Contact Us</NavLink>
        </p>
      </div>

      <div className="Nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#8B0000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#8B0000"
            size={27} onClick={()=> setToggleMenu(true)} />

        )}

        {toggleMenu &&(
          <div className="Nav-menu_container">
            <div className="Nav-menu_container-links">
              <p><NavLink exact to="/">Home</NavLink></p>
              <p><NavLink to="/" activeClassName="active">Our Services</NavLink></p>
              <p><NavLink to="/contact-us">Contact Us</NavLink></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesNav;


