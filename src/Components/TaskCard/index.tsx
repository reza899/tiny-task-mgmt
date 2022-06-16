import { Box, Button, Card, Typography } from "@mui/material";
import React, { useContext } from "react";
import { TinyTaskContext } from "../../Context/TinyTaskStore";
import { TinyTask } from "../../Models/TinyTaskStore.model";

interface TaskCardProps {
  task: TinyTask;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { doneTask } = useContext(TinyTaskContext);

  const doneTaskHandler = () => {
    doneTask(task.id);
  };

  const editTaskHandler = () => {};

  return (
    <Card
      sx={{
        display: "flex",
        padding: "8px 16px",
        margin: "24px",
        justifyContent: "space-between",
        border: "1px solid black",
        borderRadius: "24px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="subtitle1" color="GrayText">
          {task.description.length > 25
            ? `${task.description.slice(0, 25)}...`
            : task.description}
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="subtitle1">{task.priority}</Typography>
          <div
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "red",
              borderRadius: "50%",
              border: "1px solid black",
              display: "inline-block",
              marginLeft: "1rem",
            }}
          />
        </Box>
        <Box>
          <Button
            onClick={doneTaskHandler}
            variant="contained"
            color="primary"
            sx={{ border: "1px solid", maxHeight: "20px" }}
          >
            Done Task
          </Button>
          <Button
            onClick={editTaskHandler}
            variant="contained"
            color="success"
            sx={{ border: "1px solid", maxHeight: "20px" }}
          >
            Edit Task
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default TaskCard;
