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
			required: true,
			minlength: 5,
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
				"https://images.unsplash.com/photo-1620750034602-1ad42e46b86b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		},
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
