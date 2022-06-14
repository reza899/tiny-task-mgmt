import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const EmptyBoard = () => {
  return (
    <Grid
      container
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Box textAlign={'center'} position='absolute' top='0'>
        <Typography variant='h6'>Hello World</Typography>
      </Box>
      <Box>
        <Button variant='contained' color='primary'>
          Create Your First Task ;)
        </Button>
      </Box>
    </Grid>
  );
};

export default EmptyBoard;
