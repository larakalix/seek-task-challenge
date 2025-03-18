import type { Task } from "@/types/task";
import { create } from "zustand";

export type TasksStoreState = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    add: (task: Task) => void;
    update: (task: Task) => void;
    remove: (id: Task["id"]) => void;
    getByStatus: (status: Task["status"]) => Task[];
    getById: (id: Task["id"]) => Task | undefined;
};

export const useTasksStore = create<TasksStoreState>()((set, get) => ({
    tasks: [],
    setTasks: (tasks) => set({ tasks }),
    add: (task) => set({ tasks: [...get().tasks, task] }),
    update: (task) =>
        set({
            tasks: get().tasks.map((t) =>
                t.id === task.id ? { ...t, ...task } : t
            ),
        }),
    remove: (id) =>
        set({ tasks: get().tasks.filter((task) => task.id !== id) }),
    getByStatus: (status) =>
        get().tasks.filter((task) => task.status === status),
    getById: (id) => get().tasks.find((task) => task.id === id),
}));
