
"use client";

import { useCallback, useState } from "react";
import { sendChatMessage } from "../lib/chat-api";
import type { ChatMessage } from "../types/chat";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (rawMessage: string) => {
      const message = rawMessage.trim();

      if (!message || message.length > 2000 || isLoading) {
        return;
      }

      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "user",
        content: message,
      };

      setMessages((current) => [...current, userMessage]);
      setIsLoading(true);
      setError(null);

      try {
        const response = await sendChatMessage(message);

        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: response.answer,
          sources: response.sources,
        };

        setMessages((current) => [...current, assistantMessage]);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading],
  );

  const clearConversation = useCallback(() => {
    if (isLoading) return;

    setMessages([]);
    setError(null);
  }, [isLoading]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearConversation,
  };
}
