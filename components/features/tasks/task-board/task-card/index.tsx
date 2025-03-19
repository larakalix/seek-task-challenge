import { getStatusLabel, TaskStatus, type Task } from "@/types/task";
import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip, { ChipProps } from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { HandleTask } from "../../handle-task";
import { DeleteTask } from "../../delete-task";

type Props = {
    task: Task;
    hideActions?: boolean;
};

export const TaskCard = ({ task, hideActions = false }: Props) => {
    const status = {
        [TaskStatus.Todo]: "default",
        [TaskStatus.InProgress]: "warning",
        [TaskStatus.Done]: "success",
        [TaskStatus.Deleted]: "info",
    }[task.status] as ChipProps["color"];

    return (
        <Card data-cy="task-card" className="flex flex-col h-full">
            <CardContent className="flex-1 flex flex-col justify-between">
                <header className="flex flex-col gap-2">
                    <Chip
                        label={getStatusLabel(task.status)}
                        color={status}
                        className="w-fit"
                    />
                    <Typography
                        data-cy="task-title"
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {task.title}
                    </Typography>
                </header>
                <Typography
                    data-cy="task-description"
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    className="min-h-10"
                >
                    {task.description}
                </Typography>
                <hr className="my-2 opacity-20" />
                <Typography variant="subtitle2" color="success">
                    <span className="font-semibold">
                        Created by {task.user_name}
                    </span>
                </Typography>
            </CardContent>
            {!hideActions && (
                <CardActions className="flex justify-between">
                    {task.status !== TaskStatus.Done && (
                        <DeleteTask task={task} />
                    )}
                    <HandleTask task={task} />
                </CardActions>
            )}
        </Card>
    );
};
