"use server";

import { GenericApiResponse } from "@/types/api";
import type { User, RegisterUser, LoginUser } from "@/types/user";
import { globalEnv } from "@/utils/env-config";

const URL = `${globalEnv.ApiUrl}auth`;

// POST /api/auth/register
export const registerUser = async (
    user: RegisterUser
): Promise<GenericApiResponse<User> | null> => {
    try {
        const response = await fetch(`${URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await response.json();

        if ("detail" in data) throw new Error(data.detail);

        return {
            data,
            statusCode: 200,
            message: "User registered successfully!",
        };
    } catch (error) {
        console.error("REGISTER_USER_ERROR", error);
        return {
            data: null,
            message:
                String(error) || "An error occurred while registering user.",
            statusCode: 500,
        };
    }
};

// POST /api/auth/login
export const loginUser = async (
    user: LoginUser
): Promise<GenericApiResponse<User> | null> => {
    try {
        const response = await fetch(`${URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await response.json();

        if ("detail" in data) throw new Error(data.detail);

        return {
            data,
            statusCode: 200,
            message: "Login successful!",
        };
    } catch (error) {
        console.error("LOGIN_USER_ERROR", error);
        return {
            data: null,
            message: String(error) || "An error occurred while logging in.",
            statusCode: 500,
        };
    }
};
