import { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';


dotenv.config();
import express from "express";
const app: Application = express();
const Uri = process.env.MONGO
const port = process.env.PORT || 8000;
import cors from "cors";

//mogoose

const mongoose = require("mongoose");
mongoose.connect(Uri);

const db = mongoose.connection;
db.on("error", (error:Error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to Database");
});

//express
app.use(express.json());
app.use(cors());
//this cors not working ---
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// routes
const router = require("./routes/router");
// import router from "./routes/router";
app.use("/", router);

app.listen(port, () => {
  console.log(`Server started on port -- ${port}`);
});

// my output
// console.log(port, Uri);