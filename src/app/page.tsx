import Container from "@/components/container";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <Container className="flex flex-col gap-8">
      <Hero />
      <Projects />
      <Experience />
    </Container>
  );
}
