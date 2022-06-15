import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../../Context/modalStore";

const EmptyBoard = () => {
  const { setOpen, isOpen } = useContext(ModalContext);

  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
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
            onClick={setOpen}
          >
            Create Your First Task ;)
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default EmptyBoard;
