import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.config.js";
import userRoutes from "./src/routes/user.routes.js";

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

app.listen(3000, () => {
	console.log("Server is running on port 3000: http://localhost:3000");
});

connectDB("mongodb://localhost:27017/softec-web-app");
