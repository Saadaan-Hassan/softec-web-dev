import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender , setGender] = useState("");
  const [location , setLocation] = useState("");
  const [response , setResponse] = useState(null);
const navigation =useNavigate()
  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/signup/', {
        email,
        password,
        username,
        gender,
        location
      });
      // Handle response
      console.log('Signup successful:', response.data);
      // You can set response state here if needed
      setResponse(response.data);
      navigation('/login')
      
    } catch (error) {
      // Handle error
      console.error('Signup failed:', error);
      // You can set response state here if needed
      setResponse({ error: 'Signup failed. Please try again.' });
    }
  };

  return {
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
  };
};

export default useSignup;
