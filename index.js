import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/UserRoutes.js";

dotenv.config(); // load .env first

const app = express();

// middleware
app.use(bodyParser.json());

// log environment variable to check if it's loaded
console.log("MONGO_URI =", process.env.MONGO_URI);  // <-- add here

// environment variables
const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URI;
// routes
app.use("/api", route);

// database connection
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
