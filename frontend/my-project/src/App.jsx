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

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<>
			{/* <Community/> */}
			<BlogPage />
			{/* <AddPost /> */}
			{/* <HajjUmmrahGuide/> */}
			{/* <ContactUs /> */}
		</>
	);
};

export default App;
