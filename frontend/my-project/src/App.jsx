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
import {
	DASHBOARD,
	LOGIN,
	PLACES,
	ADDPLACE,
	EDITPLACE,
	QUERIES,
	ANSWER,
	ANSQUERIES,
} from "./constants/routes.js";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import AdminDashboard from "./pages/admin/Home";
import AdminLogin from "./pages/admin/LogIn";
import Main from "./components/admin/Main";
import Places from "./pages/admin/Places/Places";
import AddPlace from "./pages/admin/Places/AddPlace";
import EditPlace from "./pages/admin/Places/EditPlace";
import Queries from "./pages/admin/Queries/Queries";
import Answer from "./pages/admin/Queries/Answer";
import AnsQueries from "./pages/admin/Queries/AnsQueries";
import UserContextProvider from "./context/user/UserContextProvider.jsx";

axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<>
			<Router>
			<UserContextProvider>

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

					<Route exact path={LOGIN} element={<AdminLogin />} />
					<Route element={<PrivateRoutes />}>
						<Route element={<Main />}>
							<Route exact path={DASHBOARD} element={<AdminDashboard />} />
							<Route exact path={PLACES} element={<Places />} />
							<Route exact path={ADDPLACE} element={<AddPlace />} />
							<Route exact path={EDITPLACE} element={<EditPlace />} />
							<Route exact path={QUERIES} element={<Queries />} />
							<Route exact path={ANSWER} element={<Answer />} />
							<Route exact path={ANSQUERIES} element={<AnsQueries />} />
						</Route>
					</Route>
				</Routes>
			</UserContextProvider>
			</Router>
		</>
	);
};

export default App;
