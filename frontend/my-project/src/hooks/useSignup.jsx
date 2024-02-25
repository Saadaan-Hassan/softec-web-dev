import React, { useState } from "react";
import axios from 'axios'
const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [response , setResponse]=useState(null)
  const handleSignup = async () => {
    try {
      // Make POST request to signup endpoint
      const response = await axios.post('http://localhost:3000/api/users/signup', {
        email,
        password,
        confirm_password,
        first_name,
        last_name
      });
      // Handle response
      console.log('Signup successful:', response.data);
      // You can set response state here if needed
      setResponse(response.data);
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
    first_name,
    setFirstName,
    last_name,
    setLastName,
    handleSignup,
    response
  };
};

export default useSignup;
