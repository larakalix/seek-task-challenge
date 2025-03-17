import { TASKS } from "@/data/data";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    {
        params,
    }: {
        params: Promise<{
            status: string;
        }>;
    }
) {
    try {
        const { status } = await params;

        const data = status
            ? TASKS.filter((task) => task.status === status)
            : TASKS;

        return NextResponse.json({
            message: "Tasks retrieved successfully",
            data,
        });
    } catch (error) {
        console.error("TASK_GET_ERROR", error);
        return new Response(JSON.stringify("Internal Server Error"), {
            status: 500,
        });
    }
}
