"use client";
import { motion } from "motion/react";
export default function Beam() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden  blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" absolute top-0 left-0 h-220 w-100 bg-linear-to-br 
    from-slate-200/5
    via-slate-300/10
    to-white/20 opacity-80 pointer-events-none"
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" absolute top-0 right-0 h-220 w-100 bg-linear-to-br 
    from-slate-200/5
    via-slate-300/10
    to-white/20 opacity-80 pointer-events-none"
        style={{
          clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
        }}
      />
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" absolute top-30 left-1/2 -translate-x-1/2 h-50 w-full max-w-2xl blur-3xl
         bg-linear-to-br from-blue-400 via-yellow-400 to-transparent"
      ></motion.div> */}
    </div>
  );
}
