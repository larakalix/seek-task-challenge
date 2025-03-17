import type { Task } from "@/types/task";
import { create } from "zustand";

export type TasksStoreState = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    getByStatus: (status: Task["status"]) => Task[];
    getById: (id: Task["id"]) => Task | undefined;
};

export const useTasksStore = create<TasksStoreState>()((set, get) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    getByStatus: (status) =>
        get().tasks.filter((task) => task.status === status),
    getById: (id) => get().tasks.find((task) => task.id === id),
}));
