"use client";

import React from "react";
import { ContentBox } from "../common/content-box";
import { HandleTask } from "@/components/features/tasks/handle-task";
import { useAuthStore } from "@/stores/auth-store";
import { Logout } from "@/components/features/auth/logout";
import { RegisterForm } from "@/components/features/auth/register-form";
import { LoginForm } from "@/components/features/auth/login-form";
import { Trash } from "@/components/features/tasks/trash";

export const Header = () => {
    const { user } = useAuthStore((state) => state);

    return (
        <ContentBox outerClassName="bg-light-gray-1 px-6 py-5">
            <header className="flex items-center gap-x-4">
                <h1 className="text-2xl font-bold text-center">Task Manager</h1>

                <HandleTask task={null} />
            </header>

            <nav className="flex items-center gap-x-4">
                {user ? (
                    <>
                        <span className="font-semibold">
                            Welcome, {user.name}!
                        </span>

                        <Trash />
                        <Logout />
                    </>
                ) : (
                    <>
                        <LoginForm />
                        <RegisterForm />
                    </>
                )}
            </nav>
        </ContentBox>
    );
};
