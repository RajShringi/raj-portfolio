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
      <Link
        href="https://github.com/RajShringi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="size-5 hover:text-muted-foreground" />
      </Link>

      <Link
        href="https://x.com/RajShringi1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareXTwitter className="size-5 hover:text-muted-foreground" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/raj-shringi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="size-5 hover:text-muted-foreground" />
      </Link>

      <Link
        href="https://rajshringi.hashnode.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaHashnode className="size-5 hover:text-muted-foreground" />
      </Link>
    </div>
  );
}
