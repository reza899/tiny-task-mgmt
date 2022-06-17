import React from "react";
import { priorityDetails } from "../Context/TinyTaskStore";
import { TinyTask } from "../Models/TinyTaskStore.model";

const useForm = (
  initialValues: TinyTask,
  callback: Function,
  validate: (values: TinyTask) => { [key: string]: string },
) => {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "priority") {
      setValues({
        ...values,
        priority: priorityDetails[e.target.value],
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (Object.keys(validate(values)).length === 0) {
      setIsSubmitting(true);
      callback();
    } else {
      setErrors(validate(values));
    }
  };

  return { values, handleChange, handleSubmit, errors, isSubmitting };
};

export default useForm;
