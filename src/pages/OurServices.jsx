import React from "react";
import ServicesNav from "../components/ServicesNav/ServicesNav";
import Header from "../components/Header/Header"
import ServicesCard from "../components/ServicesCard/ServicesCard";
import WhyServices from "../components/WhyServices/WhyServices";








const OurServices = () => {
    return (
      <div>
      <section className="w-full">
        <header className="w-full">
            
            <ServicesNav />
            <Header />
            </header>
            <ServicesCard />
            <WhyServices />

            </section>
            </div>
    );
};

export default OurServices;
