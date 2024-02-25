import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LOGIN } from "../constants/routes.js";

function PrivateRoutes() {
	return localStorage.getItem("token") ? <Outlet /> : <Navigate to={LOGIN} />;
}

export default PrivateRoutes;
