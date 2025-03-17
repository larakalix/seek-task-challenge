import type { Task } from "@/types/task";
import { TaskCard } from "./childs/task-card";

type Props = {
    tasks: Task[];
};

export const TaskBoard = ({ tasks }: Props) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};
