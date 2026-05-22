"use client";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

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
      className="flex flex-col gap-4 py-6"
    >
      <h4 className="uppercase tracking-widest">Experience</h4>
      <div className="flex flex-col gap-6">
        {exprience.map((exp, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key={exp.id}
            className="grid grid-cols-[auto_1fr_150px] items-center gap-4 py-3 px-4 hover:bg-neutral-50/10 hover:transition-background duration-400 ease-in-out"
          >
            {/* left */}
            <div>
              <BriefcaseBusiness />
            </div>
            {/* middle */}
            <div>
              <div className="flex items-center gap-2">
                <h5 className="font-semibold leading-none flex items-center gap-1">
                  <span>{exp.title}</span>
                  <span className="text-muted-foreground"> · </span>
                  <Link href="/">
                    <span>{exp.company}</span>
                  </Link>
                </h5>
              </div>
              <p className="text-sm text-secondary">{exp.description}</p>
            </div>
            {/* right */}
            <div>
              <p className="text-sm ">{exp.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
