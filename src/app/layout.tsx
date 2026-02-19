import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ram Poptani | Software Developer",
  description:
    "Full Stack Java Developer with 2.5+ years of experience building scalable microservices and REST APIs using Java and Spring Boot.",
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Full Stack",
    "React",
    "Portfolio",
    "Ram Poptani",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
