import React, { useEffect ,useContext} from 'react'
import useLogin from '../hooks/useLogin'

const Login = () => {
    
    const {handleLogin,email,setEmail,setPassword,password,response,status} =useLogin()
    
    return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
        <div className="space-y-4">
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} 
                value={email}
                 name='email' className="w-full input input-bordered" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                 name='password' className="w-full input input-bordered" />
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
            <div>
                <button className="btn btn-block" onClick={handleLogin}>Login</button>
            </div>
        </div>
        <p className='text-center my-4'>Dont Have Account ? <span className='text-blue-600 cursor-pointer'>Signup</span> </p>
    </div>
</div>
  )
}

export default Login