
"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BookOpen,
  ExternalLink,
  Check,
  Copy,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { ChatMessage as ChatMessageType } from "../types/chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

function CodeBlock({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const normalizedLanguage = language.toLowerCase() || "text";

  return (
    <div className="my-3 min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#282c34] shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#21252b] px-3 py-2">
        <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
          {normalizedLanguage}
        </span>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label={copied ? "Code copied" : "Copy code"}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div className="max-w-full overflow-x-auto text-xs leading-5">
        <SyntaxHighlighter
          language={normalizedLanguage}
          style={oneDark}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: "14px",
            background: "transparent",
            fontSize: "12px",
            lineHeight: "1.6",
            minWidth: "100%",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-geist-mono), monospace",
            },
          }}
          wrapLongLines={false}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <article
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
      aria-label={isUser ? "Your message" : "AI assistant response"}
    >
      <div
        className={`min-w-0 max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? "rounded-br-md bg-accent-primary text-white shadow-soft"
            : "rounded-bl-md border border-border bg-surface text-foreground shadow-soft"
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">
            {message.content}
          </p>
        ) : (
          <>
            <div className="min-w-0 break-words">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="mb-3 mt-5 text-xl font-bold leading-tight first:mt-0">
                      {children}
                    </h1>
                  ),

                  h2: ({ children }) => (
                    <h2 className="mb-2 mt-5 text-lg font-semibold leading-snug first:mt-0">
                      {children}
                    </h2>
                  ),

                  h3: ({ children }) => (
                    <h3 className="mb-2 mt-4 text-base font-semibold leading-snug first:mt-0">
                      {children}
                    </h3>
                  ),

                  p: ({ children }) => (
                    <p className="mb-3 leading-6 last:mb-0">
                      {children}
                    </p>
                  ),

                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">
                      {children}
                    </strong>
                  ),

                  em: ({ children }) => (
                    <em className="italic text-foreground">
                      {children}
                    </em>
                  ),

                  ul: ({ children }) => (
                    <ul className="mb-3 ml-5 list-disc space-y-1.5 last:mb-0">
                      {children}
                    </ul>
                  ),

                  ol: ({ children }) => (
                    <ol className="mb-3 ml-5 list-decimal space-y-1.5 last:mb-0">
                      {children}
                    </ol>
                  ),

                  li: ({ children }) => (
                    <li className="py-0.5 pl-1 leading-6 marker:text-accent-primary">
                      {children}
                    </li>
                  ),

                  blockquote: ({ children }) => (
                    <blockquote className="my-3 rounded-r-lg border-l-[3px] border-accent-primary bg-surface-secondary px-3 py-2 text-muted">
                      {children}
                    </blockquote>
                  ),

                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-accent-primary underline decoration-accent-primary/40 underline-offset-4 transition-colors hover:decoration-accent-primary"
                    >
                      {children}
                    </a>
                  ),

                  code: ({ className, children }) => {
                    const match = /language-([\w-]+)/.exec(
                      className || ""
                    );

                    const code = String(children).replace(/\n$/, "");

                    if (match) {
                      return (
                        <CodeBlock
                          language={match[1]}
                          code={code}
                        />
                      );
                    }

                    return (
                      <code className="rounded-md border border-border bg-surface-secondary px-1.5 py-0.5 font-mono text-[0.8em]">
                        {children}
                      </code>
                    );
                  },

                  pre: ({ children }) => (
                    <>{children}</>
                  ),

                  table: ({ children }) => (
                    <div className="my-3 max-w-full overflow-x-auto rounded-lg border border-border">
                      <table className="w-full border-collapse text-left text-xs">
                        {children}
                      </table>
                    </div>
                  ),

                  thead: ({ children }) => (
                    <thead className="bg-surface-secondary">
                      {children}
                    </thead>
                  ),

                  th: ({ children }) => (
                    <th className="border-b border-border px-3 py-2.5 font-semibold">
                      {children}
                    </th>
                  ),

                  td: ({ children }) => (
                    <td className="border-b border-border px-3 py-2.5 last:border-b-0">
                      {children}
                    </td>
                  ),

                  hr: () => (
                    <hr className="my-4 border-border" />
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>

            {message.sources && message.sources.length > 0 && (
              <div className="mt-4 border-t border-border pt-3">
                <div className="mb-2.5 flex items-center gap-2 text-xs font-semibold text-muted">
                  <BookOpen
                    size={14}
                    className="shrink-0 text-accent-primary"
                  />
                  Knowledge sources
                  <span className="rounded-full bg-surface-secondary px-2 py-0.5 text-[10px] font-medium">
                    {message.sources.length}
                  </span>
                </div>

                <ul className="space-y-2">
                  {message.sources.map((source, index) => (
                    <li
                      key={`${source.source}-${index}`}
                      className="flex min-w-0 items-start gap-2.5 rounded-lg border border-border bg-surface-secondary/50 p-2.5"
                    >
                      <ExternalLink
                        size={13}
                        className="mt-0.5 shrink-0 text-accent-primary"
                      />

                      <div className="min-w-0">
                        <p className="break-words text-xs font-medium leading-5 text-foreground">
                          {source.title}
                        </p>

                        <p className="mt-0.5 break-all text-[10px] leading-4 text-muted">
                          {source.source}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}
