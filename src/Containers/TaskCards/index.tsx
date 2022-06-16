// import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmptyBoard from "../../Components/EmptyBoard";
import TaskCard from "../../Components/TaskCard";
import { TinyTaskContext } from "../../Context/TinyTaskStore";
import Modal from "../Modal";
import { ModalContext } from "../../Context/modalStore";
import AddTask from "../../Components/AddTask";

const TaskCards = () => {
  const { tasks } = useContext(TinyTaskContext);
  const { setOpen } = useContext(ModalContext);
  return (
    <>
      <Modal />
      {tasks?.length > 0 ? (
        <>
          <Grid>
            <Button variant="contained" color="secondary">
              View Done Tasks
            </Button>
          </Grid>
          <Grid>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Grid>

          <Grid
            onClick={() => setOpen(<AddTask />)}
            sx={{
              position: "fixed",
              width: "100vw",
              bottom: 0,
              display: "flex",
              justifyContent: "flex-end",
              padding: "68px",
            }}
          >
            <AddCircleIcon
              htmlColor="primary"
              color="warning"
              style={{ height: "80px", width: "80px" }}
            />
          </Grid>
        </>
      ) : (
        <EmptyBoard />
      )}
    </>
  );
};

export default TaskCards;
