import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryInstance } from "@/utils/query-client";
import { tasksQueryConfig } from "@/services/tasks/query-config";
import { TaskView } from "@/components/features/tasks/view";

export default async function Home() {
    const client = getQueryInstance({
        staleTimeMinutes: 10,
    });
    await client.prefetchQuery(tasksQueryConfig({ status: "" }));

    return (
        <HydrationBoundary state={dehydrate(client)}>
            <TaskView />
        </HydrationBoundary>
    );
}
