import express from "express";
import {
  getResume,
  addNewProject,
  getTopProjects,
  getAllProjects,
  addMessage,
  getAllMessages,
} from "../controller/index.js";

const router = express.Router();

router.route("/getResume").get(getResume);
router.route("/add").post(addNewProject);
router.route("/getTopProjects").get(getTopProjects);
router.route("/getAllProjects").get(getAllProjects);
router.route("/addMessage").post(addMessage);
router.route("/getAllMessages").get(getAllMessages);

export default router;
