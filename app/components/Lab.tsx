"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";

const experiments = [
      "Motion UI Experiments",
      "Dashboard Concepts",
      "Animation Systems",
      "Interactive Components",
];

export default function Lab() {
      return (
            <motion.section
                  id="lab"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  className="snap-start mx-auto flex h-auto max-w-6xl items-start px-6 pt-12 pb-24"
            >
                  <div className="w-full">
                        {/* HEADER */}
                        <div className="mb-10 max-w-3xl">
                              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                    Experimental Lab
                              </p>

                              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                    Building interfaces, motion systems, and interactive frontend ideas.
                              </h2>

                              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                                    A collection of experimental concepts focused on interaction,
                                    animation, layout systems, cinematic motion, and modern frontend
                                    engineering.
                              </p>
                        </div>

                        {/* GRID */}
                        <div className="grid gap-6 md:grid-cols-2">
                              {experiments.map((item, i) => (
                                    <motion.div
                                          key={i}
                                          whileHover={{
                                                y: -8,
                                                borderColor: "rgba(245,127,0,0.35)",
                                                boxShadow: "0 0 30px rgba(245,127,0,0.08)",
                                          }}
                                          transition={{ duration: 0.25 }}
                                          className="group rounded-3xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] p-6 backdrop-blur-xl"
                                    >
                                          {/* VISUAL */}
                                          <div className="mb-6 flex h-28 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(28,28,28,0.82)]">
                                                <span className="text-5xl font-black text-white/10">
                                                      0{i + 1}
                                                </span>
                                          </div>

                                          {/* TITLE */}
                                          <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--accent)]">
                                                {item}
                                          </h3>

                                          {/* DESCRIPTION */}
                                          <p className="mt-4 leading-relaxed text-slate-400">
                                                Experimental frontend concepts focused on interaction systems,
                                                animation architecture, immersive layouts, and modern UI
                                                engineering patterns.
                                          </p>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </motion.section>
      );
}