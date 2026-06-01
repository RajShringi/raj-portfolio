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
      className="flex flex-col gap-4"
    >
      <h4 className="uppercase tracking-widest">Projects</h4>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              group flex h-full flex-col
              overflow-hidden rounded-xl px-4
              transition-all duration-300
              border border-white/5
              hover:bg-neutral-50/10
            "
          >
            <div className="flex h-full flex-col gap-5 py-4 sm:py-5">
              {/* content */}
              <div className="space-y-3">
                <h5 className="text-base font-semibold leading-snug sm:text-lg">
                  {project.name}
                </h5>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* links */}
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  className="transition-colors hover:text-muted-foreground"
                >
                  <FaLink className="size-5" />
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  className="transition-colors hover:text-muted-foreground"
                >
                  <FaGithub className="size-5" />
                </Link>
              </div>

              {/* stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <div
                    key={tech}
                    className="
                      rounded-md border border-white/10
                      px-2.5 py-1 text-xs font-medium
                      text-muted-foreground
                    "
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
