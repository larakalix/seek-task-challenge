import React from "react";
import { ContentBox } from "../common/content-box";
import { HandleTask } from "@/components/features/tasks/handle-task";

export const Header = () => {
    return (
        <ContentBox outerClassName="bg-light-gray-1 px-6 py-5">
            <h1 className="text-2xl font-bold text-center">Task Manager</h1>

            <nav>
                <HandleTask task={null} />
            </nav>
        </ContentBox>
    );
};
