import { apiFetch } from "./api";


const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export type AgentStreamEvent = {
    type: "started" | "progress" | "token" | "completed" | "error";
    message?: string;
    token ?: string;
};

export type ThreadSummary = {
    id:string;
    title:string;
    updatedAt:string;
};

export const ThreadMessage = {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
}

export async function listThreads(token: string){
    return apiFetch<{ threads: ThreadSummary[] }>("/api/agent/threads")
}