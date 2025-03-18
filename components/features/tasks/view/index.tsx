"use client";

import { useTaskView } from "./hooks/use-task-view";
import { TaskGrid } from "../task-board/task-grid";
import { LoadingSkeleton } from "@/components/layout/common/loading-skeleton";

export const TaskView = () => {
    const { tasks, isLoading } = useTaskView();

    if (isLoading) return <LoadingSkeleton />;

    return (
        <div>
            <TaskGrid tasks={tasks} />
        </div>
    );
};
