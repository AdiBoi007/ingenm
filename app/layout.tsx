import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iNGEN — Research-Grade AI Hiring",
  description: "Research-grade intelligence backed by real researchers at the University of Sydney. Know who's real before you waste a single call.",
  openGraph: {
    title: "iNGEN — Research-Grade AI Hiring",
    description: "Know who's real before you waste a single call.",
    siteName: "iNGEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
