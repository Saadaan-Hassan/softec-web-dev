import React from 'react'
import pic from "../assets/mapmobile.png"
const CustomTripSection = () => {
  return (
   <>
   <div className='grid grid-cols-12 bg-purple-400 w-full p-5'>
   <div className='col-span-9'>
    <h1 className='text-lg'>Make your own custom trips</h1>
   </div>
   <div className='col-span-3'>
    <img width={350} height={350} src={pic}/>
   </div>
   </div>
   </>
  )
}

export default CustomTripSection