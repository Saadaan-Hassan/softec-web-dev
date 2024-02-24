import express from "express";
import { getUsers, loginUser, updateUser, createUser, getUser } from "../controllers/user.controller.js";
import { checkUserAuth, checkAdminAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", checkAdminAuth, getUsers);
router.get("/:id",checkUserAuth, getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);
router.patch("/:id", checkUserAuth, updateUser);

export default router;
