import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Modal from "./Containers/Modal";
import TaskCards from "./Containers/TaskCards";
import ModalProvider from "./Context/modalStore";
import TinyTaskProvider, { TinyTaskContext } from "./Context/TinyTaskStore";

const App = () => {
  const { tasks } = useContext(TinyTaskContext);

  return (
    <Grid container minHeight="100vh">
      <TinyTaskProvider>
        <ModalProvider>
          <TaskCards tasks={tasks} />
          <Modal />
        </ModalProvider>
      </TinyTaskProvider>
    </Grid>
  );
};

export default App;
