import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getTasks, getDeletedTasks } from ".";

export const tasksQueryConfig = () =>
    queryOptions({
        queryKey: ["get-tasks"],
        queryFn: () => getTasks(),
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: true,
    });

export const trashTasksQueryConfig = ({ token }: { token: string }) =>
    queryOptions({
        queryKey: ["get-trash-tasks", { token }],
        queryFn: () => getDeletedTasks(token),
        placeholderData: keepPreviousData,
    });
