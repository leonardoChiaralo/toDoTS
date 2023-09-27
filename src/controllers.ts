import { taskServices } from "./services";
import { Request, Response } from "express";

export class taskController {
  addTask = async (req: Request, res: Response) => {
    const data = {
      content: req.body.content,
    };

    await taskServices.createTask(data);
  };

  getTasks = async (req: Request, res: Response) => {
    const tasks = await taskServices.getTasks();
    res.json(tasks);
  };

  deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    await taskServices.deleteTask(id);
    res.redirect("/");
  };
}

export const taskControllers = new taskController();
