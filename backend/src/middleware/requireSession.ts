

export type AuthContext = {
    authUserId: string;
    email?: string;
    name?: string;
    token: Record<string, unknown>
}

