import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="my-32">
        <h1 className="font-bold text-7xl text-center">Where to ? </h1>
       <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center my-10 border w-[50%] rounded-full p-2  ">
            <input placeholder="Enter name of the location " className="w-full outline-none px-10" name="search" type="text" />
            <button className="btn btn-success text-white rounded-full">Search</button>
        </div>
       </div>
      </div>
      
    </>
  );
};

export default HeroSection;
