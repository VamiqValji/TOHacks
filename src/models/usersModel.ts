import mongoose from "mongoose";
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

let users = mongoose.model("users", usersSchema);

export default users;