import express from "express";
import { getResume } from "../controller/index.js";

const router = express.Router();

router.route("/getResume").get(getResume);

export default router;
