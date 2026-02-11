import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woodland Dress Up - Digital Paper Dolls",
  description: "A charming digital dress-up game with woodland animal characters. Mix and match hats, tops, bottoms, and boots!",
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
