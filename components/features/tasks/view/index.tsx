"use client";

import { useTaskView } from "./hooks/use-task-view";
import { TaskGrid } from "../task-board/task-grid";
import { Reports } from "../reports";

export const TaskView = () => {
    const { tasks } = useTaskView();

    return (
        <div className="w-full">
            <Reports tasks={tasks} />

            <TaskGrid tasks={tasks} />
        </div>
    );
};
