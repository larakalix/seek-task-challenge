"use client";

import { useTaskView } from "./hooks/use-task-view";
import { TaskGrid } from "../task-board/task-grid";

export const TaskView = () => {
    const { tasks } = useTaskView();

    return (
        <div className="w-full">
            <TaskGrid tasks={tasks} />
        </div>
    );
};
