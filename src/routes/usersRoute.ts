import express from "express";
import mongoose from "mongoose";
import users from "../models/usersModel";
import {usersInterface} from "../ts/interface";

const router = express.Router();

router.get("/view", async (req, res) => {
    const foundUsers = await users.find({});

    if (!foundUsers) return res.status(400).json({success: false, data: "Error in fetching."});
    return res.status(200).json({success: true, message: "Returning all users", data: foundUsers});
});

router.post("/viewOne", async (req, res) => {
    const { userId }:usersInterface = req.body;

    const valuesAreValid = userId;
    if (!valuesAreValid) return res.status(400).json({success: false, message: "Invalid values. Required: userId"});

    const foundUser = await users.findOne({ userId });

    if (!foundUser) return res.status(400).json({success: false, data: "Error in fetching Possibly invalid userId."});
    return res.status(200).json({success: true, message: "Returning user", data: foundUser});
});

router.post("/create", async (req, res) => {

    const { name, password, pfpUrl }:usersInterface = req.body;
    
    const isDuplicate = await users.findOne({ name });
    if (isDuplicate) return res.status(400).json({success: false, message: "Account already exists."});

    const valuesAreValid = name && password && pfpUrl;
    if (!valuesAreValid) return res.status(400).json({success: false, message: "Invalid values. Required: name, password, pfpUrl"});

    let newUser:mongoose.Document = new users({
        // name,
        // password,
        // pfpUrl,
        // userId: Date.now(),
    });

    await newUser.save();

    return res.status(201).json({success: true, message: `Created user: '${name}'.`, data: newUser});
});

router.post("/login", async (req, res) => {

    const { name, password }:usersInterface = req.body;
    
    const valuesAreValid = name && password;
    if (!valuesAreValid) return res.status(400).json({success: false, message: "Invalid values. Required: name, password"});

    const isDuplicate = await users.findOne({ name });
    if (!isDuplicate) return res.status(400).json({success: false, message: "Account doesn't exist."});

    if (isDuplicate.password === password) return res.status(200).json({success: true, message: `Signed in user: '${name}'.`, data: isDuplicate });
    return res.status(400).json({success: false, message: "Incorrect password"});
});

export default router;