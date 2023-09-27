import { Task } from "../models/model";

export class taskService {
  async createTask(data: any) {
    const newTask = await Task.create(data);
    return newTask;
  }

  async getTasks() {
    const tasks = await Task.find();
    return tasks;
  }

  async deleteTask(id: string) {
    await Task.findByIdAndDelete(id);
  }
}

export const taskServices = new taskService();
