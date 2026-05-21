import Container from "@/components/container";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <Container className="flex flex-col gap-6">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
    </Container>
  );
}
