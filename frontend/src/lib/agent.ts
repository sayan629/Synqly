

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