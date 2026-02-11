import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Sofia Ossman",
    default: "Sofia Ossman - Illustrator",
  },
  description:
    "Award-winning illustrator based in San Francisco, creating vibrant illustrations for young children.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
