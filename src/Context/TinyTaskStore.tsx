import React, { useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  PriorityInfo,
  TinyTask,
  TinyTaskStore,
} from "../Models/TinyTaskStore.model";

export const TinyTaskContext = React.createContext<TinyTaskStore>(
  {} as TinyTaskStore,
);

const TinyTaskProvider = ({ children }: { children: React.ReactNode }) => {
  const { setLocalStorage, value: localStorageValue } =
    useLocalStorage<TinyTask[]>("tiny-task-store");

  const [tasks, setTasks] = React.useState<TinyTask[]>(localStorageValue);

  const addTask = useCallback(
    (task: TinyTask) => {
      setTasks([...tasks, task]);
      setLocalStorage([...tasks, task]);
    },
    [setLocalStorage, tasks],
  );

  const removeTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id));
      setLocalStorage(tasks.filter((task) => task.id !== id));
    },
    [setLocalStorage, tasks],
  );

  const updateTask = useCallback(
    (task: TinyTask) => {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setLocalStorage(tasks.map((t) => (t.id === task.id ? task : t)));
    },
    [setLocalStorage, tasks],
  );

  const doneTask = useCallback(
    (taskId: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, status: "DONE" } : task,
        ),
      );
      setLocalStorage(
        tasks.map((task) =>
          task.id === taskId ? { ...task, status: "DONE" } : task,
        ),
      );
    },
    [setLocalStorage, tasks],
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
