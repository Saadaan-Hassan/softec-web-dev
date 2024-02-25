import axios from 'axios';
import React, { useContext, useState } from 'react';
import {toast} from 'react-toastify'
import UserContext from '../context/user/UserContext';
import { useNavigate } from 'react-router';

const useLogin = () => {
    const navigation = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);
    const [status, setStatus] = useState(false);
    const {setUser,user}=useContext(UserContext)
console.log(user)
    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/users/login/", {
                email: email,
                password: password
            });
            if (response && response.data) {
                setResponse(response.data);
                setStatus(true);
                toast.success(response.data.message)
                setUser(response.data.user)
                localStorage.setItem("token",response.data.token)
                navigation('/')                
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    };

    return { email, setEmail, password, setPassword, handleLogin, status, response };
};

export default useLogin;
