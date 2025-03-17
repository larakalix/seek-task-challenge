import { TaskStatus, type Task } from "@/types/task";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip, { ChipProps } from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

type Props = {
    task: Task;
};

export const TaskCard = ({ task }: Props) => {
    const status = {
        [TaskStatus.Todo]: "primary",
        [TaskStatus.InProgress]: "warning",
        [TaskStatus.Done]: "success",
    }[task.status] as ChipProps["color"];

    return (
        <Card>
            <CardContent>
                <Chip label="primary" color={status} />
                <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {task.description}
                </Typography>
            </CardContent>
        </Card>
    );
};
