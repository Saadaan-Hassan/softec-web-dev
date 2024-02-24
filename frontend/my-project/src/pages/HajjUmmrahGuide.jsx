import React from 'react'
import HorizontalNonLinearStepper from '../components/common/HorizontalNonLinearStepper'
import Navbar from '../components/common/Navbar'

const HajjUmmrahGuide = () => {
  return (
    <>
     <Navbar/>
    <div className='p-10'>
     <h1 className ="text-center font-bold text-5xl p-10">Hajj and Ummrah Guidance </h1>   
    <HorizontalNonLinearStepper/></div>
    </>
  )
}

export default HajjUmmrahGuide