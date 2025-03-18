import { TaskStatus, type Task } from "@/types/task";
import React from "react";
import { toast } from "sonner";
import { useDialog } from "@/hooks/use-dialog";
import { addTask, updateTask } from "@/services/tasks";
import { useAuthStore } from "@/stores/auth-store";
import { useTasksStore } from "@/stores/tasks-store";

type Props = {
    task: Task | null;
};

export const useHandleTask = ({ task }: Props) => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { user } = useAuthStore((state) => state);
    const { loading, add, update, setLoading } = useTasksStore(
        (state) => state
    );

    const statusList = [
        {
            value: TaskStatus.Todo,
            label: "To do",
        },
        {
            value: TaskStatus.InProgress,
            label: "In progress",
        },
        {
            value: TaskStatus.Done,
            label: "Done",
        },
    ];

    const handleAddTask = async ({
        title,
        description,
    }: {
        title: Task["title"];
        description: Task["description"];
    }) => {
        await addTask({ title, description }, `${user?.token}`)
            .then((response) => {
                if (response) {
                    add(response);
                }
            })
            .catch((error) => {
                console.error("ADD_TASK_ERROR", error);
                toast.error("Failed to add task");
            })
            .finally(() => {
                toast.success("Task added successfully");
                setLoading("idle");
                handleClose();
            });
    };

    const handleUpdateTask = async ({
        id,
        title,
        description,
        status,
    }: {
        id: Task["id"];
        title: Task["title"];
        description: Task["description"];
        status: Task["status"];
    }) => {
        await updateTask({ id, title, description, status }, `${user?.token}`)
            .then((response) => {
                if (response) {
                    update(response);
                }
            })
            .catch((error) => {
                console.error("UPDATE_TASK_ERROR", error);
                toast.error("Failed to update task");
            })
            .finally(() => {
                toast.success("Task updated successfully");
                setLoading("idle");
                handleClose();
            });
    };

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        if (!user) {
            toast.error("Please log in to add or update task");
            return;
        }

        setLoading("pending");

        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { title, description, status } = Object.fromEntries(
            formData.entries()
        ) as {
            title: Task["title"];
            description: Task["description"];
            status: Task["status"] | undefined;
        };

        if (!task) {
            handleAddTask({ title, description });
            return;
        } else if (task) {
            const id = task.id;
            handleUpdateTask({ id, title, description, status: status! });
            return;
        } else {
            toast.error("Failed to add or update task");
            handleClose();
        }
    };

    return {
        open,
        statusList,
        loading,
        user,
        handleClickOpen,
        handleClose,
        onSubmit,
    };
};
