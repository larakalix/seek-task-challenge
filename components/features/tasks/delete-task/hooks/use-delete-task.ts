import type { Task } from "@/types/task";
import { toast } from "sonner";
import { useDialog } from "@/hooks/use-dialog";
import { deleteTask } from "@/services/tasks";
import { useAuthStore } from "@/stores/auth-store";
import { useTasksStore } from "@/stores/tasks-store";

type Props = {
    task: Task;
};

export const useDeleteTask = ({ task }: Props) => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { user } = useAuthStore((state) => state);
    const { loading, remove, setLoading } = useTasksStore((state) => state);

    const handleDelete = async () => {
        if (!task.id) return;

        setLoading("pending");

        await deleteTask(task.id, `${user?.token}`)
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
                setLoading("idle");
                handleClose();
            });
    };

    return {
        open,
        user,
        loading,
        handleClickOpen,
        handleClose,
        handleDelete,
    };
};
