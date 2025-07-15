import express from "express";
import { forgotPassword, login, register, resetPassword, verifyOtp } from "../controllers/authController.js";
import generateOtp from "../config/generateOtp.js";

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.post("/forgot-password", forgotPassword)
router.post("/generteOtp", generateOtp)
router.post("/verifyOtp", verifyOtp)
router.post("/resetPassword", resetPassword)


export default router
