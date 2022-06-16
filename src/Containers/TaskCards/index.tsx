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
import DoneTasks from "../DoneTasks";

const TaskCards = () => {
  const { tasks } = useContext(TinyTaskContext);
  const { setOpen } = useContext(ModalContext);
  return (
    <>
      <Modal />
      {tasks?.length > 0 ? (
        <>
          <Grid>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setOpen(<DoneTasks />)}
              disabled={
                tasks.filter((task) => task.status === "DONE").length === 0
              }
            >
              View Done Tasks
            </Button>
          </Grid>
          <Grid>
            {tasks
              .sort((a, b) => b.priority.order - a.priority.order)
              .sort((a, b) =>
                a.status === "DONE" && b.status !== "DONE" ? 1 : -1,
              )
              .map((task) => (
                <TaskCard key={task.id} task={task} actionable />
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
