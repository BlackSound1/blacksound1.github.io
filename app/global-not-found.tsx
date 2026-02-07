import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { AccentProvider } from '@/context/AccentContext';
import { ColorCheckboxProvider } from '@/context/ColorCheckboxContext';
import { ThemeProvider } from '@/context/ThemeContext';
import Footer from '@/components/ui/Footer';
import SocialLink from '@/components/ui/SocialLink';
import './globals.css';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metaData: Metadata = {
    title: "404",
    description: "Does not exist",
}

export default function GlobalNotFound() {
    return (
        <html>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
                <main className="flex-1 px-0 py-8 md:px-5">
                    <div className="mx-auto max-w-6xl space-y-12 px-0 py-8 md:space-y-16 md:px-4 md:py-12">
                    <AccentProvider>
                        <ColorCheckboxProvider>
                            <ThemeProvider>
                                <section id='global-404-section' className='space-y-5 px-4 md:px-0'>
                                    <a href="/">
                                        <h1 className="mb-5 text-3xl font-bold md:text-4xl font-mono hover:text-accent">BlackSound1</h1>
                                    </a>

                                    <p className='max-w-prose text-lg leading-relaxed'>
                                        This page does not exist! Click the title to go back.
                                    </p>

                                    <div className="flex justify-center">
                                        <h2 className="text-left gap-3 text-2xl font-semibold md:text-3xl font-mono hover:text-accent">~404~</h2>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-4 pt-2">
                                        <SocialLink name="GitHub" url="https://github.com/BlackSound1" />
                                        <SocialLink name="LinkedIn" url="https://www.linkedin.com/in/ordon/" />
                                    </div>
                                </section>
                                <Footer />
                                <SpeedInsights />
                            </ThemeProvider>
                        </ColorCheckboxProvider>
                    </AccentProvider>
                    </div>
                </main>
                </div>
            </body>
        </html>
    );
}
