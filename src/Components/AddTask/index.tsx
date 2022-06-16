import React, { useContext, useId } from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { green, red, yellow } from "@mui/material/colors";
import theme from "../../Theme/default";
import { ModalContext } from "../../Context/modalStore";
import { priorityDetails, TinyTaskContext } from "../../Context/TinyTaskStore";
import { PriorityInfo, TinyTask } from "../../Models/TinyTaskStore.model";

const AddTask = () => {
  const uniqId = useId();

  const [taskValues, setTaskValues] = React.useState<TinyTask>({
    id: uniqId,
    title: "",
    description: "",
    priority: priorityDetails.Low as PriorityInfo,
    extra: "",
    status: "IN_PROGRESS",
  });

  const { onClose } = useContext(ModalContext);
  const { addTask: addNewTask } = useContext(TinyTaskContext);

  const fieldOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValues({
      ...taskValues,
      [event.target.name]: event.target.value,
    });
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValues({
      ...taskValues,
      priority: priorityDetails[event.target.value],
    });
  };

  const priorityProps = (item: string) => ({
    checked: taskValues.priority.cw === item,
    onChange: handlePriorityChange,
    value: item,
    name: `priority`,
    inputProps: { "aria-label": item },
    fontSize: 128,
  });

  const addTaskHandler = () => {
    addNewTask(taskValues);
    onClose();
  };

  return (
    <>
      <TextField
        name="title"
        placeholder="Task Title"
        fullWidth
        onChange={fieldOnChange}
        value={taskValues.title}
      />
      <TextField
        name="description"
        placeholder="Task Description"
        multiline
        fullWidth
        minRows={4}
        onChange={fieldOnChange}
        value={taskValues.description}
      />
      <TextField
        name="extra"
        placeholder="Gifts and KPI for this task ;)"
        fullWidth
        onChange={fieldOnChange}
        value={taskValues.extra}
      />

      <RadioGroup
        row
        name="priority-radio-group"
        sx={{ justifyContent: "space-between", minWidth: "30vw" }}
      >
        <FormControlLabel
          value="Low"
          control={
            <Radio
              {...priorityProps("Low")}
              sx={{
                color: theme.palette.secondary.main,
                "& .MuiSvgIcon-root": {
                  fontSize: 60,
                },
                "&.Mui-checked": {
                  color: red[900],
                },
              }}
            />
          }
          label="Low"
        />
        <FormControlLabel
          value="Medium"
          control={
            <Radio
              {...priorityProps("Medium")}
              sx={{
                color: theme.palette.secondary.main,
                "& .MuiSvgIcon-root": {
                  fontSize: 60,
                },
                "&.Mui-checked": {
                  color: yellow[500],
                },
              }}
            />
          }
          label="Medium"
        />
        <FormControlLabel
          value="High"
          control={
            <Radio
              {...priorityProps("High")}
              sx={{
                color: theme.palette.secondary.main,
                "& .MuiSvgIcon-root": {
                  fontSize: 60,
                },
                "&.Mui-checked": {
                  color: green[500],
                },
              }}
            />
          }
          label="High"
        />
      </RadioGroup>
      <Button
        variant="contained"
        sx={{ width: "50%" }}
        onClick={addTaskHandler}
      >
        Add to Tasks
      </Button>
    </>
  );
};

export default AddTask;
