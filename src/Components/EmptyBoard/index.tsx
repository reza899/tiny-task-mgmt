import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../../Context/modalStore";
import AddTask from "../AddTask";

const EmptyBoard = () => {
  const { setOpen, isOpen } = useContext(ModalContext);

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      margin="auto"
    >
      <Box textAlign="center" position="absolute" top="2rem">
        <Typography variant="subtitle1">Hello World</Typography>
      </Box>
      {!isOpen && (
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ border: "1px solid" }}
            onClick={() => setOpen(<AddTask />)}
          >
            Create Your First Task ;)
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default EmptyBoard;
