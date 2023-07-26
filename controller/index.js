import MessagesSchema from "../model/messagesModel.js";
import ProjectsSchema from "../model/projectsModel.js";
import asyncHandler from "express-async-handler";

const getResume = async (req, res) => {
  // try {
  //   const pdfUrl =
  //     "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Umair_CV%20(1).pdf?alt=media&token=63a6b067-8ad1-41eb-9d1a-7ba1867fd9d9";
  //   const pdfResponse = await fetch(pdfUrl);
  //   const pdfBuffer = await pdfResponse.arrayBuffer();

  //   res.set("Content-Type", "application/pdf");
  //   res.set("Content-Disposition", 'inline; filename="Umair_CV.pdf"');
  //   res.set("Access-Control-Allow-Origin", "*");
  //   res.send(Buffer.from(pdfBuffer));
  // } catch (error) {
  //   console.error("Error fetching PDF:", error);
  //   res.status(500).send("Error fetching PDF");
  // }
  res.status(200).send({
    pdf: "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Resume.pdf?alt=media&token=46e487e3-8f0d-4323-a27a-c7a5f8be67f6",
    jgp: "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/resume.jpg?alt=media&token=3b7a95bb-de85-42e7-b693-94b6313c7ff6",
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
