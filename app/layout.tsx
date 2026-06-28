import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "TheBullsAICompany — Enterprise AI for the Future",
    template: "%s | TheBullsAICompany",
  },
  description:
    "Enterprise-grade AI solutions built on Microsoft Azure. Data Fabric, Security Intelligence, Advanced Analytics, and more — for the world's leading companies.",
  keywords: ["AI", "enterprise AI", "Microsoft Fabric", "data engineering", "Azure AI", "machine learning"],
  authors: [{ name: "TheBullsAICompany" }],
  openGraph: {
    type: "website",
    siteName: "TheBullsAICompany",
    title: "TheBullsAICompany — Enterprise AI for the Future",
    description: "Enterprise-grade AI solutions built on Microsoft Azure.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheBullsAICompany",
    description: "Enterprise-grade AI solutions built on Microsoft Azure.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
