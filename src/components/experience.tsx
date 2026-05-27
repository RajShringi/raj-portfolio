"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaBriefcase } from "react-icons/fa6";

export default function Experience() {
  const exprience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Freelance",
      duration: "Oct 2023 - Present",
      description:
        "Building web and mobile products for small businesses and product teams. End-to-end ownership from setup through deployment.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Splixcube",
      duration: "Apr 2023 - Sep 2023",
      description:
        "Building web and mobile products for small businesses and product teams. End-to-end ownership from setup through deployment.",
    },
    {
      id: 3,
      title: "Intern",
      company: "Altcampus",
      duration: "Jan 2022 - Mar 2023",
      description:
        "Building web and mobile products for small businesses and product teams. End-to-end ownership from setup through deployment.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
      className="flex flex-col gap-4 px-4"
    >
      <h4 className="uppercase tracking-widest">Experience</h4>

      <div className="flex flex-col gap-4">
        {exprience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              grid grid-cols-1 gap-4
              rounded-xl px-4 py-4
              transition-colors duration-300
              hover:bg-neutral-50/10
              sm:grid-cols-[auto_1fr]
              lg:grid-cols-[auto_1fr_auto]
            "
          >
            {/* icon */}
            <div className="pt-1">
              <FaBriefcase className="size-5 text-muted-foreground" />
            </div>

            {/* content */}
            <div className="space-y-2">
              <h5 className="flex flex-wrap items-center gap-1 font-semibold leading-snug">
                <span>{exp.title}</span>

                <span className="text-muted-foreground">·</span>

                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {exp.company}
                </Link>
              </h5>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              {/* mobile duration */}
              <p className="text-sm text-muted-foreground lg:hidden">
                {exp.duration}
              </p>
            </div>

            {/* desktop duration */}
            <div className="hidden lg:block">
              <p className="text-sm whitespace-nowrap text-muted-foreground">
                {exp.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
