import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.config.js";
import userRoutes from "./src/routes/user.routes.js";
import placeRoutes from "./src/routes/place.routes.js";
import postRoutes from "./src/routes/post.routes.js";
import bodyParser from "body-parser";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./src/config/firebase.config.js";

// Initialze Firebase
initializeApp(firebaseConfig);

// Create express app
const app = express();

// Middleware
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:5173/"] }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/places", placeRoutes);
app.use("/api/posts", postRoutes);

app.listen(3000, () => {
	console.log("Server is running on port 3000: http://localhost:3000");
});

connectDB("mongodb://localhost:27017/softec-web-app");