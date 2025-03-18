import type { LoginUser } from "@/types/user";
import { useDialog } from "@/hooks/use-dialog";

export const useLoginForm = () => {
    const { open, handleClickOpen, handleClose } = useDialog();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { email, password } = Object.fromEntries(
            formData.entries()
        ) as LoginUser;

        console.log("LOGIN_FORM", { email, password });
    };

    return { open, handleClickOpen, handleClose, onSubmit };
};
