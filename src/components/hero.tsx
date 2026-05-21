"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="py-6 flex flex-col gap-4"
    >
      <div>
        <h1 className="text-4xl font-bold tracking-wide">Raj Shringi</h1>
        <p className="text-secondary text-sm uppercase tracking-wide">
          Software Engineer
        </p>
      </div>
      <p className="text-pretty text-sm">
        Hey, I am Raj. I design and build web applications from frontend to
        backend, with a strong focus on usability, performance, and developer
        experience. I enjoy creating products that feel simple, smooth, and
        reliable.
      </p>
    </motion.div>
  );
}
