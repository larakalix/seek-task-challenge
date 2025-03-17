export enum TaskStatus {
    Todo = "to-do",
    InProgress = "in-progress",
    Done = "done",
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};
