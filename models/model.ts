import { Schema, model } from "mongoose";

interface Tasks {
  content: String;
  date: Date;
}

const taskSchema = new Schema<Tasks>({
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Task = model<Tasks>("Task", taskSchema);
