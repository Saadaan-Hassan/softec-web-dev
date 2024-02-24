import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const checkUserAuth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.JWT_USER_KEY);

		req.userData = decodedToken;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Auth failed" });
	}
};

const checkAdminAuth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, process.env.JWT_Admin_KEY);

		req.adminData = decodedToken;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Auth failed" });
	}
};

export { checkUserAuth, checkAdminAuth };
