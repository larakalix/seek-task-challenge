import type { Metadata } from "next";
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
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
