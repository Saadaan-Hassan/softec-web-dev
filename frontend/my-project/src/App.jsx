import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import AddPost from "./pages/AddPost";
import HajjUmmrahGuide from "./pages/HajjUmmrahGuide";
import ContactUs from "./pages/ContactUs";
import axios from "axios";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<>
			<Router>
				<ToastContainer />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/community' element={<Community />} />
					<Route path='/community/post/:id' element={<BlogPage />} />
					<Route path='/createpost' element={<AddPost />} />
					<Route path='/hajjummrah' element={<HajjUmmrahGuide />} />
					<Route path='/contact-us' element={<ContactUs />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
