import React from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import theme from '../../Theme/default';

const AddTask = () => {
  const [selectedPriority, setSelectedPriority] = React.useState('Low');

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPriority(event.target.value);
  };

  const priorityProps = (item: string) => ({
    checked: selectedPriority === item,
    onChange: handlePriorityChange,
    value: item,
    name: `priority-radio-${item}`,
    inputProps: { 'aria-label': item },
    fontSize: 128,
  });

  return (
    <>
      <TextField name='task-tile' placeholder='Task Title' fullWidth />
      <TextField
        name='task-description'
        placeholder='Task Description'
        multiline
        fullWidth
        minRows={4}
      />
      <TextField
        name='task-extra'
        placeholder='Gifts and KPI for this task ;)'
        fullWidth
      />

      <RadioGroup
        row
        name='row-radio-buttons-group'
        sx={{ justifyContent: 'space-between', minWidth: '100vw' }}
      >
        <FormControlLabel
          value='Low'
          control={
            <Radio
              {...priorityProps('Low')}
              sx={{
                color: theme.palette.secondary.main,
                '& .MuiSvgIcon-root': {
                  fontSize: 60,
                },
                '&.Mui-checked': {
                  color: red[900],
                },
              }}
            />
          }
          label='Low'
        />
        <FormControlLabel
          value='Medium'
          control={
            <Radio
              {...priorityProps('Meidum')}
              sx={{
                color: theme.palette.secondary.main,
                '& .MuiSvgIcon-root': {
                  fontSize: 60,
                },
                '&.Mui-checked': {
                  color: yellow[500],
                },
              }}
            />
          }
          label='Medium'
        />
        <FormControlLabel
          value='High'
          control={
            <Radio
              {...priorityProps('High')}
              sx={{
                color: theme.palette.secondary.main,
                '& .MuiSvgIcon-root': {
                  fontSize: 60,
                },
                '&.Mui-checked': {
                  color: green[500],
                },
              }}
            />
          }
          label='High'
        />
      </RadioGroup>
    </>
  );
};

export default AddTask;
