import React from "react";
import { TinyTask } from "../../Models/TinyTaskStore.model";

interface TaskCardProps {
  task: TinyTask;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => <div>{task.id}</div>;

export default TaskCard;
