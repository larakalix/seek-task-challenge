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
    user_id: string;
    user_name: string;
};

export function getStatusLabel(status: string): string {
    const label = {
        [TaskStatus.Todo]: "Todo",
        [TaskStatus.InProgress]: "In progress",
        [TaskStatus.Done]: "Done",
    }[status] as string;

    return label;
}
