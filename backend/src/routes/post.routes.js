import express from "express";
import multer from "multer";
import {
	getAllPosts,
	addNewPosts,
	getPost,
	addComment,
	deletePost,
} from "../controllers/posts.controller.js";

const router = express.Router();

// Setting multer to add images
const upload = multer({
	storage: multer.memoryStorage(),
});

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", upload.array("post_images"), addNewPosts);
router.post("/:id/comment/", addComment);
router.delete("/:id", deletePost);

export default router;
