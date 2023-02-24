import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import About from "../components/homepage/About";

const Home = () => {
  return (
    <section className="w-full h-[1000vh]">
      <header className="w-full min-h-screen">
        <Navbar />
        <HeroSection />
      </header>

      <section className="full mt-5">
        <About />
      </section>
    </section>
  );
};

export default Home;
