import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { taskControllers } from "./controllers";

const app = express();

dotenv.config();

app.use("/", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Connection
const connectDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todots.hm6ym6n.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectDB).then(() => {
  console.log("Connected to DB!");
});

//Routes
//GET Method
app.get("/list", taskControllers.getTasks);
//POST Method
app.post("/", taskControllers.addTask);
//DELETE Method
app.delete("/list/:id", taskControllers.deleteTask);

//Server run
app.listen(7070, () => console.log("Server running!"));
