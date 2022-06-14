export interface TinyTask {
    id: string;
    title: string;
    description: string;
    extra: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "IN_PROGRESS" | "DONE";
}

export interface TinyTaskStore {
    tasks: TinyTask[];
    addTask: (task: TinyTask)=> void;
    removeTask: (id: string)=> void;
    updateTask: (task: TinyTask)=> void;
}