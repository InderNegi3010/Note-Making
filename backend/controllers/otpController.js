import otpModel from "../models/otpModel.js";
import userModel from "../models/userModel.js";
import transporter from "../config/email.js";
import jwt from "jsonwebtoken";

const otpGenerator = async (req, res) => {
  const { email, name, dob } = req.body;
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

  await otpModel.create({ email, otp: otpCode });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otpCode}`,
  });

  res.json({ success: true, message: "OTP sent to email" });
};

const otpVerify = async (req, res) => {
  const { email, otp, name, dob } = req.body;
  const validOtp = await otpModel.findOne({ email, otp });

  if (!validOtp)
    return res.json({ success: false, message: "Invalid or expired OTP" });

  // OTP is valid → delete it
  await otpModel.deleteMany({ email });

  // Check if user exists
  let user = await userModel.findOne({ email });

  if (!user) {
    // Create new user for sign up
    if (!name || !dob) {
      return res.json({
        success: false,
        message: "Name and DOB are required for sign up",
      });
    }
    user = await userModel.create({
      name,
      email,
      dob: new Date(dob),
    });
  }

  const token = jwt.sign({ email, userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({
    success: true,
    token,
    user: {
      name: user.name,
      email: user.email,
      dob: user.dob,
    },
  });
};

export { otpGenerator, otpVerify };
