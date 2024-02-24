import express from "express";
import {  addQuery, queryAns, getQuery,getQueries } from "../controllers/queries.controller.js";
import { checkAdminAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getQueries);
router.get("/:id", getQuery);
router.post("/", addQuery);
router.patch("/:id", queryAns);

export default router;
