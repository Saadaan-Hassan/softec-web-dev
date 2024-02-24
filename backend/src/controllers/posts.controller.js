import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";

// @desc: Get all posts
// @route: GET /api/posts/
// @access: Public
const getAllPosts = async (req, res) => {
	try {
		const post = await Post.find();
		res.status(200).json({
			message: "Post fetched successfully",
			post,
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// @desc: Get single post
// @route: GET /api/posts/:id
// @access: Public
const getPost = async (req, res) => {
	try {
		const { id } = req.params;
		const post = await Post.findById(id);
		res.status(200).json({
			message: "Post fetched successfully",
			post,
		});
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

// @desc: Create new Posts
// @route: POST /api/posts/
// @access: Private
const addNewPosts = async (req, res) => {
	try {
		const { title, content } = req.body;

		const picture = req.file;

		// Check if pictures are provided
		if (!picture) {
			return res.status(400).json({ message: "No pictures provided" });
		}

		// Check if picture are more than 2MB
		if (picture.size > 2 * 1024 * 1024) {
			return res
				.status(400)
				.json({ message: "Cannot upload pictures larger than 2MB" });
		}
		// Upload pictures to Firebase Storage
		const storage = getStorage();
		const pictureStorageRef = ref(
			storage,
			`post_images/${Date.now()}_${picture.originalname}`
		);
		const pictureUploadTask = uploadBytesResumable(
			pictureStorageRef,
			picture.buffer
		);

		const pictureSnapshot = await pictureUploadTask;
		const pictureDownloadURL = await getDownloadURL(pictureSnapshot.ref);

		const newPost = new Post({
			title,
			content,
			post_image: pictureDownloadURL,
		});

		const savePost = await newPost.save();

		res
			.status(201)
			.json({ message: "Post created successfully", post: savePost });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// @desc: Update Post
// @route: Patch /api/posts/:id
// @access: Private
const updatePosts = async (req, res) => {
	try {
		const { id } = req.params;

		const { title, content } = req.body;

		const post = await Post.findById(id);

		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}

		const pictures = req.files;

		// Check if pictures are provided
		if (!pictures || pictures.length === 0) {
			return res.status(400).json({ message: "No pictures provided" });
		}

		// Check if pictures are more than 2MB
		if (pictures.some((picture) => picture.size > 2 * 1024 * 1024)) {
			return res
				.status(400)
				.json({ message: "Cannot upload pictures larger than 2MB" });
		}

		// Upload pictures to Firebase Storage
		const storage = getStorage();
		const pictureURLs = [];

		for (let i = 0; i < pictures.length; i++) {
			const picture = pictures[i];

			const pictureStorageRef = ref(
				storage,
				`post_images/${Date.now()}_${picture.originalname}`
			);
			const pictureUploadTask = uploadBytesResumable(
				pictureStorageRef,
				picture.buffer
			);

			const pictureSnapshot = await pictureUploadTask;
			const pictureDownloadURL = await getDownloadURL(pictureSnapshot.ref);

			pictureURLs.push(pictureDownloadURL);
		}

		const updatedPost = {
			title,
			content,
			post_images: pictureURLs,
		};

		const updatePost = await Post.findByIdAndUpdate(id, updatedPost, {
			new: true,
		});

		res.status(200).json({ message: "Post updated successfully", updatePost });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// @desc: Add Comment to Post
// @route: POST /api/posts/:id/comment/
// @access: Private
const addComment = async (req, res) => {
	try {
		const { id } = req.params;
		const { comment, name } = req.body;

		const post = await Post.findById(id);

		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}

		const newComment = new Comment({
			comment,
			name,
		});

		const saveComment = await newComment.save();

		post.comments.push(saveComment._id);

		await post.save();

		res
			.status(201)
			.json({ message: "Comment added successfully", saveComment });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// @desc: Get comments from Post
// @route: GET /api/posts/:id/comment/
// @access: Private
const getComments = async (req, res) => {
	try {
		const { id } = req.params;

		const post = await Post.findById(id).populate("comments");

		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}

		res.status(200).json({
			message: "Comments fetched successfully",
			comments: post.comments,
		});
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

// @desc: Delete Post
// @route: DELETE /api/posts/:id
// @access: Private
const deletePost = async (req, res) => {
	try {
		const { id } = req.params;

		const post = await Post.findById(id);

		if (!post) {
			return res.status(404).json({ message: "Post not found" });
		}

		// Delete comments from the post
		for (let i = 0; i < post.comments.length; i++) {
			const comment = post.comments[i];
			await Comment.findByIdAndDelete(comment);
		}

		// Delete pictures from Firebase Storage
		const storage = getStorage();

		for (let i = 0; i < post.post_images.length; i++) {
			const pictureURL = post.post_images[i];
			console.log(pictureURL);
			const pictureRef = ref(storage, pictureURL);
			await deleteObject(pictureRef);
		}

		await Post.findByIdAndDelete(id);

		res.status(200).json({ message: "Post deleted successfully" });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export {
	getAllPosts,
	getPost,
	addNewPosts,
	updatePosts,
	deletePost,
	addComment,
	getComments,
};
