import type { Task } from "@/types/task";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDeleteTask } from "./hooks/use-delete-task";

type Props = {
    task: Task;
};

export const DeleteTask = ({ task }: Props) => {
    const { open, handleClickOpen, handleClose, handleDelete } = useDeleteTask({
        task,
    });

    if (!task.id) return null;

    return (
        <>
            <IconButton
                aria-label="delete"
                color="error"
                onClick={handleClickOpen}
            >
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Delete task {task.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this task?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleDelete}
                        autoFocus
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
