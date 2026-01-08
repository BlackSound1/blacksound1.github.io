import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AccentProvider } from "@/context/AccentContext";
import { ColorCheckboxProvider } from "@/context/ColorCheckboxContext";
import Footer from "@/components/ui/Footer";

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
        <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
          <main className="flex-1 px-0 py-8 md:px-5">
            <div className="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
              <AccentProvider>
                <ColorCheckboxProvider>
                  {children}
                  <Footer />
                </ColorCheckboxProvider>
              </AccentProvider>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
