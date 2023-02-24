import React from "react";
import { About, HeroSection, Navbar } from "../components";

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
