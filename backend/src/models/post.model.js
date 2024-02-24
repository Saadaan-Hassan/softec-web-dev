import { Schema, model } from "mongoose";
import commentSchema from "./comment.model.js";

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	post_image: {
		type: String,
	},

	createdAt: {
		type: Date,
		default: Date.now,
	},
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comment",
		},
	],
	// author: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "User",
	// 	required: true,
	// 	immutable: true,
	// },
});

postSchema.virtual("commentCount").get(function () {
	return this.comments.length;
});

const Post = model("Post", postSchema);

export default Post;
