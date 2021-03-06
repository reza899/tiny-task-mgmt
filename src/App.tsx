import { Grid } from "@mui/material";
// import Modal from "./Containers/Modal";
import TaskCards from "./Containers/TaskCards";
import ModalProvider from "./Context/modalStore";
import TinyTaskProvider from "./Context/TinyTaskStore";

const App = () => {
  return (
    <Grid
      container
      minHeight="100vh"
      flexDirection="column"
      sx={{ padding: "48px 196px" }}
    >
      <TinyTaskProvider>
        <ModalProvider>
          <TaskCards />
        </ModalProvider>
      </TinyTaskProvider>
    </Grid>
  );
};

export default App;
