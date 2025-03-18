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
};

export const TaskCard = ({ task }: Props) => {
    const status = {
        [TaskStatus.Todo]: "default",
        [TaskStatus.InProgress]: "warning",
        [TaskStatus.Done]: "success",
        [TaskStatus.Deleted]: "error",
    }[task.status] as ChipProps["color"];

    return (
        <Card className="flex flex-col h-full">
            <CardContent className="flex-1 flex flex-col justify-between">
                <header className="flex flex-col gap-2">
                    <Chip
                        label={getStatusLabel(task.status)}
                        color={status}
                        className="w-fit"
                    />
                    <Typography gutterBottom variant="h5" component="div">
                        {task.title}
                    </Typography>
                </header>
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    className="min-h-14"
                >
                    {task.description}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-between">
                {task.status !== TaskStatus.Done && <DeleteTask task={task} />}
                <HandleTask task={task} />
            </CardActions>
        </Card>
    );
};
