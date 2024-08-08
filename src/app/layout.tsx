import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "what im learning",
  description: "a reading/learning list for me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen dark font-patrick antialiased">
        {children}
      </body>
    </html>
  );
}
