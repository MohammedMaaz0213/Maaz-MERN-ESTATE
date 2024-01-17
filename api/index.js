import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import listingRouter from "./routes/listing.routes.js";
import cookieParser from "cookie-parser";
import path from "path";

mongoose
  .connect(
    "mongodb+srv://maaz:waheed@cluster0.7vw92wa.mongodb.net/mern-estate?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("errorrrrrrr", err);
  });

const __dirname = path.resolve();
const app = express();

app.use(express.json());

app.use(cookieParser());
app.listen(3000, () => {
  console.log("server is running...");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    middleware: "this is from a middleware",
  });
});
