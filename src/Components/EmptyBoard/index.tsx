import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ModalContext } from "../../Context/modalStore";
import AddTask from "../AddTask";

const EmptyBoard = () => {
  const { setOpen, isOpen } = useContext(ModalContext);
  const { user, loginWithRedirect, logout, isLoading, isAuthenticated } =
    useAuth0();

  const loginRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let timer: any = null;
    if (!isAuthenticated) {
      timer = setTimeout(() => loginRef.current!.focus(), 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAuthenticated]);

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      margin="auto"
    >
      <Box textAlign="center" position="absolute" top="2rem">
        <Typography variant="subtitle1">
          Hello World {user && `,${user.name}`}
        </Typography>
      </Box>
      {!isOpen && (
        <Box>
          {!isLoading && !isAuthenticated && (
            <Button
              ref={loginRef}
              sx={{
                "&:focus": {
                  fontSize: 25,
                },
              }}
              onClick={loginWithRedirect}
            >
              Login
            </Button>
          )}
          {!isLoading && isAuthenticated && user && (
            <Button onClick={() => logout()}>Logout</Button>
          )}
          {isLoading && (
            <Typography variant="subtitle1">Loading ...</Typography>
          )}
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
