import React, { useState } from "react";

const useSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleSignup = () => {
    console.log(email, password, confirm_password, first_name, last_name);
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
