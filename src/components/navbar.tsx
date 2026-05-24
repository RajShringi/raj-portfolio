import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <Container>
      <nav
        className="flex items-center justify-between py-4 px-4 border border-background/50
    backdrop-blur-sm fixed top-0 left-1/2 -translate-x-1/2 max-w-2xl w-full z-50 rounded-b-lg"
      >
        <Link href="/" className="tracking-widest text-sm font-bold">
          RAJ
        </Link>
        <ul className="flex items-center gap-4 text-sm font-bold">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
