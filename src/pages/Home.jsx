import React from "react";
// import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import About from "../components/homepage/About";
import Card from "../components/homepage/homepagecards/Card";
import Why from "../components/Why/Why";
import Blog from "../components/Blog/Blog";
import Testi from "../components/Testimony/Testi";
import Footer from "../components/Footer/Footer";
// import Footer2 from "../components/Footer2/Footer2";

const Home = () => {
  return (
    <section className="w-full">
      <header className="w-full min-h-screen">
        
        <HeroSection />
      </header>

      <section className="full mt-5">
        <About />
        <Card />
        <Why />
        <Blog />
        <Testi />
        <Footer />  
        
      </section>
    </section>
  );
};

export default Home;
