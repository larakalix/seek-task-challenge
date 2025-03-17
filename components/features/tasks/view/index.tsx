"use client";

import { useTaskWiew } from "./hooks/use-task-view";
import { TaskBoard } from "../task-board";

export const TaskView = () => {
    const { tasks } = useTaskWiew({ status: "" });

    return (
        <div>
            <TaskBoard tasks={tasks} />
        </div>
    );
};
