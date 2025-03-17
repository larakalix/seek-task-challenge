import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getTasks } from ".";

export const tasksQueryConfig = ({ status }: { status: string }) =>
    queryOptions({
        queryKey: ["get-tasks", { status }],
        queryFn: () => getTasks({ status }),
        placeholderData: keepPreviousData,
    });
