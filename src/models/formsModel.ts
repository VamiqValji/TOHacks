import mongoose from "mongoose";
const Schema = mongoose.Schema;

let formsSchema = new Schema({
    formId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: Array, required: true },
    responses: { type: Array, required: true },
});

let forms = mongoose.model("forms", formsSchema);

export default forms;