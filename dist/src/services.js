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
exports.taskServices = exports.taskService = void 0;
const model_1 = require("../models/model");
class taskService {
    createTask(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTask = yield model_1.Task.create(data);
            return newTask;
        });
    }
    getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield model_1.Task.find();
            return tasks;
        });
    }
    deleteTask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield model_1.Task.findByIdAndDelete(id);
        });
    }
}
exports.taskService = taskService;
exports.taskServices = new taskService();
