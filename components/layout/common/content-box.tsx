import type { PropsWithChildren } from "react";
import { cn } from "@/utils/utils";

type Props = PropsWithChildren<{
    outerClassName?: string;
    innerClassName?: string;
}>;

export const ContentBox = ({
    innerClassName = "",
    outerClassName = "",
    children,
}: Props) => {
    return (
        <div className={cn(outerClassName)}>
            <div
                className={cn(
                    "flex justify-between items-center w-full max-w-full lg:max-w-7xl m-auto",
                    innerClassName
                )}
            >
                {children}
            </div>
        </div>
    );
};
