import { Schema, model } from "mongoose";

const commentSchema = new Schema({
	commentBody: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	author: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
			immutable: true,
		},
	],
});

const Comment = model("Comment", commentSchema);

export default Comment;
