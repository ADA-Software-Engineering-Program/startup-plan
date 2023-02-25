import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import About from "../components/homepage/About";
import Card from "../components/homepage/homepagecards/Card";

const Home = () => {
  return (
    <section className="w-full">
      <header className="w-full min-h-screen">
        <Navbar />
        <HeroSection />
      </header>

      <section className="full mt-5">
        <About />
        <Card />
      </section>
    </section>
  );
};

export default Home;
