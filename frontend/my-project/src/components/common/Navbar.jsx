import React from 'react'
import pic from '../../assets/profile.png'
const Navbar = () => {
    const navlinks =[{name :'Home' , url:"/home"},{name:'Community',url:"/community"},{name:"Hajj and Umrah Guidance",url:"/hajjummrah"}]
  return (
    <div className="navbar bg-white border-b-2  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks?.map((data,index)=>{
            return <li className='text-bold' key={index}>{data.name}</li>
        })}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Travel Advisor</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex gap-10 ">
    {navlinks?.map((data,index)=>{
            return <li className='cursor-pointer font-semibold text-[17px]' key={index}>{data.name}</li>
        })}
    </ul>
  </div>
  
  <div className="navbar-end ">
    <a className="btn btn-neutral">Contact Us</a>
  </div>
  <img className='mx-10' height={60} width={60} src={pic}/>
  
</div>
  )
}

export default Navbar