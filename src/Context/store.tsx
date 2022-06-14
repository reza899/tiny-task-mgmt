import React from 'react';
import { TinyTask, TinyTaskStore } from '../Models/TinyTaskStore.model';

export const TinyTaskContext = React.createContext<TinyTaskStore>(
  {} as TinyTaskStore
);

const TinyTaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = React.useState<TinyTask[]>([]);

  const addTask = (task: TinyTask) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (task: TinyTask) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  return (
    <TinyTaskContext.Provider
      value={{ tasks, addTask, removeTask, updateTask }}
    >
      {children}
    </TinyTaskContext.Provider>
  );
};

export default TinyTaskProvider;
