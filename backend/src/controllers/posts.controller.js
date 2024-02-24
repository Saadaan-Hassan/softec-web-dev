import Post from "../models/post.model.js";
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";

// @desc: Get all locations
// @route: GET /api/locations/
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

// @desc: Create new Location
// @route: POST /api/locations/
// @access: Private
// const addNewLocation = async (req, res) => {
// 	try {
// 		const { location_name, description, latitude, longitude, city, category } =
// 			req.body;

// 		const picture = req.files.picture;
// 		const video = req.files.video;

// 		// Check if pictures are more than 2MB
// 		if (picture.size > 2 * 1024 * 1024) {
// 			return res
// 				.status(400)
// 				.json({ message: "Cannot upload pictures larger than 2MB" });
// 		}

// 		// Upload pictures to Firebase Storage
// 		const storage = getStorage();

// 		const pictureStorageRef = ref(
// 			storage,
// 			`place_pictures/${Date.now()}_${picture[0].originalname}`
// 		);
// 		const pictureUploadTask = uploadBytesResumable(
// 			pictureStorageRef,
// 			picture.buffer
// 		);

// 		const pictureSnapshot = await pictureUploadTask;
// 		const pictureDownloadURL = await getDownloadURL(pictureSnapshot.ref);

// 		const picture_url = pictureDownloadURL;

// 		// Upload video to Firebase Storage
// 		const videoStorageRef = ref(
// 			storage,
// 			`place_videos/${Date.now()}_${video[0].originalname}`
// 		);
// 		const videoUploadTask = uploadBytesResumable(videoStorageRef, video.buffer);

// 		const videoSnapshot = await videoUploadTask;
// 		const videoDownloadURL = await getDownloadURL(videoSnapshot.ref);

// 		const video_url = videoDownloadURL;

// 		const newPlace = new Place({
// 			location_name,
// 			description,
// 			latitude,
// 			longitude,
// 			city,
// 			category,
// 			picture: picture_url,
// 			video: video_url,
// 		});

// 		const savedPlace = await newPlace.save();
// 		res
// 			.status(201)
// 			.json({ message: "Product created successfully", product: savedPlace });
// 	} catch (error) {
// 		res.status(409).json({ message: error.message });
// 	}
// };

// @desc: Create Update Location
// @route: PUT /api/locations/:id
// @access: Private
// const updateLocation = async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const updates = req.body;

// 		const updatedLocation = await Place.findByIdAndUpdate(id, updates, {
// 			new: true,
// 		});

// 		if (!updatedLocation) {
// 			return res.status(404).json({ message: "Place not found" });
// 		}

// 		if (req.files !== null) {
// 			if (req.files.picture) {
// 				//Delete the old picture
// 				const oldPicture = updatedLocation.picture;
// 				const pictureRef = ref(getStorage(), oldPicture);
// 				await deleteObject(pictureRef);

// 				const picture = req.files.picture;
// 				// Check if pictures are more than 2MB
// 				if (picture.size > 2 * 1024 * 1024) {
// 					return res
// 						.status(400)
// 						.json({ message: "Cannot upload pictures larger than 2MB" });
// 				}

// 				// Upload pictures to Firebase Storage
// 				const storage = getStorage();

// 				const pictureStorageRef = ref(
// 					storage,
// 					`place_pictures/${Date.now()}_${picture[0].originalname}`
// 				);
// 				const pictureUploadTask = uploadBytesResumable(
// 					pictureStorageRef,
// 					picture.buffer
// 				);

// 				const pictureSnapshot = await pictureUploadTask;
// 				const pictureDownloadURL = await getDownloadURL(pictureSnapshot.ref);

// 				const picture_url = pictureDownloadURL;

// 				await Place.findByIdAndUpdate(
// 					id,
// 					{ picture: picture_url },
// 					{
// 						new: true,
// 					}
// 				);

// 				updatedLocation.picture = picture_url;
// 			}

// 			if (req.files.video) {
// 				//Delete the old video
// 				const oldVideo = updatedLocation.video;
// 				const videoRef = ref(getStorage(), oldVideo);
// 				await deleteObject(videoRef);

// 				const video = req.files.video;

// 				// Upload video to Firebase Storage
// 				const videoStorageRef = ref(
// 					storage,
// 					`place_videos/${Date.now()}_${video[0].originalname}`
// 				);
// 				const videoUploadTask = uploadBytesResumable(
// 					videoStorageRef,
// 					video.buffer
// 				);

// 				const videoSnapshot = await videoUploadTask;
// 				const videoDownloadURL = await getDownloadURL(videoSnapshot.ref);

// 				const video_url = videoDownloadURL;

// 				await Place.findByIdAndUpdate(
// 					id,
// 					{ video: video_url },
// 					{
// 						new: true,
// 					}
// 				);

// 				updatedLocation.video = video_url;
// 			}
// 		}

// 		res.status(201).json({
// 			message: "Product created successfully",
// 			place: updatedLocation,
// 		});
// 	} catch (error) {
// 		res.status(409).json({ message: error.message });
// 	}
// };

// @desc: Create Delete Location
// @route: Delete /api/locations/:id
// @access: Private
// const deleteLocation = async (req, res) => {
// 	try {
// 		const { id } = req.params;

// 		const place = await Place.findByIdAndDelete(id);
// 		if (!place) {
// 			return res.status(404).json({ message: "Place not found" });
// 		}

// 		const picture = place.picture;

// 		const video = place.video;

// 		const storage = getStorage();

// 		const pictureRef = ref(storage, picture);

// 		const videoRef = ref(storage, video);

// 		await deleteObject(pictureRef);

// 		await deleteObject(videoRef);

// 		res.status(200).json({ message: "Place deleted successfully" });
// 	} catch (error) {
// 		res.status(409).json({ message: error.message });
// 	}
// };

export { getAllPosts, addNewLocation, updateLocation, deleteLocation };
