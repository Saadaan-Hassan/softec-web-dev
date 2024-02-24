import React from "react";
import profile from "../assets/profile.png";
import EditUser from "../components/modals/EditUser";
import Navbar from "../components/common/Navbar";
const Profile = () => {
	return (
		<>
			<Navbar />
			<div className='h-[100vh] justify-center items-center flex flex-col gap-10 mt-20'>
				<div className='bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg'>
					<div className='px-4 py-5 sm:px-6'>
						<div className='flex items-center justify-between gap-10'>
							<h3 className='text-lg leading-6 font-medium text-gray-900'>
								Profile
							</h3>
							<img height={100} width={90} src={profile} />
						</div>
						<p className='mt-1 max-w-2xl text-sm text-gray-500'>
							Details and informations about user.
						</p>
					</div>
					<div className='border-t border-gray-200'>
						<dl>
							<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-gray-500'>Full name</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									Mickael Poulaz
								</dd>
							</div>
							<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-gray-500'>Gender</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									Male
								</dd>
							</div>
							<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-gray-500'>
									Email address
								</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									m.poul@example.com
								</dd>
							</div>
							<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-gray-500'>
									Description
								</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book. It has survived not only five centuries,
										but also the leap into electronic typesetting, remaining
										essentially unchanged. It was popularised in the 1960s with
										the release of Letraset sheets containing Lorem Ipsum
										passages, and more recently with desktop publishing software
										like Aldus PageMaker including versions of Lorem Ipsum.
									</p>
								</dd>
							</div>
							<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-gray-500'>Location</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									Lahore,Pakistan
								</dd>
							</div>
						</dl>
					</div>
				</div>
				{/* Modal Box  */}
				<EditUser />
			</div>
		</>
	);
};

export default Profile;
