export enum TaskStatus {
    Todo = "to-do",
    InProgress = "in-progress",
    Done = "done",
    Deleted = "deleted",
}

export type ActiveTaskStatus = Exclude<TaskStatus, TaskStatus.Deleted>;

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
        [TaskStatus.Deleted]: "In trash",
    }[status] as string;

    return label;
}
