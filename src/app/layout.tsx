import type { Metadata } from "next";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Beam from "@/components/beam";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raj-shringi.vercel.app"),

  title: {
    default: "Raj Shringi | Software Developer",
    template: "%s | Raj Shringi",
  },

  description:
    "Software Developer focused on building modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. Explore my projects, experience, and technical articles.",

  keywords: [
    "Raj Shringi",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Developer Portfolio",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Raj Shringi",
    },
  ],

  creator: "Raj Shringi",

  alternates: {
    canonical: "https://raj-shringi.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Raj Shringi | Software Developer",
    description:
      "Software Developer focused on building modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.",
    url: "https://raj-shringi.vercel.app",
    siteName: "Raj Shringi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raj Shringi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Shringi | Software Developer",
    description:
      "Software Developer focused on building modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.className} ${geistMono.variable} h-full antialiased dark`}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground
      "
      >
        <div className="bg-[url('/patterns/dots.png')] opacity-2 fixed overflow-auto inset-0 pointer-events-none z-1000"></div>
        <Beam />
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="pt-18 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
