"use client";

import { motion, AnimatePresence } from "framer-motion";

type Project = {
      title: string;
      desc: string;
      tag: string;
      problem?: string;
      solution?: string;
      stack?: string[];
};

type ProjectModalProps = {
      project: Project | null;
      onClose: () => void;
};

export default function ProjectModal({
      project,
      onClose,
}: ProjectModalProps) {
      return (
            <AnimatePresence>
                  {project && (
                        <motion.div
                              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-6 backdrop-blur-xl"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                        >
                              <motion.div
                                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 40, scale: 0.96 }}
                                    transition={{ duration: 0.35 }}
                                    className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[var(--border)] bg-[rgba(12,12,12,0.94)] p-8 shadow-2xl"
                              >
                                    {/* CLOSE BUTTON */}
                                    <button
                                          onClick={onClose}
                                          className="absolute right-6 top-6 rounded-full border border-[var(--border)] px-3 py-1 text-sm text-white/70 transition-all duration-300 hover:border-[var(--accent)] hover:text-white"
                                    >
                                          X
                                    </button>

                                    {/* LABEL */}
                                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                          Case Study
                                    </p>

                                    {/* TITLE */}
                                    <h2 className="mb-4 pr-20 text-4xl font-bold text-white">
                                          {project.title}
                                    </h2>

                                    {/* DESCRIPTION */}
                                    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
                                          {project.desc}
                                    </p>

                                    {/* VISUAL PLACEHOLDER */}
                                    <div className="mb-8 h-64 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent-soft)] to-[#141414]" />

                                    {/* CONTENT */}
                                    <div className="grid gap-8 md:grid-cols-2">
                                          {/* PROBLEM */}
                                          <div>
                                                <h3 className="mb-3 text-xl font-semibold text-white">
                                                      Problem
                                                </h3>

                                                <p className="leading-relaxed text-white/60">
                                                      {project.problem ||
                                                            "This project explores a frontend challenge around usability, layout systems, interaction design, and user experience."}
                                                </p>
                                          </div>

                                          {/* SOLUTION */}
                                          <div>
                                                <h3 className="mb-3 text-xl font-semibold text-white">
                                                      Solution
                                                </h3>

                                                <p className="leading-relaxed text-white/60">
                                                      {project.solution ||
                                                            "The solution focuses on clean UI architecture, responsive layouts, reusable components, and modern interaction systems."}
                                                </p>
                                          </div>
                                    </div>

                                    {/* STACK */}
                                    <div className="mt-10">
                                          <h3 className="mb-4 text-xl font-semibold text-white">
                                                Tech Stack
                                          </h3>

                                          <div className="flex flex-wrap gap-3">
                                                {(
                                                      project.stack || [
                                                            "React",
                                                            "Next.js",
                                                            "Tailwind CSS",
                                                            "Framer Motion",
                                                      ]
                                                ).map((item) => (
                                                      <span
                                                            key={item}
                                                            className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-4 py-2 text-sm text-[var(--accent)]"
                                                      >
                                                            {item}
                                                      </span>
                                                ))}
                                          </div>
                                    </div>

                                    {/* ACTIONS */}
                                    <div className="mt-10 flex flex-wrap gap-4">
                                          <button className="rounded-xl bg-[var(--accent-strong)] px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-500">
                                                View Live Demo
                                          </button>

                                          <button className="rounded-xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] px-5 py-3 font-medium text-white transition-all duration-300 hover:border-[var(--accent)]">
                                                View GitHub
                                          </button>
                                    </div>
                              </motion.div>
                        </motion.div>
                  )}
            </AnimatePresence>
      );
}