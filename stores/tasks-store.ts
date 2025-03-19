import type { Task } from "@/types/task";
import { create } from "zustand";

export type TasksStoreState = {
    tasks: Task[];
    trash: Task[];
    loading: "idle" | "pending" | "resolved" | "rejected";
    setTasks: (tasks: Task[]) => void;
    setTrash: (tasks: Task[]) => void;
    addToTrash: (task: Task) => void;
    add: (task: Task) => void;
    update: (task: Task) => void;
    remove: (id: Task["id"]) => void;
    getByStatus: (status: Task["status"]) => Task[];
    getById: (id: Task["id"]) => Task | undefined;
    setLoading: (loading: TasksStoreState["loading"]) => void;
};

export const useTasksStore = create<TasksStoreState>()((set, get) => ({
    tasks: [],
    trash: [],
    loading: "idle",
    setTasks: (tasks) => set({ tasks }),
    setTrash: (tasks) => set({ trash: tasks }),
    addToTrash: (task) => set({ trash: [...get().trash, task] }),
    add: (task) => set({ tasks: [...get().tasks, task] }),
    update: (task) =>
        set({
            tasks: get().tasks.map((t) =>
                t.id === task.id ? { ...t, ...task } : t
            ),
        }),
    remove: (id) => {
        const task = get().tasks.find((t) => t.id === id);

        if (!task) return;

        set({
            tasks: get().tasks.filter((t) => t.id !== id),
            trash: [...get().trash, task],
            loading: "idle",
        });
    },
    getByStatus: (status) =>
        get().tasks.filter((task) => task.status === status),
    getById: (id) => get().tasks.find((task) => task.id === id),
    setLoading: (loading) => set({ loading }),
}));
