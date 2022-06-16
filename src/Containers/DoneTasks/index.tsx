// import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { Grid } from "@mui/material";
import TaskCard from "../../Components/TaskCard";
import { TinyTaskContext } from "../../Context/TinyTaskStore";

const DoneTasks = () => {
  const { tasks } = useContext(TinyTaskContext);

  return (
    <Grid minWidth="50vw">
      {tasks
        .filter((task) => task.status === "DONE")
        .map((task) => (
          <TaskCard key={task.id} task={task} actionable={false} />
        ))}
    </Grid>
  );
};

export default DoneTasks;
