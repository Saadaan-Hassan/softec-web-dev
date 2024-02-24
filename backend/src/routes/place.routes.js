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

router.get("/", getAllLocations);
router.post(
	"/",
	upload.fields([
		{ name: "picture", maxCount: 1 },
		{ name: "video", maxCount: 1 },
	]),
	addNewLocation
);
router.patch(
	"/:id",
	upload.fields([
		{ name: "picture", maxCount: 1 },
		{ name: "video", maxCount: 1 },
	]),
	updateLocation
);

router.delete("/:id", deleteLocation);

export default router;
