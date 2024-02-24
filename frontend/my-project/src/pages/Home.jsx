import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import CustomTripSection from "../components/CustomTripSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <CustomTripSection/>
    </>
  );
};

export default Home;
