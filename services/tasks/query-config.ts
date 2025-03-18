import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getTasks } from ".";

export const tasksQueryConfig = () =>
    queryOptions({
        queryKey: ["get-tasks"],
        queryFn: () => getTasks(),
        placeholderData: keepPreviousData,
    });
