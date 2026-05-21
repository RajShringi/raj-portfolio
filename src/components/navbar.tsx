import Link from "next/link";
import Container from "./container";

export default function Navbar() {
  return (
    <Container>
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="tracking-widest">
          RAJ
        </Link>
        <ul className="flex items-center gap-4">
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
