import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { tasksQueryConfig } from "@/services/tasks/query-config";
import { useTasksStore } from "@/stores/tasks-store";

export const useTaskWiew = ({ status }: { status: string }) => {
    const { data, error, isLoading, isRefetching } = useQuery(
        tasksQueryConfig({ status })
    );
    const { tasks, getByStatus } = useTasksStore((state) => state);

    useEffect(() => {
        useTasksStore.setState({ tasks: data || [] });
    }, [data]);

    return { tasks, error, isLoading, isRefetching, getByStatus };
};
