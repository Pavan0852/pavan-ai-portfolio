
import type { ChatRequest, ChatResponse } from "../types/chat";

const API_BASE_URL = process.env.NEXT_PUBLIC_CHAT_API_URL;

export async function sendChatMessage(
  message: string,
  signal?: AbortSignal,
): Promise<ChatResponse> {
  if (!API_BASE_URL) {
    throw new Error("Chatbot API URL is not configured.");
  }

  let response: Response;

  try {
    const payload: ChatRequest = { message };

    response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw error;
    }

    throw new Error(
      "Unable to connect to the AI assistant. Please try again.",
    );
  }

  if (!response.ok) {
    if (response.status === 422) {
      throw new Error("Please enter a valid message.");
    }

    if (response.status === 429) {
      throw new Error("Too many requests. Please wait and try again.");
    }

    if (response.status >= 500) {
      throw new Error("The AI assistant is temporarily unavailable.");
    }

    throw new Error(`Chat request failed (${response.status}).`);
  }

  let data: ChatResponse;

  try {
    data = (await response.json()) as ChatResponse;
  } catch {
    throw new Error("The AI assistant returned an invalid response.");
  }

  if (
    typeof data.answer !== "string" ||
    !Array.isArray(data.sources) ||
    !data.sources.every(
      (source) =>
        typeof source.title === "string" &&
        typeof source.source === "string",
    )
  ) {
    throw new Error("Unexpected response format from the AI assistant.");
  }

  return data;
}
