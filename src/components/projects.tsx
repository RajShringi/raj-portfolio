"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "Moneylog",
    description:
      "A dynamic full-stack application enabling users to manage boards and tasks with responsive design, form validations, theme toggling, drag-and-drop functionality, and persistent data storage.",
    image: "/projects/dashboard.png",
    color: "#22c55e",
    github: "https://github.com/yourusername/moneylog",
    live: "https://moneylog.vercel.app",
    stack: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    id: 2,
    name: "Kanban",
    description:
      "A dynamic full-stack application enabling users to manage boards and tasks with responsive design, form validations, theme toggling, drag-and-drop functionality, and persistent data storage.",
    image: "/projects/kanban.png",
    color: "#3b82f6",
    github: "https://github.com/RajShringi/kanban",
    live: "https://kanban-three-beta.vercel.app/",
    stack: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    id: 3,
    name: "Dictionary",
    description:
      "Created a project where users can search for words, view the Free Dictionary API's response, see form validation messages, play audio files, switch fonts and themes, view responsive layouts, and see hover and focus states for all interactive elements.",
    image: "/projects/dashboard.png",
    color: "#f97316",
    github: "https://github.com/RajShringi/Dictionary",
    live: "https://dictionary-nine-flax.vercel.app/",
    stack: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    id: 4,
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing projects, blogs, and experience.",
    image: "/projects/kanban.png",
    color: "#a855f7",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.vercel.app",
    stack: ["React", "Tailwind CSS", "Next.js"],
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col gap-4 px-4"
    >
      <h4 className="uppercase tracking-widest ">Projects</h4>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden rounded-lg flex-col gap-8
            transition-colors duration-300 ease-in-out hover:bg-neutral-50/10"
          >
            <div className="py-3 px-4 space-y-4">
              <div className="space-y-2">
                <h5 className="text-base font-bold">{project.name}</h5>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Link href="/">
                  <FaLink className="size-5 hover:text-muted-foreground" />
                </Link>
                <Link href="/">
                  <FaGithub className="size-5 hover:text-muted-foreground" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {project.stack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-center gap-2 text-xs py-1 px-2 border border-foreground rounded-lg"
                  >
                    <span className="font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
