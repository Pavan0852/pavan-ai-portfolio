
"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";

import {
  Bot,
  ChevronRight,
  MessageCircle,
  Send,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";

import ChatMessage from "./ChatMessage";
import type { ChatMessage as ChatMessageType } from "../types/chat";

interface ChatWindowProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  error: string | null;
  onSend: (message: string) => void;
  onClear: () => void;
  onClose: () => void;
  isClosing: boolean;
  onCloseComplete: () => void;
}

const SUGGESTED_PROMPTS = [
  "Tell me about your AI projects",
  "What is your experience with Agentic AI?",
  "Explain your work at TCS",
  "What technologies do you work with?",
];

export default function ChatWindow({
  messages,
  isLoading,
  error,
  onSend,
  onClear,
  onClose,
  isClosing,
  onCloseComplete,
}: ChatWindowProps) {
  const [value, setValue] = useState("");

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Keep the latest conversation visible without scrolling the page.
  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, error]);

  // Focus the input when the chat window mounts.
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = value.trim();

    if (!message || isLoading || message.length > 2000) {
      return;
    }

    onSend(message);
    setValue("");
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  function handleSuggestedPrompt(prompt: string) {
    if (isLoading) return;

    onSend(prompt);
  }

  return (
    <section
      id="portfolio-chat-window"
      role="dialog"
      aria-modal="false"
      aria-labelledby="portfolio-chat-title"
      className={`
        fixed bottom-[4.75rem] right-3 z-[80]
        flex h-[min(540px,calc(100dvh-6rem))]
        w-[min(370px,calc(100vw-1.5rem))]
        flex-col overflow-hidden
        rounded-2xl border border-border
        bg-surface shadow-glass
        sm:bottom-20 sm:right-6
        ${isClosing ? "chat-window-exit" : "chat-window-enter"}
        `}
        onAnimationEnd={(event) => {
        if (
            isClosing &&
            event.currentTarget === event.target &&
            event.animationName === "chat-window-close"
        ) {
            onCloseComplete();
        }
        }}
    >
      {/* Assistant header */}
      <header
        className="
          flex h-[62px] shrink-0 items-center justify-between
          gap-3 border-b border-white/10
          bg-gradient-to-r from-indigo-600 to-violet-600
          px-3.5 text-white
        "
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-xl border border-white/20 bg-white/15
            "
          >
            <Bot size={19} />
          </div>

          <div className="min-w-0">
            <h2
              id="portfolio-chat-title"
              className="truncate text-[13px] font-semibold tracking-tight"
            >
              Pavan&apos;s AI Assistant
            </h2>

            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />

              <p className="text-[10px] text-white/75">
                AI-powered portfolio guide
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={onClear}
              disabled={isLoading}
              aria-label="Clear conversation"
              title="Clear conversation"
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg text-white/75
                transition hover:bg-white/15 hover:text-white
                disabled:cursor-not-allowed disabled:opacity-40
              "
            >
              <Trash2 size={15} />
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close assistant"
            className="
              flex h-8 w-8 items-center justify-center
              rounded-lg text-white/75
              transition hover:bg-white/15 hover:text-white
            "
          >
            <X size={17} />
          </button>
        </div>
      </header>

      {/* Scrollable conversation area */}
      <div
        ref={messagesContainerRef}
        className="
          min-h-0 flex-1 overflow-x-hidden overflow-y-auto
          overscroll-contain bg-background/80
          p-3
          [scrollbar-width:thin]
          [scrollbar-color:var(--muted-foreground)_transparent]
        "
        aria-live="polite"
        aria-relevant="additions text"
      >
        {messages.length === 0 ? (
          <div className="flex min-h-full flex-col justify-center gap-4 py-2">

            {/* Welcome section */}
            <div className="text-center">
              <div
                className="
                  mx-auto mb-3 flex h-12 w-12
                  items-center justify-center
                  rounded-2xl border border-border
                  bg-surface shadow-soft
                "
              >
                <Sparkles
                  size={22}
                  className="text-accent-primary"
                />
              </div>

              <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
                Hello! How can I help?
              </h3>

              <p
                className="
                  mx-auto mt-1.5 max-w-[250px]
                  text-[11px] leading-[1.5]
                  text-muted
                "
              >
                Explore Pavan&apos;s professional experience,
                AI projects, technical skills and career journey.
              </p>
            </div>

            {/* Suggested questions */}
            <div className="space-y-2">
              <p
                className="
                  flex items-center gap-1.5
                  text-[10px] font-semibold uppercase
                  tracking-[0.12em] text-muted
                "
              >
                <MessageCircle size={12} />
                Suggested questions
              </p>

              <div className="grid gap-1">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleSuggestedPrompt(prompt)}
                    className="
                    group flex min-h-9 items-center
                    justify-between gap-2
                    rounded-lg border border-border
                    bg-surface px-2.5 py-1.5
                    text-left text-[10.5px] font-medium
                    leading-[1.4] text-foreground
                    transition-colors duration-200
                    hover:border-accent-primary/40
                    hover:bg-surface-secondary
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    "
                  >
                    <span className="leading-5">
                      {prompt}
                    </span>

                    <ChevronRight
                      size={12}
                      className="
                        shrink-0 text-muted
                        transition-transform duration-200
                        group-hover:translate-x-0.5
                        group-hover:text-accent-primary
                      "
                    />
                  </button>
                ))}
              </div>
            </div>

            <p className="text-center text-[10px] text-muted">
              Powered by Agentic AI and RAG
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}
          </div>
        )}

        {/* Assistant typing indicator */}
        {isLoading && (
          <div
            className="mt-3 flex justify-start"
            role="status"
            aria-label="AI assistant is thinking"
          >
            <div
              className="
                flex items-center gap-1.5
                rounded-xl rounded-bl-sm
                border border-border bg-surface
                px-4 py-3 shadow-soft
              "
            >
              <span className="sr-only">
                Assistant is thinking
              </span>

              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-primary [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-primary [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-primary" />
            </div>
          </div>
        )}

        {/* API errors */}
        {error && (
          <div
            role="alert"
            className="
              mt-3 rounded-xl
              border border-red-300/40
              bg-red-500/10 px-3 py-2.5
              text-[11px] leading-5
              text-red-600 dark:text-red-300
            "
          >
            {error}
          </div>
        )}
      </div>

      {/* Fixed message composer */}
      <form
        onSubmit={handleSubmit}
        className="
          shrink-0 border-t border-border
          bg-surface px-3 py-2.5
        "
      >
        <label
          htmlFor="portfolio-chat-message"
          className="sr-only"
        >
          Ask a question about Pavan
        </label>

        <div
          className="
            flex items-end gap-2
            rounded-xl border border-border
            bg-background p-1.5
            transition
            focus-within:border-accent-primary/60
            focus-within:ring-2
            focus-within:ring-accent-primary/10
          "
        >
          <textarea
            ref={textareaRef}
            id="portfolio-chat-message"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            rows={1}
            maxLength={2000}
            disabled={isLoading}
            className="
              max-h-24 min-h-9 flex-1 resize-none
              bg-transparent px-2 py-2
              text-[12px] leading-5 text-foreground
              outline-none
              placeholder:text-muted
              disabled:opacity-50
            "
          />

          <button
            type="submit"
            disabled={!value.trim() || isLoading}
            aria-label="Send message"
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-lg bg-accent-primary
              text-white shadow-soft
              transition hover:bg-accent-secondary
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <Send size={15} />
          </button>
        </div>

        <p className="mt-1.5 text-center text-[9px] text-muted">
          AI-generated responses may be inaccurate.
        </p>
      </form>
    </section>
  );
}
