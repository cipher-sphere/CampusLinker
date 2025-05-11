import express from 'express';
import { User } from "../db.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // ✅ Changed from 'bcrypt' to 'bcryptjs'
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();
const secret = "cipher"; // Consider using environment variables in production
const saltRounds = 10;

router.post("/signup", async (req, res) => {
    const { username, password, firstName, lastName, email, phoneNumber, rollNumber, department, yearOfStudy, dateOfBirth } = req.body;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            message: "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character."
        });
    }

    try {
        const existingUser = await User.findOne({
            $or: [
                { username },
                { rollNumber }
            ]
        });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(400).json({ message: "Username already exists" });
            }
            if (existingUser.rollNumber === rollNumber) {
                return res.status(400).json({ message: "Roll number already exists" });
            }
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds); // ✅ bcryptjs usage

        const user = new User({
            username,
            password: hashedPassword,
            firstName,
            lastName,
            email,
            phoneNumber,
            rollNumber,
            department,
            yearOfStudy,
            dateOfBirth
        });

        const savedUser = await user.save();
        const token = jwt.sign({ userID: savedUser._id }, secret);
        res.json({
            message: "Signed Up",
            token,
            userID: savedUser._id
        });

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
});

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found. Please sign up first."
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password); // ✅ bcryptjs usage
        if (passwordMatch) {
            const token = jwt.sign({ userID: user._id }, secret);
            return res.json({
                message: "Signed In Successfully",
                token,
                userID: user._id
            });
        } else {
            return res.status(401).json({
                message: "Incorrect password. Please try again."
            });
        }

    } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({
            message: "Error signing in",
            error: error.message
        });
    }
});

router.get("/profile", authenticateToken, async (req, res) => {
    const user = await User.findById(req.user.userID).select("-password");
    res.json({ user });
});

export default router;
