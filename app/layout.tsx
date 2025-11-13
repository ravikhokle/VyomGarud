import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VyomGarud | Next-Gen UAV Systems",
  description: "Precision Engineering. Advanced Autonomy. Military-Grade Reliability. Leading provider of military-grade UAV and drone systems with autonomous navigation and advanced surveillance capabilities.",
  keywords: ["UAV", "drone systems", "military drones", "autonomous navigation", "VyomGarud", "surveillance drones", "aerial systems"],
  authors: [{ name: "VyomGarud" }],
  openGraph: {
    title: "VyomGarud | Next-Gen UAV Systems",
    description: "Precision Engineering. Advanced Autonomy. Military-Grade Reliability.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
