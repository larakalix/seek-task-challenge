import { Card } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export const LoadingSkeleton = () => {
    return (
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
                <Card key={index} className="px-4 py-8">
                    <Skeleton
                        variant="rounded"
                        width={53}
                        height={32}
                        sx={{ fontSize: "1rem" }}
                    />
                    <Skeleton variant="text" width={300} />
                    <Skeleton variant="text" width={300} height={16} />
                    <Skeleton variant="text" width={300} height={16} />
                </Card>
            ))}
        </div>
    );
};
