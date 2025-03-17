import { QueryClient, isServer } from "@tanstack/react-query";

type Options = {
    staleTimeMinutes: number;
};

let browserQueryClient: QueryClient | undefined = undefined;

const getInstance = (opts: Options) => {
    return new QueryClient({
        defaultOptions: {
            ...opts,
            queries: {
                staleTime: 1000 * 60 * opts.staleTimeMinutes,
            },
        },
    });
};

export const getQueryInstance = (
    opts: Options = {
        staleTimeMinutes: 5,
    }
) => {
    if (isServer) return getInstance(opts);

    if (!browserQueryClient) browserQueryClient = getInstance(opts);

    return browserQueryClient;
};
