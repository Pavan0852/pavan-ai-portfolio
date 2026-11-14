
export type ChatRole = "user" | "assistant";

export interface ChatSource {
  title: string;
  source: string;
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  sources?: ChatSource[];
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  answer: string;
  sources: ChatSource[];
}
