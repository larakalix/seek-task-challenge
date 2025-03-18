import { Button } from "@mui/material";
import { useAuthStore } from "@/stores/auth-store";

export const Logout = () => {
    const { logout } = useAuthStore((state) => state);

    return (
        <>
            <Button variant="contained" color="error" onClick={logout}>
                Logout
            </Button>
        </>
    );
};
