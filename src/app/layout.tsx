import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linear | Your favorite issue tracker",
  description:
    "Linear is a state-of-the-art issue tracker app designed for efficient project management and seamless team collaboration. It streamlines workflows by offering robust features such as real-time updates, intuitive task boards, and customizable notifications. Ideal for agile teams, Linear ensures that every issue is tracked, prioritized, and resolved swiftly, enhancing productivity and maintaining project momentum. Its user-friendly interface and powerful integrations make it an essential tool for modern development teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
