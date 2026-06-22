"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "Moneylog",
    description:
      "Personal finance application that helps users track income and expenses, categorize transactions, and analyze spending patterns.",
    image: "/projects/dashboard.png",
    color: "#22c55e",
    github: "https://github.com/RajShringi/moneylog",
    live: "https://moneylog-liard.vercel.app/",
    stack: ["Next.js", "Typescript", "MongoDB", "NextAuth"],
  },
  {
    id: 2,
    name: "Kanban",
    description:
      "Project management application that enables users to organize tasks across boards and columns, manage workflows with drag-and-drop interactions, and track progress.",
    image: "/projects/kanban.png",
    color: "#3b82f6",
    github: "https://github.com/RajShringi/kanban",
    live: "https://kanban-three-beta.vercel.app/",
    stack: ["React", "Redux Toolkit", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "Personal website that showcases projects, technical articles, and professional experience while providing a central place to learn more about my work and skills.",
    image: "/projects/portfolio.png",
    color: "#a855f7",
    github: "https://github.com/RajShringi/raj-portfolio",
    live: "https://raj-shringi.vercel.app/",
    stack: ["Next.js", "Typescript", "Tailwind CSS"],
  },
];
export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <motion.h4
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ amount: 0.4 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="uppercase tracking-widest"
      >
        Projects
      </motion.h4>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ amount: 0.4 }}
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

                <p className="text-sm text-muted-foreground leading-7 text-pretty">
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
    </div>
  );
}
