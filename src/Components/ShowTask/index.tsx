import React from "react";
import { TinyTask } from "../../Models/TinyTaskStore.model";

interface ShowTaskProps {
  task: TinyTask;
}

const ShowTask: React.FC<ShowTaskProps> = ({ task }) => <div>{task.id}</div>;

export default ShowTask;
