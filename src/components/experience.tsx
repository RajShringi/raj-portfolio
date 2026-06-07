"use client";

import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa6";

export default function Experience() {
  const experience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Independent Projects",
      duration: "Oct 2023 - Present",
      achievements: [
        "Built web applications with Next.js, React, TypeScript, and Tailwind CSS.",
        "Implemented authentication flows using NextAuth and JWT-based sessions.",
        "Developed backend functionality including REST APIs, Server Actions, and MongoDB integration.",
        "Created interactive user experiences with data visualizations, advanced tables, and drag-and-drop interfaces.",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Splixcube",
      duration: "Apr 2023 - Sep 2023",
      achievements: [
        "Engineered a drag-and-drop dashboard across three configurable panels using React DnD for a production product used by 285+ customers.",
        "Built reusable table and chart components with TanStack Table and Chart.js, enabling smooth interaction with large datasets.",
        "Implemented client-side pagination and data visualization features to improve usability when working with large datasets.",
      ],
    },
    {
      id: 3,
      title: "Software Developer Trainee",
      company: "AltCampus",
      duration: "Jan 2022 - Mar 2023",
      achievements: [
        "Shipped 40+ frontend and full-stack projects using React, Node.js, Express, and MongoDB.",
        "Designed and integrated REST APIs, handling authentication, data modelling, and client-server communication.",
        "Built strong version control practices through consistent use of Git and GitHub across all projects.",
        "Strengthened problem-solving and debugging skills through project-based learning.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h4 className="uppercase tracking-widest">Experience</h4>

      <div className="flex flex-col gap-4 sm:gap-5">
        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              rounded-xl
              p-4 sm:p-5
              
              flex flex-col gap-4
            "
          >
            {/* Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3 min-w-0">
                <div className="shrink-0">
                  <FaBriefcase className="size-5 text-muted-foreground" />
                </div>

                <div className="min-w-0">
                  <h5 className="flex flex-wrap items-center gap-1 font-semibold leading-snug">
                    <span>{exp.title}</span>

                    <span className="text-muted-foreground">·</span>

                    <span className="text-muted-foreground transition-colors">
                      {exp.company}
                    </span>
                  </h5>

                  {/* Mobile duration */}
                  <p className="mt-1 text-sm text-muted-foreground lg:hidden">
                    {exp.duration}
                  </p>
                </div>
              </div>

              {/* Desktop duration */}
              <p className="hidden lg:block text-sm whitespace-nowrap text-muted-foreground">
                {exp.duration}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h6 className="text-sm font-medium">What I've done</h6>

              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-7 text-pretty">
                {exp.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
