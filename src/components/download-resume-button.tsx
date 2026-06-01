import { FaDownload } from "react-icons/fa6";

export default function DownloadResumeButton() {
  return (
    <a
      href="/resume/Raj_Shringi_Res.pdf"
      download="Raj-Shringi-Resume.pdf"
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm transition-colors hover:bg-white/10"
    >
      Resume / CV <FaDownload />
    </a>
  );
}
