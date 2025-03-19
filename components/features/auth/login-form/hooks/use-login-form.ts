import type { LoginUser } from "@/types/user";
import { toast } from "sonner";
import { useDialog } from "@/hooks/use-dialog";
import { loginUser } from "@/services/auth";
import { useAuthStore } from "@/stores/auth-store";
import { ApiActionResult } from "@/types/api";

export const useLoginForm = () => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { setUser } = useAuthStore((state) => state);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { email, password } = Object.fromEntries(
            formData.entries()
        ) as LoginUser;

        const result = await loginUser({ email, password });
        if (!result) return;
        const { data, message, statusCode } = result;

        const action: ApiActionResult = {
            200: () => {
                setUser(data);
                toast.success(message);
            },
            500: () => toast.error(message),
        };

        if (statusCode in action) action[statusCode]();

        handleClose();
    };

    return { open, handleClickOpen, handleClose, onSubmit };
};
