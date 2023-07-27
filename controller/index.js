import MessagesSchema from "../model/messagesModel.js";
import ProjectsSchema from "../model/projectsModel.js";
import asyncHandler from "express-async-handler";

const getResume = async (req, res) => {
  res.status(200).send({
    pdf: "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Resume.pdf?alt=media&token=8529f9ce-7069-4806-a9d8-131310d70533",
    jgp: "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Resume.jpg?alt=media&token=75b141b7-114b-4ace-be5f-2b47b534c9a0",
  });
};

const addNewProject = asyncHandler(async (req, res) => {
  const { name, description, techStack, url, repository, coverImageURL, date } =
    req.body;
  const response = await ProjectsSchema.create({
    name,
    description,
    techStack,
    url,
    repository,
    coverImageURL,
    date,
  });
  res.status(200).send({ message: "project added successfully!" });
});

const getTopProjects = asyncHandler(async (req, res) => {
  const projects = await ProjectsSchema.find().sort({ date: -1 }).limit(4);
  res.status(200).send(projects);
});

const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await ProjectsSchema.find().sort({ date: -1 });
  res.status(200).send(projects);
});

const addMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  const date = Date.now();
  const response = await MessagesSchema.create({
    name,
    email,
    message,
    date,
  });
  res.status(200).send({ message: "message sent successfully!" });
});

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await MessagesSchema.find().sort({ date: -1 });
  res.status(200).send(messages);
});

export {
  getResume,
  addNewProject,
  getTopProjects,
  getAllProjects,
  addMessage,
  getAllMessages,
};
