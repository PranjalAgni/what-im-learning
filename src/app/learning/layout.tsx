import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick",
  display: "swap",
});

export const metadata: Metadata = {
  title: "what im learning | learning list",
  description: "pranjal's learning list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={patrickHand.className}>
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className={cn("min-h-screen  antialiased", patrickHand.variable)}>
        {children}
      </body>
    </html>
  );
}
