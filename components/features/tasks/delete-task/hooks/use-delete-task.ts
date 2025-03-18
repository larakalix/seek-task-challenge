import type { Task } from "@/types/task";
import React from "react";
import { toast } from "sonner";
import { deleteTask } from "@/services/tasks";
import { useTasksStore } from "@/stores/tasks-store";

type Props = {
    task: Task;
};

export const useDeleteTask = ({ task }: Props) => {
    const [open, setOpen] = React.useState(false);
    const { remove } = useTasksStore((state) => state);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        if (!task.id) return;

        await deleteTask(task.id)
            .then((response) => {
                if (response) {
                    remove(response.id);
                }
            })
            .catch((error) => {
                console.error("REMOVE_TASK_ERROR", error);
                toast.error("Failed to remove task");
            })
            .finally(() => {
                toast.success("Task removed successfully");
                handleClose();
            });
    };

    return {
        open,
        handleClickOpen,
        handleClose,
        handleDelete,
    };
};
