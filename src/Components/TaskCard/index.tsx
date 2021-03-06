import { Box, Button, Card, Typography } from "@mui/material";
import React, { SyntheticEvent, useContext } from "react";
import { ModalContext } from "../../Context/modalStore";
import { TinyTaskContext } from "../../Context/TinyTaskStore";
import { TinyTask } from "../../Models/TinyTaskStore.model";
import EditTask from "../EditTask";
import PriorityCircle from "../PriorityCircle";
import ShowTask from "../ShowTask";

interface TaskCardProps {
  task: TinyTask;
  actionable: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, actionable }) => {
  const { doneTask } = useContext(TinyTaskContext);
  const { setOpen } = useContext(ModalContext);

  const doneTaskHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    doneTask(task.id);
  };

  const editTaskHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpen(<EditTask task={task} />);
  };

  return (
    <Card
      onClick={() => setOpen(<ShowTask task={task} />)}
      sx={{
        display: "flex",
        padding: "8px 16px",
        margin: "24px",
        justifyContent: "space-between",
        border: "1px solid black",
        borderRadius: "24px",
        backgroundColor:
          task.status === "DONE" && actionable ? "#EFEFEF" : "#FFFFFF",
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
          <Typography variant="subtitle1">{task.priority.cw}</Typography>
          <PriorityCircle task={task} size="medium" />
        </Box>
        {actionable && (
          <Box mt={1}>
            <Button
              onClick={doneTaskHandler}
              variant="contained"
              color="primary"
              sx={{
                border: "1px solid",
                maxHeight: "20px",
                marginRight: "8px",
              }}
              disabled={task.status === "DONE"}
            >
              Done Task
            </Button>
            <Button
              onClick={editTaskHandler}
              variant="contained"
              color="success"
              sx={{ border: "1px solid", maxHeight: "20px" }}
              disabled={task.status === "DONE"}
            >
              Edit Task
            </Button>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default TaskCard;
