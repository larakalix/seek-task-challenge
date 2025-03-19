import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDialog } from "@/hooks/use-dialog";
import { trashTasksQueryConfig } from "@/services/tasks/query-config";
import { useTasksStore } from "@/stores/tasks-store";
import { useAuthStore } from "@/stores/auth-store";

export const useTrash = () => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { user } = useAuthStore((state) => state);
    const { trash } = useTasksStore((state) => state);
    const { data, error, isLoading, isRefetching } = useQuery(
        trashTasksQueryConfig({
            token: `${user?.token}`,
        })
    );

    useEffect(() => {
        if (!data) return;
        const { data: tasks } = data;

        useTasksStore.setState({ trash: tasks || [] });
    }, [data]);

    return {
        trash,
        error,
        isLoading,
        isRefetching,
        open,
        handleClickOpen,
        handleClose,
    };
};
