import { Schema, model } from "mongoose";
import commentSchema from "./Comment";
import moment from "moment";

const postSchema = new Schema(
	{
		postTitle: {
			type: String,
			required: true,
		},
		postText: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => moment(timestamp).fromNow(),
		},
		comments: [commentSchema],
		author: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				required: true,
				immutable: true,
			},
		],
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

postSchema.virtual("commentCount").get(function () {
	return this.comments.length;
});

const Post = model("Post", postSchema);

export default Post;
