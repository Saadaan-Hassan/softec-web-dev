import React from 'react'
import useSignup from '../hooks/useSignup'

const Signup = () => {
const {email,
    setEmail,
    password,
    setPassword,
    confirm_password,
    setConfirmPassword,
    first_name,
    setFirstName,
    last_name,
    setLastName,
    handleSignup,response}=useSignup()
    const signin = async (e) => {
        e.preventDefault()
        handleSignup()
        if(response){
            console.log(response)
        }else{
            console.log('Signup failed')
        }
    }
    return (
    <>
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Signup</h1>
        <div className="space-y-4">
        <div>
                <label className="label">
                    <span className="text-base label-text">First Name</span>
                </label>
                <input type="text" placeholder="First Name
                " name='first_name' onChange={(e)=>setFirstName(e.target.value)}
                value={first_name}
                className="w-full input input-bordered" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Last Name" onChange={(e)=> setLastName( e.target.value)} value={last_name}
                name='last_name' className="w-full input input-bordered" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="Email Address" name='email' className="w-full input input-bordered"
                onChange={(e)=> setEmail( e.target.value)} value={email}
                 />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password"
                 name="password" onChange={(e)=> setPassword( e.target.value)} value={password}
                    className="w-full input input-bordered" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Enter Confirm Password"
                onChange={(e)=>setConfirmPassword(e.target.value)} value={confirm_password}
                 name='confirm_password'
                    className="w-full input input-bordered" />
            </div>
           
            <div>
                <button className="btn btn-block" onClick={signin}>Signup</button>
            </div>
        </div>
        <p className='text-center my-4'>Already Have Account ? <span className='text-blue-600 cursor-pointer'>Login</span> </p>
    </div>
</div>
    </>
  )
}

export default Signup