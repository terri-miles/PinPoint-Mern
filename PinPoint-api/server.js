import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import customerRoute from "./routes/customer.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

// Express app
const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://pinpointhub.netlify.app/",
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/customers", customerRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";

  return res.status(errorStatus).send(errorMessage);
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

const PORT = 8000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on PORT ${PORT}!`);
});
