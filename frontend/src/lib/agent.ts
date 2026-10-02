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

export type ThreadMessage = {
    id: string;
    role: "user" | "assistant" | "system";
    content: string;
};

export async function listThreads(token: string){
    return apiFetch<{ threads: ThreadSummary[] }>("/api/agent/threads",{
        token,
    })
}

export async function loadThreads(token: string, threadId:string){
    return apiFetch<{ threadId: string; messages: ThreadMessage[] }>(
        `/api/agent/threads/${threadId}`,
        { token },
    );
}

export async function streamAgentChat (
    token: string,
    input: {message: string; threadId: string},
    onEvent: (event: AgentStreamEvent)=>void
) {
    const res = await fetch(`${API_URL}/api/agent/chat`,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            "Cpntent-Type" : "application/json",
            Accept: "text/event-stream"
        }
    })

    if(!res.ok || !res.body){
        throw new Error("Agent request failed")
    }

    const reader = res.body.getReader();

    const decoder = new TextDecoder();

    let buffer = ""

    while(true){
        const {value, done} = await reader.read();

        buffer += decoder.decode(value, {stream: !done})
    }

}

