import React, { useCallback, useMemo } from "react";
import {
  PriorityInfo,
  TinyTask,
  TinyTaskStore,
} from "../Models/TinyTaskStore.model";

export const TinyTaskContext = React.createContext<TinyTaskStore>(
  {} as TinyTaskStore,
);

const TinyTaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = React.useState<TinyTask[]>([]);

  const addTask = useCallback(
    (task: TinyTask) => {
      setTasks([...tasks, task]);
    },
    [tasks],
  );

  const removeTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    [tasks],
  );

  const updateTask = useCallback(
    (task: TinyTask) => {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    },
    [tasks],
  );

  const doneTask = useCallback(
    (taskId: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, status: "DONE" } : task,
        ),
      );
    },
    [tasks],
  );

  const tinyTaskContextValue = useMemo(
    () => ({
      tasks,
      addTask,
      removeTask,
      updateTask,
      doneTask,
    }),
    [addTask, doneTask, removeTask, tasks, updateTask],
  );

  return (
    <TinyTaskContext.Provider value={tinyTaskContextValue}>
      {children}
    </TinyTaskContext.Provider>
  );
};

export const priorityDetails: { [key: string]: PriorityInfo } = {
  Low: { cw: "Low", color: "red", order: 3 },
  Medium: { cw: "Medium", color: "yellow", order: 2 },
  High: { cw: "High", color: "green", order: 1 },
};

export default TinyTaskProvider;
