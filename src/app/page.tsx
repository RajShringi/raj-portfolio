import type { Metadata } from "next";
import Container from "@/components/container";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export const metadata: Metadata = {
  title: "Raj Shringi | Software Developer",
  description:
    "Software Developer focused on building modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Raj Shringi | Software Developer",
    description:
      "Software Developer focused on building modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.",
    url: "/",
    siteName: "Raj Shringi Portfolio",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Raj Shringi | Software Developer",
    description:
      "Software Developer focused on building modern web applications with React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <Container className="flex flex-col gap-8">
      <Hero />
      <Projects />
      <Experience />
    </Container>
  );
}
