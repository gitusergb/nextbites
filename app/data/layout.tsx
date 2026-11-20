
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites - Discover Delicious Recipes",
  description: "Discover and explore delicious recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
