import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import CustomTripSection from "../components/CustomTripSection";
import CommunityPartners from "../components/CommunityPartners";
import Card from "../components/Card";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <CustomTripSection/>
      <CommunityPartners/>
      <h1 className="font-bold text-3xl text-center py-6">Our Community Posts</h1>
      <div className="px-10 flex gap-5">
      <Card/>
      <Card/>
      <Card/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
