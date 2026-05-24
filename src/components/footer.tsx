import Container from "./container";
import Socials from "./socials";

export default function footer() {
  return (
    <Container>
      <div className="flex items-center justify-between py-4 px-4">
        <div className="text-sm text-muted-foreground">
          copyright © {new Date().getFullYear()} Raj Shringi. All rights
          reserved.
        </div>
        <Socials />
      </div>
    </Container>
  );
}
