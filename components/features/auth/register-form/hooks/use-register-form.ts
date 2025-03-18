import type { RegisterUser } from "@/types/user";
import { useDialog } from "@/hooks/use-dialog";

export const useRegisterForm = () => {
    const { open, handleClickOpen, handleClose } = useDialog();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { name, email, password } = Object.fromEntries(
            formData.entries()
        ) as RegisterUser;

        console.log("REGISTER_FORM", { name, email, password });
    };

    return { open, handleClickOpen, handleClose, onSubmit };
};
