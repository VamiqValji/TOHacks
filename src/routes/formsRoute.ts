import express from "express";
import mongoose from "mongoose";
import forms from "../models/formsModel";
import users from "../models/usersModel";
import {form as formInterface, usersInterface} from "../ts/interface";

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

    const { description, questions, title, userId }/*:formInterface*/ = req.body;
    
    // const isDuplicate = await forms.findOne({ formId });
    // if (isDuplicate) return res.status(400).json({success: false, message: "Account already exists."});

    const valuesAreValid = description && questions && title && userId;
    if (!valuesAreValid) return res.status(400).json({success: false, message: "Invalid values. Required: description, questions, title, userId"});

    const foundUser:mongoose.Document & usersInterface = await users.findOne({userId});
    if (!foundUser) return res.status(400).json({success: false, message: "Invalid userId"});

    let newForm:mongoose.Document = new forms({
        description, formId: Date.now().toString(), questions, title
    });

    foundUser.forms.push({ pointer: newForm.id });

    await newForm.save();

    foundUser.markModified("forms");
    await foundUser.save();

    return res.status(201).json({success: true, message: `Created form: '${title}'.`, data: newForm});
});

export default router;