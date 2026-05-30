"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";

export default function About() {
      return (
            <motion.section
                  id="about"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="snap-start mx-auto flex min-h-screen max-w-6xl items-center pt-2 px-6 py-24"
            >
                  <div className="grid w-full gap-16 md:grid-cols-[0.9fr_1.1fr]">
                        {/* LEFT */}
                        <div>
                              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                    About
                              </p>

                              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                    Creative frontend engineering with a cinematic approach.
                              </h2>
                        
                              {/* ACTIONS */}
                              <div className="flex flex-wrap gap-4 pt-8">
                                    <a
                                          href="/resume/dwight-rogers-resume.pdf"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] px-6 py-4 text-sm tracking-[0.18em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                    >
                                          View Resume
                                    </a>

                                    <a
                                          href="https://github.com/DeafGecko"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] px-6 py-4 text-sm tracking-[0.18em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                    >
                                          GitHub
                                    </a>
                              </div>
                        </div>

                        {/* RIGHT */}
                        <div className="space-y-8">
                              {/* TEXT */}
                              <div className="space-y-6 text-lg leading-relaxed text-white/70">
                                    <p>
                                          I’m Dwight Rogers, a frontend developer and design engineer based in Nashville, TN. I’m passionate about building immersive digital products that connect visual storytelling with engineering, and I’m focused on creating cinematic interfaces, interactive systems, and creative technology. I’m currently
                                          transitioning from more than 10 years in graphic design into
                                          modern frontend engineering.
                                    </p>

                                    <p>
                                          My background gives me a strong eye for composition, hierarchy,
                                          branding, visual systems, and interaction-focused experiences.
                                    </p>

                                    <p>
                                          I’m currently focused on React, Next.js, Tailwind CSS, motion
                                          systems, accessibility, and building immersive frontend products
                                          that connect visual storytelling with engineering.
                                    </p>

                                    <p>
                                          Long term, I’m evolving toward full-stack development while
                                          continuing to explore cinematic interfaces, interactive systems,
                                          and creative technology.
                                    </p>
                              </div>

                        </div>
                  </div>
            </motion.section>
      );
}