import User from "../models/user.model.js";

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

export { getUsers };
