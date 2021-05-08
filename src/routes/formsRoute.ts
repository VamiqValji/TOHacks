import express from "express";
import mongoose from "mongoose";
import forms from "../models/formsModel";
import {form as formInterface} from "../ts/interface";

const router = express.Router();

router.get("/view", async (req, res) => {
    const foundForms = await forms.find({});

    if (!foundForms) return res.status(400).json({success: false, data: "Error in fetching."});
    return res.status(200).json({success: true, message: "Returning all forms", data: foundForms});
});

router.post("/viewOne", async (req, res) => {
    const { formId }:formInterface = req.body;

    const valuesAreValid = formId;
    if (!valuesAreValid) return res.status(400).json({success: false, message: "Invalid values. Required: formId"});

    const foundForm = await forms.findOne({ formId });

    if (!foundForm) return res.status(400).json({success: false, data: "Error in fetching Possibly invalid formId."});
    return res.status(200).json({success: true, message: "Returning form", data: foundForm});
});

router.post("/create", async (req, res) => {

    const { description, questions, title }:formInterface = req.body;
    
    // const isDuplicate = await forms.findOne({ formId });
    // if (isDuplicate) return res.status(400).json({success: false, message: "Account already exists."});

    const valuesAreValid = description && questions && title;
    if (!valuesAreValid) return res.status(400).json({success: false, message: "Invalid values. Required: description, questions, title"});

    let newForm:mongoose.Document = new forms({
        description, formId: Date.now().toString(), questions, title
    });

    await newForm.save();

    return res.status(201).json({success: true, message: `Created form: '${title}'.`, data: newForm});
});

export default router;