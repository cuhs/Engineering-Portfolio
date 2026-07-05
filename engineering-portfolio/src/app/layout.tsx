import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Alexander Hu — Software Engineer",
  description:
    "UCLA Computer Science student and software engineer. Incoming Scale AI intern with experience at STR and Airacer. Distributed systems, AI/LLM backends, and full-stack development.",
  openGraph: {
    title: "Alexander Hu — Software Engineer",
    description:
      "Full-stack engineer building AI systems, mobile apps, and production backends. UCLA CS. Palantir Hacks winner.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {/* Noise overlay for film grain texture */}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
