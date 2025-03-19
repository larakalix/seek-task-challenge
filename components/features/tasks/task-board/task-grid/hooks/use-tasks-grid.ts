import { TaskStatus, ActiveTaskStatus, type Task } from "@/types/task";
type Props = {
    tasks: Task[];
};

export const useTaskGrid = ({ tasks }: Props) => {
    const grouped = Object.groupBy(tasks, (task) => task.status);

    const tasksByStatus: Record<ActiveTaskStatus, Task[]> = {
        [TaskStatus.Todo]: grouped[TaskStatus.Todo] ?? [],
        [TaskStatus.InProgress]: grouped[TaskStatus.InProgress] ?? [],
        [TaskStatus.Done]: grouped[TaskStatus.Done] ?? [],
    };

    return { tasksByStatus };
};
