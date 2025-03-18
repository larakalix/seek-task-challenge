"use server";

import type { Task } from "@/types/task";
import { globalEnv } from "@/utils/env-config";

const URL = `${globalEnv.ApiUrl}tasks`;

const getHeaders = (token: string) => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
});

// GET /api/tasks
export const getTasks = async (): Promise<Task[]> => {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("GET_TASKS_ERROR", error);
        return [];
    }
};

// POST /api/tasks
export const addTask = async (
    task: {
        title: Task["title"];
        description: Task["description"];
    },
    token: string
): Promise<Task | null> => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: getHeaders(token),
            body: JSON.stringify(task),
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("ADD_TASK_ERROR", error);
        return null;
    }
};

// PUT /api/tasks/:id
export const updateTask = async (
    task: {
        id: Task["id"];
        title: Task["title"];
        description: Task["description"];
        status: Task["status"];
    },
    token: string
): Promise<Task | null> => {
    try {
        const response = await fetch(`${URL}/${task.id}`, {
            method: "PUT",
            headers: getHeaders(token),
            body: JSON.stringify(task),
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("UPDATE_TASK_ERROR", error);
        return null;
    }
};

// DELETE /api/tasks/:id
export const deleteTask = async (
    id: Task["id"],
    token: string
): Promise<Task | null> => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: getHeaders(token),
        });
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("DELETE_TASK_ERROR", error);
        return null;
    }
};
