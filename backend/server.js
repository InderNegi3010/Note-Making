import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/mongodb.js";
import otpRouter from "./routes/otpRouter.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
app.use("/api/user", otpRouter);

app.get("/", (req, res) => res.send("Inder is here"));

app.listen(port, () => console.log("Server started on Port:", port));
