import mongoose from "mongoose";
const Schema = mongoose.Schema;

let formsSchema = new Schema({

});

let forms = mongoose.model("forms", formsSchema);

export default forms;