"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      id: 1,
      img: "/skills/html.svg",
      name: "HTML",
    },
    {
      id: 2,
      img: "/skills/css.svg",
      name: "CSS",
    },
    {
      id: 3,
      img: "/skills/tailwind-css.svg",
      name: "Tailwind",
    },
    {
      id: 4,
      img: "/skills/js.svg",
      name: "JavaScript",
    },
    {
      id: 5,
      img: "/skills/typescript.svg",
      name: "TypeScript",
    },
    {
      id: 6,
      img: "/skills/react.svg",
      name: "React",
    },
    {
      id: 7,
      img: "/skills/express-original.svg",
      name: "Express Js",
    },
    {
      id: 8,
      img: "/skills/node-js.svg",
      name: "Node",
    },
    {
      id: 9,
      img: "/skills/mongodb-original.svg",
      name: "Mongo DB",
    },
    {
      id: 10,
      img: "/skills/nextjs.svg",
      name: "Next JS",
    },
    {
      id: 11,
      img: "/skills/redux-original.svg",
      name: "Redux",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.25 }}
      className="flex flex-col gap-4 py-6"
    >
      <h4 className="uppercase tracking-widest ">Skills</h4>
      <div className="flex items-center gap-2 flex-wrap">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial="initial"
            whileHover="hover"
            className="relative flex items-center gap-2 text-xs bg-neutral-100 py-1 px-2 border border-secondary rounded-md hover:bg-neutral-50 overflow-hidden"
          >
            {/* <Image src={skill.img} alt={skill.name} width={15} height={15} /> */}
            <span className="font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
