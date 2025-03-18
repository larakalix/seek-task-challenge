import type { RegisterUser } from "@/types/user";
import { toast } from "sonner";
import { useDialog } from "@/hooks/use-dialog";
import { registerUser } from "@/services/auth";
import { useAuthStore } from "@/stores/auth-store";

export const useRegisterForm = () => {
    const { open, handleClickOpen, handleClose } = useDialog();
    const { setUser } = useAuthStore((state) => state);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { name, email, password } = Object.fromEntries(
            formData.entries()
        ) as RegisterUser;

        await registerUser({ name, email, password })
            .then((data) => {
                if (data) setUser(data);
            })
            .catch((error) => console.error("REGISTER_USER_ERROR", error))
            .finally(() => {
                toast.success("Register successful!");
                handleClose();
            });
    };

    return { open, handleClickOpen, handleClose, onSubmit };
};
