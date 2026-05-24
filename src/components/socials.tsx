import {
  FaGithub,
  FaHashnode,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">
        <FaGithub className="size-5 hover:text-muted-foreground" />
      </Link>

      <Link href="/">
        <FaSquareXTwitter className="size-5 hover:text-muted-foreground" />
      </Link>

      <Link href="/">
        <FaLinkedin className="size-5 hover:text-muted-foreground" />
      </Link>

      <Link href="/">
        <FaHashnode className="size-5 hover:text-muted-foreground" />
      </Link>
    </div>
  );
}
