import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import connectDB from "./database/mongodb.js";

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:8080", "https://muhammadumairkhan.vercel.app"],
    methods: "*",
  })
);
app.use(express.json());

app.use(router);

const startServer = async () => {
  try {
    console.log("establishing connection to mongoDB...");
    await connectDB();
    app.listen(8080, () => console.log("server listening on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
