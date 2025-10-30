import "./globals.css";
import type { Metadata } from "next";
import AmplifyProvider from "./AmplifyProvider";

export const metadata: Metadata = {
  title: "Personal Project",
  description: "Next.js + Amplify",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
