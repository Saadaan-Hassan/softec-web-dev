import React, { useState } from "react";
import axios from 'axios'
const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [response , setResponse]=useState(null)
  const handleSignup = async (request) => {
    const data = await axios.post(request).then((res)=>{
        setResponse(res)
        console.log(res);
    }).catch((e)=>console.log(e))
    return data
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirm_password,
    setConfirmPassword,
    first_name,
    setFirstName,
    last_name,
    setLastName,
    handleSignup
  };
};

export default useSignup;
