import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HTTP Status Codes",
  description:
    "Explore a complete list of HTTP status codes with detailed explanations. Understand server responses like 200 OK, 404 Not Found, and 500 Internal Server Error with clear descriptions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <main className="min-h-screen">
          <div className="max-w-xl px-5 mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
