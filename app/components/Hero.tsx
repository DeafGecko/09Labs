"use client";

import { motion } from "framer-motion";
import { scrollToId } from "../lib/helpers";
import { sectionVariants } from "../lib/motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LogoMark } from "../lib/Logo.jsx";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={sectionVariants}
      initial="hidden"
      animate="show"
      className="relative snap-start mx-auto grid min-h-screen max-w-6xl items-center gap-10 overflow-hidden pt-4 px-6 py-12 md:grid-cols-2"
    >
      {/* GIANT 09 BACKGROUND */}
      <motion.div
        initial={{ opacity: 0, scale: 0.60 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="pointer-events-none absolute right-[5%] top-1/2 hidden -translate-y-1/2 md:block"
      >
        {/* giant 09 */}
        <LogoMark className="relative h-auto w-165" />
      </motion.div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-sm uppercase tracking-[0.2em] text-(--accent)"
        >
          Dwight Rogers | DeafGecko
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl text-5xl font-black leading-[1.1] tracking-tight text-white md:text-6xl"
        >
          <>
            <span className="block whitespace-nowrap">
              Frontend Developer &
            </span>

            <span className="block whitespace-nowrap">
              Design Engineer
            </span>
          </>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-2xl text-xl leading-relaxed text-white/80"
        >
          Building cinematic interfaces, motion systems, and accessible frontend experiences.
        </motion.p>

        {/* CTA + SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          {/* FIX: Changed bg to use var(--accent) to guarantee an exact color match, and swapped hover to brightness shifting */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToId("works")}
            className="rounded-xl bg-(--accent) px-7 py-4 font-bold text-white transition-all duration-300 hover:brightness-110"
          >
            View Works
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToId("contact")}
            className="rounded-xl border border-(--border) bg-[rgba(18,18,18,0.72)] px-7 py-4 font-medium text-white transition-all duration-300 hover:border-(--accent)"
          >
            Contact Me
          </motion.button>

          <div className="ml-2 flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/DeafGecko"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-white"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/dwight-rogers-22b417a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#38BDF8]"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section >
  );
}