
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

import ChatWindow from "./ChatWindow";
import { useChat } from "../hooks/useChat";

export default function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    isLoading,
    error,
    sendMessage,
    clearConversation,
  } = useChat();

  const openChat = useCallback(() => {
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    if (!isOpen || isClosing) return;
    setIsClosing(true);
  }, [isOpen, isClosing]);

  const finishClosing = useCallback(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, []);

  useEffect(() => {
    if (!isOpen || isClosing) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (
        target instanceof Node &&
        !containerRef.current?.contains(target)
      ) {
        closeChat();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeChat();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isClosing, closeChat]);

  return (
    <div ref={containerRef}>
      {isOpen && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          error={error}
          onSend={sendMessage}
          onClear={clearConversation}
          onClose={closeChat}
          isClosing={isClosing}
          onCloseComplete={finishClosing}
        />
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open AI assistant"
          aria-expanded={false}
          aria-controls="portfolio-chat-window"
          className="
            fixed bottom-5 right-5 z-[70]
            flex h-12 w-12 items-center justify-center
            rounded-full border border-white/20
            bg-gradient-to-r from-indigo-600 to-violet-600
            text-white shadow-lg
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-accent-primary/30
            sm:bottom-6 sm:right-6
          "
        >
          <MessageCircle size={24} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
