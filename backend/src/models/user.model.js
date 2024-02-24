import { Schema, model } from "mongoose";
import { hash, compare } from "bcrypt";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/.+@.+\..+/, "Must match an email address!"],
		},
		password: {
			type: String,
			required: true
		},
		otp:{
			type: Number
		},
		posts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Post",
			},
		],
		createdAt: {
			type: String,
		},
		location: String,
		description: String,
		avatar: {
			type: String,
			trim: true,
			default:
				"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg",
		},
		dob: {
			type: Date,
			required: true,
		},
		gender: {
			type: String,
			enum: ["MALE", "FEMALE", "OTHER"],
			required: true,
		},
		role: {
			type: String,
			enum: ["USER", "ADMIN"],
			default: "USER",
		}
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isCorrectPassword("password")) {
		const saltRounds = 10;
		this.password = await hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return compare(password, this.password);
};

const User = model("User", userSchema);

export default User;
