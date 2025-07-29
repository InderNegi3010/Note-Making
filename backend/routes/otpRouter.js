import express from "express";
import { otpGenerator, otpVerify } from "../controllers/otpController.js";

const otpRouter = express.Router();
otpRouter.post("/send-otp", otpGenerator);
otpRouter.post("/verify-otp", otpVerify);

export default otpRouter;
