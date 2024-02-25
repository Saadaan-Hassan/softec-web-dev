import React from 'react'
import useSignup from '../hooks/useSignup'
import FilterCombo from '../components/common/FilterCombo'

const Signup = () => {
    const { 
        email,
        setEmail,
        password,
        setPassword,
        confirm_password,
        setConfirmPassword,
        username,
        setUsername,
        gender,
        setGender,
        location,
        setLocation,
        handleSignup,
        response
    } = useSignup();

    
    return (
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-700">Signup</h1>
                <div className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            name='username' 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username} 
                            className="w-full input input-bordered" 
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            name='email' 
                            className="w-full input input-bordered" 
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Gender</span>
                        </label>
                        <FilterCombo options={["MALE","FEMALE"]} onSelect={(value)=>setGender(value)}  />
                    </div>
                    
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Location</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Location" 
                            name='location' 
                            className="w-full input input-bordered" 
                            onChange={(e) => setLocation(e.target.value)} 
                            value={location} 
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            className="w-full input input-bordered" 
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Confirm Password" 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            value={confirm_password} 
                            name='confirm_password' 
                            className="w-full input input-bordered" 
                        />
                    </div>
                    <div>
                        <button className="btn btn-block" onClick={handleSignup}>Signup</button>
                    </div>
                </div>
                <p className='text-center my-4'>Already Have Account ? <span className='text-blue-600 cursor-pointer'>Login</span> </p>
            </div>
        </div>
    );
}


export default Signup