import { getStatusLabel, type Task } from "@/types/task";
import { useTaskGrid } from "./hooks/use-tasks-grid";
import { TaskCard } from "../task-card";

type Props = {
    tasks: Task[];
};

export const TaskGrid = ({ tasks }: Props) => {
    const { tasksByStatus } = useTaskGrid({ tasks });

    return (
        <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(tasksByStatus).map(([status, tasks], index) => (
                    <div key={`status-${status}-${index}`}>
                        <h2 className="text-xl font-bold mb-2 uppercase">
                            {getStatusLabel(status)}
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {tasks.map((task) => (
                                <TaskCard key={task.id} task={task} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
