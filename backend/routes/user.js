import express from 'express';
import { User } from "../db.js";
import jwt from 'jsonwebtoken';
import router from './mainRouter.js';

const secret = "cipher";

router.post("/signup", async (req, res) => {
    const { username,password,firstName,lastName,email,phoneNumber,rollNumber,department,yearOfStudy,dateOfBirth } = req.body;

})