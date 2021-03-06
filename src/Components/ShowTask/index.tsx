import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../../Context/modalStore";
import { TinyTaskContext } from "../../Context/TinyTaskStore";
import { TinyTask } from "../../Models/TinyTaskStore.model";
import EditTask from "../EditTask";
import PriorityCircle from "../PriorityCircle";

interface ShowTaskProps {
  task: TinyTask;
}

const ShowTask: React.FC<ShowTaskProps> = ({ task }) => {
  const { doneTask, removeTask } = useContext(TinyTaskContext);
  const { setOpen, onClose } = useContext(ModalContext);

  return (
    <Grid container justifyContent="center">
      <Grid
        xs={2}
        style={{ display: "flex", flexDirection: "row", gap: "8px" }}
      >
        <PriorityCircle task={task} size="large" />
        <Typography variant="subtitle1">{task.priority.cw}</Typography>
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
          onClick={() => {
            doneTask(task.id);
            onClose();
          }}
          disabled={task.status === "DONE"}
        >
          Done Task
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "8px" }}
          onClick={() => {
            removeTask(task.id);
            onClose();
          }}
        >
          Delete Task
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShowTask;
