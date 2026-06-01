import Container from "./container";
import Socials from "./socials";

export default function Footer() {
  return (
    <Container>
      <footer
        className="
          flex flex-col items-center gap-4
          py-6
          text-center
          sm:flex-row sm:justify-between
          sm:text-left
        "
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          Copyright © {new Date().getFullYear()} Raj Shringi. All rights
          reserved.
        </p>

        <Socials />
      </footer>
    </Container>
  );
}
