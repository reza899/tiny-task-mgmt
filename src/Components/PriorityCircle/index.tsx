import React from "react";
import { TinyTask } from "../../Models/TinyTaskStore.model";

interface PriorityCircleProps {
  task: TinyTask;
  size: "medium" | "large";
}

const PriorityCircle: React.FC<PriorityCircleProps> = ({ task, size }) => {
  return (
    <div
      style={{
        minWidth: size === "medium" ? "24px" : "48px",
        minHeight: size === "medium" ? "24px" : "48px",
        backgroundColor: task.priority.color,
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "1rem",
      }}
    />
  );
};

export default PriorityCircle;
