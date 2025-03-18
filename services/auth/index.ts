"use server";

import type { User, RegisterUser, LoginUser } from "@/types/user";
import { globalEnv } from "@/utils/env-config";

const URL = `${globalEnv.ApiUrl}auth`;

// POST /api/auth/register
export const registerUser = async (
    user: RegisterUser
): Promise<User | null> => {
    try {
        const response = await fetch(`${URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("REGISTER_USER_ERROR", error);
        return null;
    }
};

// POST /api/auth/login
export const loginUser = async (user: LoginUser): Promise<User | null> => {
    try {
        const response = await fetch(`${URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("LOGIN_USER_ERROR", error);
        return null;
    }
};
