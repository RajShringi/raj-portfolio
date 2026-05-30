"use client";

import { motion } from "motion/react";

export default function Beam() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main Apple-style aurora */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="
          absolute
          -top-10
          -right-55
          h-155
          w-155
          rounded-full
          blur-3xl
          bg-linear-to-br
          from-cyan-200/12
          via-sky-300/6
          to-transparent
        "
      />

      {/* Soft violet atmospheric layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="
          absolute
          top-40
          -right-35
          h-105
          w-105
          rounded-full
          blur-3xl
          bg-linear-to-br
          from-violet-300/8
          via-fuchsia-200/4
          to-transparent
        "
      />

      {/* Thin Apple-like light streak */}
      <motion.div
        initial={{ opacity: 0, rotate: -14 }}
        animate={{ opacity: 1, rotate: -14 }}
        transition={{ duration: 2 }}
        className="
          absolute
          top-64
          -right-80
          h-35
          w-205
          rotate-[-14deg]
          rounded-full
          blur-3xl
          bg-linear-to-r
          from-transparent
          via-cyan-100/6
          to-transparent
        "
      />

      {/* Tiny light source */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="
          absolute
          top-36
          right-44
          h-22.5
          w-22.5
          rounded-full
          blur-2xl
          bg-cyan-100/10
        "
      />
    </div>
  );
}
