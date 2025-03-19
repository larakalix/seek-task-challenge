import { TaskStatus, type ActiveTaskStatus, type Task } from "@/types/task";

type Props = {
    tasks: Task[];
};

export const useReports = ({ tasks }: Props) => {
    const grouped = Object.groupBy(tasks, (task) => task.status);

    const tasksByStatus: Record<ActiveTaskStatus, number> = {
        [TaskStatus.Todo]: grouped[TaskStatus.Todo]?.length ?? 0,
        [TaskStatus.InProgress]: grouped[TaskStatus.InProgress]?.length ?? 0,
        [TaskStatus.Done]: grouped[TaskStatus.Done]?.length ?? 0,
    };

    const data = Object.entries(tasksByStatus).map(([status, count], id) => ({
        id,
        label: status,
        value: count,
    }));

    return { data };
};
