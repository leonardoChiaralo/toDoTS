"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskControllers = exports.taskController = void 0;
const services_1 = require("./services");
class taskController {
    constructor() {
        this.addTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = {
                content: req.body.content,
            };
            yield services_1.taskServices.createTask(data);
        });
        this.getTasks = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const tasks = yield services_1.taskServices.getTasks();
            res.json(tasks);
        });
        this.deleteTask = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield services_1.taskServices.deleteTask(id);
            res.redirect("/");
        });
    }
}
exports.taskController = taskController;
exports.taskControllers = new taskController();
