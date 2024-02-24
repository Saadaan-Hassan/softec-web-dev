import express from "express";
import { addQuery, queryAns, getQuery, getQueries } from "../controllers/queries.controller.js";
import { checkAdminAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", checkAdminAuth, getQueries);
router.get("/:id", getQuery);
router.post("/", checkAdminAuth, addQuery);
router.patch("/:id", checkAdminAuth, queryAns);

export default router;
