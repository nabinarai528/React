import express from "express";
import { forgotPassword, login, register } from "../controllers/authController.js";
import generateOtp from "../config/generateOtp.js";

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.post("/forgot-password", forgotPassword)
router.post("/generteOtp", generateOtp)


export default router
