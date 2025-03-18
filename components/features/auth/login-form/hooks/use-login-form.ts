import type { LoginUser } from "@/types/user";
import { toast } from "sonner";
import { useDialog } from "@/hooks/use-dialog";
import { loginUser } from "@/services/auth";
import { useAuthStore } from "@/stores/auth-store";

export const useLoginForm = () => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { setUser } = useAuthStore((state) => state);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { email, password } = Object.fromEntries(
            formData.entries()
        ) as LoginUser;

        await loginUser({ email, password })
            .then((data) => {
                if (data) setUser(data);
            })
            .catch((error) => console.error("LOGIN_USER_ERROR", error))
            .finally(() => {
                toast.success("Login successful!");
                handleClose();
            });
    };

    return { open, handleClickOpen, handleClose, onSubmit };
};
