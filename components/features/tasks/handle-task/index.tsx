"use client";

import type { Task } from "@/types/task";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useHandleTask } from "./hooks/use-handle-task";

type Props = {
    task: Task | null;
};

export const HandleTask = ({ task }: Props) => {
    const {
        open,
        statusList,
        loading,
        user,
        handleClickOpen,
        handleClose,
        onSubmit,
    } = useHandleTask({ task });

    const action = task ? "Edit" : "Add";

    if (!user) return null;
    if (task && user.id !== task?.user_id) return null;

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                {action} task
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
                <DialogTitle>
                    {action} task {task?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {task
                            ? "Edit the task details"
                            : "Add a new task, fill in the details"}
                    </DialogContentText>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        defaultValue={task?.title}
                    />

                    <TextField
                        required
                        margin="dense"
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        rows={4}
                        defaultValue={task?.description}
                    />

                    {task && (
                        <Select
                            labelId="status"
                            id="status"
                            name="status"
                            defaultValue={task?.status}
                            label="Status"
                        >
                            <MenuItem value="">Select a status</MenuItem>
                            {statusList.map((status) => (
                                <MenuItem
                                    key={status.value}
                                    value={status.value}
                                >
                                    {status.label}
                                </MenuItem>
                            ))}
                        </Select>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={loading === "pending"}
                    >
                        {action}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
