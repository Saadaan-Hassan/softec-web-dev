import express from "express";
import multer from "multer";
import {
	getAllPosts,
	addNewPosts,
	getPost,
	addComment,
	deletePost,
	getComments,
} from "../controllers/posts.controller.js";

const router = express.Router();

// Setting multer to add images
const upload = multer({
	storage: multer.memoryStorage(),
});

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", upload.single("file"), addNewPosts);
router.post("/:id/comment/", addComment);
router.get("/:id/comment/", getComments);
router.delete("/:id", deletePost);

export default router;
