import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTrash } from "./hooks/use-trash";
import { TaskCard } from "../task-board/task-card";

export const Trash = () => {
    const { trash, maxWidth, open, handleClickOpen, handleClose } = useTrash();

    return (
        <>
            <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
            >
                Open trash
            </Button>
            <Dialog
                open={open}
                fullWidth
                maxWidth={maxWidth}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Deleted tasks
                </DialogTitle>
                <DialogContent>
                    {trash.length === 0 && (
                        <div className="p-4 py-10 text-center text-gray-500 border border-gray-200 rounded-lg">
                            No tasks found
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                        {trash.map((task) => (
                            <TaskCard
                                key={`trash-${task.id}`}
                                task={task}
                                hideActions
                            />
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
