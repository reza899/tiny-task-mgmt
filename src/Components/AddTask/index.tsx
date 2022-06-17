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
import useForm from "../../hooks/useForm";

const AddTask = () => {
  const uniqId = useId();

  const { onClose } = useContext(ModalContext);
  const { addTask: addNewTask } = useContext(TinyTaskContext);

  const initialValues: TinyTask = {
    id: uniqId,
    title: "",
    description: "",
    priority: priorityDetails.Low as PriorityInfo,
    extra: "",
    status: "IN_PROGRESS",
  };

  const addTaskHandler = () => {
    addNewTask(taskValues);
    onClose();
  };

  const errorValidation = (values: TinyTask) => {
    const errors: { [key: string]: string } = {};
    if (values.title.trim().length === 0) {
      errors.title = "Title is required";
    }
    if (values.description.trim().length === 0) {
      errors.description = "Description is required";
    }
    return errors;
  };

  const {
    values: taskValues,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, addTaskHandler, errorValidation);

  const priorityProps = (item: string) => ({
    checked: taskValues.priority.cw === item,
    onChange: handleChange,
    value: item,
    name: `priority`,
    inputProps: { "aria-label": item },
    fontSize: 128,
  });

  return (
    <>
      <TextField
        name="title"
        placeholder="Task Title"
        fullWidth
        onChange={handleChange}
        value={taskValues.title}
        error={errors?.title !== undefined}
      />
      <TextField
        name="description"
        placeholder="Task Description"
        multiline
        fullWidth
        minRows={4}
        onChange={handleChange}
        value={taskValues.description}
        error={errors?.description !== undefined}
      />
      <TextField
        name="extra"
        placeholder="Gifts and KPI for this task ;)"
        fullWidth
        onChange={handleChange}
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
        onClick={() => handleSubmit()}
        disabled={
          Object.keys(errors).length > 0 || taskValues.title.trim().length === 0
        }
      >
        Add to Tasks
      </Button>
    </>
  );
};

export default AddTask;
