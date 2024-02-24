import express from "express";
import multer from "multer";
import {
	addNewLocation,
	deleteLocation,
	getAllLocations,
	updateLocation,
} from "../controllers/place.controllers.js";

const router = express.Router();

// Setting multer to add images and videos to the request body
const upload = multer({
	storage: multer.memoryStorage(),
});

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.post("/comment/", addComment);
router.delete("/:id", deletePost);

export default router;
