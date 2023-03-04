import React, {useState} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import Logo from "../../assets/Logo.svg";
import "./ServicesNav.css";


// const Menu =( ) => (
//     <>
//     <p><a href="/startup-plan">Home</a></p>
//       <p><a  classname="active" href="/OurServices">Our Services</a></p>
//       <p><a href="/contact-us">Contact</a></p>
//       </>
// )

const ServicesNav = () => {
  const [toggleMenu, setToggleMenu]= useState(false);



    return (
        <div className="Nav w-full bg-lightOrange 2md:bg-transparent">
            

<div className="logo">
<img src={Logo} alt="logo"/>
</div>

 {/* <div className="Nav_link_hidden">
<p><a href="/startup-plan">Home</a></p>
      <p><a  classname="active" href="/OurServices">Our Services</a></p>
      <p><a href="/contact-us">Contact</a></p>
</div>  */}

<div className="Nav_link_container">
<p className="Nlink"><a href="/startup-plan">Home</a></p>
      <p className="Nlink"><a  classname="active" href="/OurServices">Our Services</a></p>
      <p className="Nlink"><a href="/contact-us">Contact</a></p>
</div>
    <div className="Nav-menu">
{toggleMenu
? <RiCloseLine color="#fff" size={27} onclick={()=> setToggleMenu(false)} />
:  <RiMenu3Line color="#fff" size={27} onclick={()=> setToggleMenu(true)} />
}
{toggleMenu &&(
  <div className="Nav-menu_container scale-up-center">
<div className="Nav-menu_container-links">
<p><a href="/startup-plan">Home</a></p>
      <p><a href="/OurServices">Our Services</a></p>
      <p><a href="/contact-us">Contact</a></p>
      
</div>

  </div>
  
)}
    </div>








     </div>
    
    
    
    
    
    
   















        
    );
}
    export default ServicesNav;