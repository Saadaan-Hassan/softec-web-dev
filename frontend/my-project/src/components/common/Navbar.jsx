import React, { useContext } from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/profile.png";
import UserContext from "../../context/user/UserContext";
const Navbar = () => {
	const { user } = useContext(UserContext);
	const navlinks = [
		{ name: "Home", url: "/" },
		{ name: "Community", url: "/community" },
		{ name: "Hajj and Umrah Guidance", url: "/hajjummrah" },
		{ name: "Create Post", url: "/createpost" },
	];
	return (
		<div className='navbar bg-white border-b-2  '>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						{navlinks?.map((data, index) => {
							return (
								<li className='text-bold' key={index}>
									<Link to={data.url}>{data.name}</Link>
								</li>
							);
						})}
						<a className='btn btn-neutral'>Contact Us</a>
					</ul>
				</div>
				<Link to={"/"} className='ms-3.5'>
					<img
						src='../logo.jpg'
						alt='logo'
						style={{ width: "50px", height: "50px" }}
					/>
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex lg:items-center'>
				<ul className='menu menu-horizontal px-1 flex gap-10 '>
					{navlinks?.map((data, index) => {
						return (
							<li
								className='cursor-pointer font-semibold text-[17px] hover:text-success py-2'
								key={index}>
								<Link to={data.url}>{data.name}</Link>
							</li>
						);
					})}
					<Link to='/contact-us' className='btn btn-neutral'>
						Contact Us
					</Link>
				</ul>
			</div>
			<div className='navbar-end'>
				<div className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost'>
						<img className='w-10 h-10 rounded-full' src={pic} />
					</div>
					<ul
						tabIndex={0}
						className='menu dropdown-content w-52 shadow bg-base-100 rounded-box'>
						<li>
							{user ? (
								<Link to='/profile'>Profile </Link>
							) : (
								<Link to='/login'>Login</Link>
							)}
						</li>
						<li>
							{user ? (
								<Link to='/logout'>Logout</Link>
							) : (
								<Link to='/signup'>Signup </Link>
							)}
						</li>
					</ul>
				</div>
			</div>
			{/* <img className='mx-10' height={60} width={60} src={pic} /> */}
		</div>
	);
};

export default Navbar;
