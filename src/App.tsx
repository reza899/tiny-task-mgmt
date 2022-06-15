import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import EmptyBoard from './Components/EmptyBoard';
import TaskCards from './Containers/TaskCards';
import TinyTaskProvider, { TinyTaskContext } from './Context/TinyTaskStore';

function App() {
  const { tasks } = useContext(TinyTaskContext);

  return (
    <Grid container minHeight={'100vh'}>
      <TinyTaskProvider>
        {(tasks === undefined || tasks?.length === 0) && <EmptyBoard />}
        {tasks && <TaskCards tasks={tasks} />}
      </TinyTaskProvider>
    </Grid>
  );
}

export default App;
