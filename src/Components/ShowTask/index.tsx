import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../../Context/modalStore";
import { TinyTaskContext } from "../../Context/TinyTaskStore";
import { TinyTask } from "../../Models/TinyTaskStore.model";
import EditTask from "../EditTask";

interface ShowTaskProps {
  task: TinyTask;
}

const ShowTask: React.FC<ShowTaskProps> = ({ task }) => {
  const { doneTask, removeTask } = useContext(TinyTaskContext);
  const { setOpen } = useContext(ModalContext);

  return (
    <Grid container justifyContent="center">
      <Grid xs={2}>
        <Typography variant="subtitle1">{task.priority}</Typography>
      </Grid>
      <Grid xs={10} textAlign="center">
        <Typography variant="h6">{task.title}</Typography>
      </Grid>
      <Grid xs={12} sx={{ padding: "24px 16px" }}>
        <Typography variant="subtitle2">{task.description}</Typography>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => setOpen(<EditTask task={task} />)}
          disabled={task.status === "DONE"}
        >
          Edit Task
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => doneTask(task.id)}
          disabled={task.status === "DONE"}
        >
          Done Task
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => removeTask(task.id)}
        >
          Delete Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShowTask;
