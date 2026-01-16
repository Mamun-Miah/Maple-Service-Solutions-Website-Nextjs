import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mapleservice.com"),
  title: {
    default: "Maple Service Solution - AI-Powered Products & Premium Digital Experiences",
    template: "%s | Maple Service Solution"
  },
  description: "We build intelligent products that define markets. AI, platforms, design, engineering, and growth systems under one roof. Built in Bangladesh. Designed for the world.",
  keywords: [
    "Maple Service Solution",
    "AI products",
    "digital transformation",
    "product development",
    "UX/UI design",
    "engineering services",
    "Bangladesh tech company",
    "SaaS development",
    "enterprise solutions",
    "automation",
    "growth optimization"
  ],
  authors: [{ name: "Maple Service Solution Limited" }],
  creator: "Maple Service Solution",
  publisher: "Maple Service Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mapleservice.com",
    siteName: "Maple Service Solution",
    title: "Maple Service Solution - AI-Powered Products & Premium Digital Experiences",
    description: "We build intelligent products that define markets. AI, platforms, design, engineering, and growth systems under one roof.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maple Service Solution"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Service Solution - AI-Powered Products & Premium Digital Experiences",
    description: "We build intelligent products that define markets. AI, platforms, design, engineering, and growth systems under one roof.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
