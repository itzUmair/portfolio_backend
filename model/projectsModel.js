import mongoose from "mongoose";

const Projects = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 50 },
    description: { type: String, required: true, maxLength: 200 },
    techStack: [{ type: String, required: true, maxLength: 20 }],
    url: { type: String, required: true },
    repository: { type: String, required: true },
    coverImageURL: { type: String, required: true },
  },
  { collection: "projects" }
);

const ProjectsSchema = mongoose.model("Projects", Projects);

export default ProjectsSchema;
