import React, { useCallback, useMemo } from "react";
import { TinyTask, TinyTaskStore } from "../Models/TinyTaskStore.model";

export const TinyTaskContext = React.createContext<TinyTaskStore>(
  {} as TinyTaskStore,
);

const TinyTaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = React.useState<TinyTask[]>([]);

  const addTask = useCallback(
    (task: TinyTask) =!> {
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

  const tinyTaskContextValue = useMemo(
    () => ({
      tasks,
      addTask,
      removeTask,
      updateTask,
    }),
    [addTask, removeTask, tasks, updateTask],
  );

  return (
    <TinyTaskContext.Provider value={tinyTaskContextValue}>
      {children}
    </TinyTaskContext.Provider>
  );
};

export default TinyTaskProvider;
