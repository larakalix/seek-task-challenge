export enum TaskStatus {
    Todo = "to-do",
    InProgress = "in-progress",
    Done = "done",
    Deleted = "deleted",
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
};

export function getStatusLabel(status: string): string {
    const label = {
        [TaskStatus.Todo]: "Todo",
        [TaskStatus.InProgress]: "In progress",
        [TaskStatus.Done]: "Done",
        [TaskStatus.Deleted]: "Deleted",
    }[status] as string;

    return label;
}
