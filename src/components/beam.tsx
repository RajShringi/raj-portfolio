"use client";

import { motion } from "motion/react";

export default function Beam() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main Aurora */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="
          absolute
          -top-10
          -right-24
          h-72
          w-72
          sm:-right-32
          sm:h-96
          sm:w-96
          lg:-right-55
          lg:h-152
          lg:w-152
          rounded-full
          blur-3xl
          bg-linear-to-br
        from-blue-300/12
        via-indigo-300/6
          to-transparent
        "
      />

      {/* Violet Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8 }}
        className="
          absolute
          top-28
          -right-16
          h-56
          w-56
          sm:top-32
          sm:-right-24
          sm:h-72
          sm:w-72
          lg:top-40
          lg:-right-35
          lg:h-104
          lg:w-104
          rounded-full
          blur-3xl
          bg-linear-to-br
          from-violet-300/8
          via-indigo-200/4
          to-transparent

        "
      />

      {/* Light Streak */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
          absolute
          top-48
          -right-40
          h-20
          w-md
          sm:w-xl
          lg:top-64
          lg:-right-80
          lg:h-34
          lg:w-208
          rotate-[-14deg]
          rounded-full
          blur-3xl
          bg-linear-to-r
          from-transparent
          via-blue-100/6
          to-transparent
        "
      />

      {/* Light Source */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="
          absolute
          top-24
          right-10
          h-12
          w-12
          sm:right-20
          sm:h-16
          sm:w-16
          lg:top-36
          lg:right-44
          lg:h-24
          lg:w-24
          rounded-full
          blur-2xl
          bg-blue-100/10
        "
      />
    </div>
  );
}
