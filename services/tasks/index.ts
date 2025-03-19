"use server";

import { GenericApiResponse } from "@/types/api";
import type { Task } from "@/types/task";
import { globalEnv } from "@/utils/env-config";

const URL = `${globalEnv.ApiUrl}tasks`;

const getHeaders = (token: string) => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
});

// GET /api/tasks
export const getTasks = async (): Promise<GenericApiResponse<
    Task[]
> | null> => {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        return {
            data,
            statusCode: 200,
            message: "Tasks fetched successfully!",
        };
    } catch (error) {
        console.error("GET_TASKS_ERROR", error);
        return {
            data: null,
            message: String(error) || "An error occurred while fetching tasks.",
            statusCode: 500,
        };
    }
};

// POST /api/tasks
export const addTask = async (
    task: {
        title: Task["title"];
        description: Task["description"];
    },
    token: string
): Promise<GenericApiResponse<Task> | null> => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: getHeaders(token),
            body: JSON.stringify(task),
        });
        const data = await response.json();

        return {
            data,
            statusCode: 200,
            message: "Task added successfully!",
        };
    } catch (error) {
        console.error("ADD_TASK_ERROR", error);
        return {
            data: null,
            message: String(error) || "An error occurred while adding task.",
            statusCode: 500,
        };
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
): Promise<GenericApiResponse<Task> | null> => {
    try {
        const response = await fetch(`${URL}/${task.id}`, {
            method: "PUT",
            headers: getHeaders(token),
            body: JSON.stringify(task),
        });
        const data = await response.json();

        return {
            data,
            statusCode: 200,
            message: "Task updated successfully!",
        };
    } catch (error) {
        console.error("UPDATE_TASK_ERROR", error);
        return {
            data: null,
            message: String(error) || "An error occurred while updating task.",
            statusCode: 500,
        };
    }
};

// DELETE /api/tasks/:id
export const deleteTask = async (
    id: Task["id"],
    token: string
): Promise<GenericApiResponse<Task> | null> => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: getHeaders(token),
        });
        const data = await response.json();

        return {
            data,
            statusCode: 200,
            message: "Task deleted successfully",
        };
    } catch (error) {
        console.error("DELETE_TASK_ERROR", error);
        return {
            data: null,
            message: String(error) || "An error occurred while deleting task.",
            statusCode: 500,
        };
    }
};

export const getDeletedTasks = async (
    token: string
): Promise<GenericApiResponse<Task[]> | null> => {
    try {
        const response = await fetch(`${URL}/deleted`, {
            method: "GET",
            headers: getHeaders(token),
        });
        const data = await response.json();

        return {
            data,
            statusCode: 200,
            message: "Deleted tasks fetched successfully!",
        };
    } catch (error) {
        console.error("GET_DELETED_TASKS_ERROR", error);
        return {
            data: null,
            message:
                String(error) ||
                "An error occurred while fetching deleted tasks.",
            statusCode: 500,
        };
    }
};
