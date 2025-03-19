import type { Task } from "@/types/task";
import { PieChart } from "@mui/x-charts/PieChart";
import { useReports } from "./hooks/use-reports";

type Props = {
    tasks: Task[];
};

export const Reports = ({ tasks }: Props) => {
    const { data } = useReports({ tasks });

    return (
        <div>
            <h2 className="text-2xl font-bold mb-2 uppercase">
                Task Status Report
            </h2>

            <PieChart
                series={[
                    {
                        data,
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -45,
                        endAngle: 225,
                        cx: 150,
                        cy: 150,
                    },
                ]}
                width={400}
                height={300}
            />
        </div>
    );
};
