import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { AccentProvider } from '@/context/AccentContext';
import { ColorCheckboxProvider } from '@/context/ColorCheckboxContext';
import { ThemeProvider } from '@/context/ThemeContext';

import Footer from '@/components/ui/Footer';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BlackSound1',
  description: "BlackSound1's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AccentProvider>
          <ColorCheckboxProvider>
            <ThemeProvider>
              <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
                <div className="header sticky top-0 z-10 flex items-center justify-between p-5 select-none ">
                  <div></div>
                  <nav className='font-mono'>
                    <a href="/research">Research</a>
                  </nav>
                </div>
                <main className="flex-1 px-0 py-8 md:px-5">
                  <div className="mx-auto max-w-6xl space-y-12 px-0 md:space-y-16 md:px-4 ">
                    <a href="/">
                      <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent">BlackSound1</h1>
                    </a>
                    {children}
                    <Footer />
                    <SpeedInsights />
                  </div>
                </main>
              </div>
            </ThemeProvider>
          </ColorCheckboxProvider>
        </AccentProvider>
      </body>
    </html>
  );
}
