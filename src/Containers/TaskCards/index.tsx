// import { Grid } from "@mui/material";
import React, { useContext } from "react";
import EmptyBoard from "../../Components/EmptyBoard";
import TaskCard from "../../Components/TaskCard";
import { TinyTaskContext } from "../../Context/TinyTaskStore";
import Modal from "../Modal";

const TaskCards = () => {
  const { tasks } = useContext(TinyTaskContext);

  return (
    <>
      <Modal />
      {tasks?.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <EmptyBoard />
      )}
    </>
  );
};

export default TaskCards;
