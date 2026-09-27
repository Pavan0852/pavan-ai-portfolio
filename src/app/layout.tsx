import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pavan Kumar | AI Engineer",
  description: "Pavan Kumar is an AI Engineer building intelligent products with Generative AI, Agentic AI, LLMs, and modern cloud technologies.",
};

const themeScript = `
(function () {
  try {
    const storedTheme = localStorage.getItem("pavan-portfolio-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme || (systemPrefersDark ? "dark" : "light");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (error) {
    // Ignore storage or browser API errors.
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
