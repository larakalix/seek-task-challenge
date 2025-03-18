import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRegisterForm } from "./hooks/use-register-form";

export const RegisterForm = () => {
    const { open, handleClickOpen, handleClose, onSubmit } = useRegisterForm();

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
            >
                Register
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        component: "form",
                        onSubmit,
                    },
                }}
            >
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your name, email and password to register.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Register</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
