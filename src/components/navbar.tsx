import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50">
      <header
        className="border border-background/5
    backdrop-blur-sm rounded-b-lg"
      >
        <Container>
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="tracking-widest text-sm font-bold">
              RAJ
            </Link>
            <ul className="flex items-center gap-4 text-sm font-bold">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  );
}
