"use client";

import { motion } from "motion/react";
import Skills from "./skills";
import Socials from "./socials";
import DownloadResumeButton from "./download-resume-button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-wide">Raj Shringi</h1>
        <p className="text-secondary text-sm uppercase tracking-wide">
          Software Engineer
        </p>
      </div>
      <p className="text-pretty text-sm text-muted-foreground leading-7">
        I'm a software developer with experience building responsive web
        applications using <span className="font-bold">React</span>,{" "}
        <span className="font-bold">Next.js</span>,{" "}
        <span className="font-bold">Typescript</span>,{" "}
        <span className="font-bold">Node.js</span> and{" "}
        <span className="font-bold">MongoDB</span>. I enjoy turning ideas into
        products and solving real-world problems through clean, maintainable
        code. Currently, I'm expanding my backend skills while building personal
        projects and preparing for my next software engineering role.
      </p>
      <DownloadResumeButton />
      <Skills />
      <Socials />
    </motion.div>
  );
}
