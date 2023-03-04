import React from "react";
import ServicesNav from "../components/ServicesNav/ServicesNav";
import Header from "../components/Header/Header"
import ServicesCard from "../components/ServicesCard/ServicesCard";

import TemplateLink from "../components/TemplateLink/TemplateLink";
import Cards2 from "../components/Cards2/Cards2";
import Bizplan from "../components/Bizplan/Bizplan";
import Bizpresent from "../components/Bizpresent/Bizpresent";
import Pricing from "../components/Pricing/Pricing";
import Legal from "../components/Legal/Legal";
import Attorney from "../components/Attorney/Attorney";











const OurServices = () => {
    return (
      <div>
      <section className="w-full">
        <header className="w-full">
            
            <ServicesNav />
            <Header />
            </header>
            <ServicesCard />
            
            <TemplateLink />
            <Cards2 />
            <Bizplan />
            <Bizpresent />
            <Pricing />
            <Legal />
            <Attorney />

            </section>
            </div>
    );
};

export default OurServices;
