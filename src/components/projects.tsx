"use client";
import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Moneylog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/projects/dashboard.png",
    link: "#",
  },
  {
    id: 2,
    name: "Kanban",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/projects/kanban.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col gap-4 py-6"
    >
      <h4 className="uppercase tracking-widest ">Projects</h4>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-md flex flex-col gap-4"
          >
            <Image
              src={project.img}
              alt={project.name}
              width={400}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <div>
              <h5 className="text-base font-bold">{project.name}</h5>
              <p className="text-muted-foreground text-secondary text-sm">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
