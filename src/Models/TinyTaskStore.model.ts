export type PriorityType = "Low" | "Medium" | "High";
export type PriorityInfo = { cw: PriorityType; color: string; order: number };

export interface TinyTask {
  id: string;
  title: string;
  description: string;
  extra: string;
  priority: PriorityInfo;
  status: "IN_PROGRESS" | "DONE";
}

export interface TinyTaskStore {
  tasks: TinyTask[];
  addTask: (task: TinyTask) => void;
  removeTask: (id: string) => void;
  updateTask: (task: TinyTask) => void;
  doneTask: (taskId: string) => void;
}
