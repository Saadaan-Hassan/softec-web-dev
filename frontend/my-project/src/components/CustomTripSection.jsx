import React from 'react'
import pic from "../assets/mapmobile.png"
const CustomTripSection = () => {
  return (
   <>
   <div className='p-10'>
   <div className='grid grid-cols-12 bg-purple-500 w-full p-5 rounded-md'>
   <div className='col-span-9 pl-10 py-8'>
    <h1 className='text-5xl text-white  font-bold my-5'>Make your own custom trips</h1>
    <p className='text-4xl text-white'>Build a trip in minutes</p>
    <p className='text-3xl text-white py-10 w-[70%]'>Get a personalized itinerary just for you, guided by traveler tips and reviews.</p>
    <button className='btn btn-neutral text-xl'>Make your Trip</button>
   </div>
   <div className='col-span-3'>
    <img width={350} height={350} src={pic}/>
   </div>
   </div>
   </div>
   </>
  )
}

export default CustomTripSection