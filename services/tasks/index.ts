import type { Task } from "@/types/task";
import { globalEnv } from "@/utils/env-config";

export const getTasks = async ({
    status = "all",
}: {
    status: string;
}): Promise<Task[]> => {
    try {
        const response = await fetch(
            `${globalEnv.ApiUrl}tasks?${new URLSearchParams({
                status,
            })}`
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("GET_TASKS_ERROR", error);
        return [];
    }
};
