"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const controllers_1 = require("./controllers");
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use("/", express_1.default.static("public"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//DB Connection
const connectDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todots.hm6ym6n.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default.connect(connectDB).then(() => {
    console.log("Connected to DB!");
});
//Routes
//GET Method
app.get("/list", controllers_1.taskControllers.getTasks);
//POST Method
app.post("/", controllers_1.taskControllers.addTask);
//DELETE Method
app.delete("/list/:id", controllers_1.taskControllers.deleteTask);
//Server run
app.listen(7070, () => console.log("Server running!"));
