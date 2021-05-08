import mongoose from "mongoose";
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  pfpUrl: { type: String, required: true },
  forms: { type: Array, required: true },
});

let users = mongoose.model("users", usersSchema);

export default users;