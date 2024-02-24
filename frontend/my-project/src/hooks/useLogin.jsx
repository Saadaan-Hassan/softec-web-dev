import React, { useState } from 'react'

const useLogin = () => {
const [email , setEmail] = useState("")
const [password , setPassword]=useState("")
const handleLogin =()=>{
    console.log(email,password);
}

return{email,setEmail,password,setPassword,handleLogin}
}

export default useLogin