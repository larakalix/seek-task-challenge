export type LoginUser = {
    email: string;
    password: string;
};

export type RegisterUser = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    token: string;
};
