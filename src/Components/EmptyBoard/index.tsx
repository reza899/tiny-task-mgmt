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
      <Box textAlign={'center'} position='absolute' top={'2rem'}>
        <Typography variant='subtitle1'>Hello World</Typography>
      </Box>
      <Box>
        <Button
          variant='contained'
          color='primary'
          sx={{ border: '1px solid' }}
        >
          Create Your First Task ;)
        </Button>
      </Box>
    </Grid>
  );
};

export default EmptyBoard;
