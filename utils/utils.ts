import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

export function wait(time: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, time));
}
