import mongoose from "mongoose";

const Messages = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 100 },
    email: { type: String, required: true, maxLength: 100 },
    message: { type: String, required: true, maxLength: 200 },
    date: { type: Date, required: true },
    read: { type: Boolean, default: false },
  },
  { collection: "messages" }
);

const MessagesSchema = mongoose.model("Messages", Messages);

export default MessagesSchema;
