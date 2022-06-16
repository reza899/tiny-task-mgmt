import React, { useContext } from "react";
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
import { TinyTask } from "../../Models/TinyTaskStore.model";

interface EditTaskProps {
  task: TinyTask;
}

const EditTask: React.FC<EditTaskProps> = ({ task }) => {
  const [taskValues, setTaskValues] = React.useState<TinyTask>({
    id: task.id,
    title: task.title,
    description: task.description,
    priority: task.priority,
    extra: task.extra,
    status: task.status,
  });

  const { onClose } = useContext(ModalContext);
  const { updateTask } = useContext(TinyTaskContext);

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

  const editTaskHandler = () => {
    updateTask(taskValues);
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
        onClick={editTaskHandler}
      >
        Update
      </Button>
    </>
  );
};

export default EditTask;
