import type { Metadata } from "next";
import { Toaster } from "sonner";
import { QueryProvider } from "@/providers/query-provider";
import { Header } from "@/components/layout/header";
import { ContentBox } from "@/components/layout/common/content-box";
import { Footer } from "@/components/layout/footer";

import "@fontsource-variable/roboto";
import "./globals.css";

export const metadata: Metadata = {
    title: "Task Manager",
    description: "A simple task manager application for Seek coding challenge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <QueryProvider>
            <html lang="en">
                <body className="antialiased">
                    <Toaster richColors />

                    <Header />

                    <ContentBox
                        outerClassName="px-6 py-12 flex-1 m-auto w-full"
                        innerClassName="flex-col"
                    >
                        {children}
                    </ContentBox>

                    <Footer />
                </body>
            </html>
        </QueryProvider>
    );
}
