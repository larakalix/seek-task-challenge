import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { tasksQueryConfig } from "@/services/tasks/query-config";
import { useTasksStore } from "@/stores/tasks-store";

export const useTaskView = () => {
    const { data, error, isLoading, isRefetching } = useQuery(
        tasksQueryConfig()
    );
    const { tasks, getByStatus } = useTasksStore((state) => state);

    useEffect(() => {
        if (!data) return;
        const { data: tasks } = data;

        useTasksStore.setState({ tasks: tasks || [] });
    }, [data]);

    return { tasks, error, isLoading, isRefetching, getByStatus };
};
