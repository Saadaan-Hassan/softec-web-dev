import { Schema, model } from "mongoose";

const querySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	messageType: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator: (email) =>
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
					email
				),
			message: "Invalid email format",
		},
	},
	message: {
		type: String,
		required: true,
	},
	replied: {
		type: Boolean,
		default: false,
	},
	answer: {
		type: String,
		default: "",
	},
});

export default model("Query", querySchema);
