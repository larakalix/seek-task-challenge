import type { Task } from "@/types/task";
type Props = {
    tasks: Task[];
};

export const useTaskGrid = ({ tasks }: Props) => {
    const tasksByStatus = Object.groupBy(tasks, (task) => task.status);

    return { tasksByStatus };
};
