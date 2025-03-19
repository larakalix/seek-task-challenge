export type GenericApiResponse<T> = {
    data: T | null;
    message: string;
    statusCode: number;
};

export type ApiActionResult = Record<number, VoidFunction>;