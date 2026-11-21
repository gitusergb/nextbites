import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBites | Discover Delicious Recipes",
  description:
    "Explore delicious recipes from around the world. Discover ingredients, cooking times, and step-by-step instructions with NextBites.",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <nav className="navbar">
          <div className="nav-container">
            <h1>🍽️ NextBites</h1>
            <span>Discover. Cook. Enjoy.</span>
          </div>
        </nav>

        
        {children}
        
        </body>
    </html>
  );
}
