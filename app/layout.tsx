import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AccentProvider } from "@/context/AccentContext";
import { ColorCheckboxProvider } from "@/context/ColorCheckboxContext";
import { Tile } from "@/components/doras-ui/tile";
import StatusIndicator from "@/components/ui/status-indicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackSound1",
  description: "BlackSound1's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AccentProvider>
          <ColorCheckboxProvider>
            {children}
          </ColorCheckboxProvider>
        </AccentProvider>
        <div className="relative m-auto mx-5 mb-5">
          <footer className="bg-crust text-subtext0 border-surface0/20 flex h-auto flex-col items-center justify-center gap-y-3 rounded-lg border p-5 text-sm md:flex-row md:justify-between md:gap-y-0">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
                <span className="whitespace-nowrap">&copy;2026 BlackSound1</span>
                <span className="text-surface0 hidden md:inline">-</span>
                <div className="">
                  <StatusIndicator 
                    state="active"
                    label="All Systems Go!"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end">
              hey
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
