import { Grid } from "@mui/material";
import React, { useContext } from "react";
import EmptyBoard from "./Components/EmptyBoard";
import TaskCards from "./Containers/TaskCards";
import ModalProvider from "./Context/modalStore";
import TinyTaskProvider, { TinyTaskContext } from "./Context/TinyTaskStore";

const App = () => {
  const { tasks } = useContext(TinyTaskContext);

  return (
    <Grid container minHeight="100vh">
      <TinyTaskProvider>
        <ModalProvider>
          {(tasks === undefined || tasks?.length === 0) && <EmptyBoard />}
          {tasks && <TaskCards tasks={tasks} />}
        </ModalProvider>
      </TinyTaskProvider>
    </Grid>
  );
};

export default App;
