import { AuthenticatedExtra, defineTool } from "@descope/mcp-express";
import { z } from "zod";
import { listUpcomingMeetings } from "../services/calendar.service.js";

function textResult(data: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
  };
}

function authUserIdFromToken(token: string): string {
  const payload = JSON.parse(
    Buffer.from(token.split(".")[1] ?? "", "base64").toString("utf8"),
  ) as { sub?: string };

  if (!payload.sub) {
    throw new Error("MCP token has no user id");
  }

  return String(payload.sub);
}