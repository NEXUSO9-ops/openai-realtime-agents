import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "./lib/envSetup";

export const metadata: Metadata = {
  title: "Realtime API Agents",
  description: "A demo app from OpenAI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
