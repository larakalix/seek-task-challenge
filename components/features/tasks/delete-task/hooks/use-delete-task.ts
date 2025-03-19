import type { Task } from "@/types/task";
import { toast } from "sonner";
import { useDialog } from "@/hooks/use-dialog";
import { deleteTask } from "@/services/tasks";
import { useAuthStore } from "@/stores/auth-store";
import { useTasksStore } from "@/stores/tasks-store";
import { ApiActionResult } from "@/types/api";

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

        const result = await deleteTask(task.id, `${user?.token}`);
        if (!result) return;
        const { data, message, statusCode } = result;

        const action: ApiActionResult = {
            200: () => {
                if (!data) return;

                remove(data.id);
                toast.success(message);
            },
            500: () => toast.error(message),
        };

        if (statusCode in action) action[statusCode]();

        handleClose();
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
