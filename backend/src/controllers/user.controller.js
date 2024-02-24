import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";
dotenv.config();


// @desc: Get all users
// @route: GET /api/users/
// @access: Private
const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			message: "Users fetched successfully",
			users,
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// @desc: Create a new user
// @route: POST /api/users/signup
// @access: Public
const createUser = async (req, res) => {
	const user = req.body;

	if (!user) {
		return res.status(400).json({ message: "Invalid user data" });
	}

	//check if user already exists
	const existingEmail = await User.findOne({ email: user.email });
	const existingUsername = await User.findOne({ username: user.username });
	if (existingEmail) {
		return res.status(400).json({ message: "User already exists" });
	}
	if (existingUsername) {
		return res.status(400).json({ message: "User already exists" });
	}
	const hashPassword = await bcrypt.hash(user.password, 10);

	const newUser = new User({
		...user,
		password: hashPassword,
	});
	try {
		await newUser.save();

		const secret =
			user.role === "USER"
				? process.env.JWT_USER_KEY
				: process.env.JWT_Admin_KEY;

		const token = jwt.sign({ email: newUser.email, id: newUser._id }, secret, {
			expiresIn: "1h",
		});

		//send the response with the user and token without the password
		return res.status(201).json({
			message: "Account Created Succefully",
			user: sanitizeUser(newUser),
			token,
		});
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// @desc: Login a user
// @route: POST /api/users/login
// @access: Public
const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(404).json({ message: "User doesn't exist" });
		}

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		);
		if (!isPasswordCorrect) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			process.env.JWT_USER_KEY,
			{ expiresIn: "1h" }
		);

		res.status(200).json({
			message: "Login Successful",
			user: sanitizeUser(existingUser),
			token,
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// @desc: Update a user
// @route: PATCH /api/users/:id
// @access: Private
const updateUser = async (req, res) => {
	const { id } = req.params;
	const updates = req.body;

	if (!updates) {
		return res.status(400).json({ message: "Invalid user data" });
	}

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ message: "No user with that id" });
	}

	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		// Only update fields that are provided in the request body
		Object.keys(updates).forEach((update) => {
			user[update] = updates[update];
		});

		const updatedUser = await user.save();

		res.status(200).json({
			message: "User updated successfully",
			user: sanitizeUser(updatedUser),
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// @desc: Get a user
// @route: get /api/users/:id
// @access: Private
const getUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ message: "No user with that id" });
	}

	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({
			user: sanitizeUser(user),
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const sanitizeUser = (user) => {
	const { password, ...sanitizedUser } = user._doc;
	return sanitizedUser;
};

export { getUsers, createUser, loginUser, updateUser, getUser };





