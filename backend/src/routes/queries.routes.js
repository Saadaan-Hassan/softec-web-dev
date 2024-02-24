import express from "express";
import { addQuery, queryAns, getQuery, getQueries, getAnsweredQueries } from "../controllers/queries.controller.js";
import { checkAdminAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", checkAdminAuth, getQueries);
router.get("/AnsweredQueries", checkAdminAuth, getAnsweredQueries);
router.get("/:id", getQuery);
router.post("/", addQuery);
router.patch("/:id", checkAdminAuth, queryAns);

export default router;
