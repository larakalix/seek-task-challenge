"use client";

import type { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryInstance } from "../utils/query-client";

type Props = PropsWithChildren;

export const QueryProvider = ({ children }: Props) => {
    const client = getQueryInstance();

    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};
