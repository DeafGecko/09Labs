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
                  className="snap-start mx-auto flex min-h-screen max-w-6xl items-start px-2 pt-36 pb-24"
            >
                  <div className="grid w-full gap-14 md:grid-cols-[0.9fr_1.1fr]">
                        <div>
                              <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                    About
                              </p>

                              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                    From visual design to creative frontend engineering.
                              </h2>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed text-white/70">
                              <p>
                                    I’m Dwight Rogers, a frontend developer and creative technologist
                                    transitioning from more than 10 years in graphic design into modern
                                    frontend engineering.
                              </p>

                              <p>
                                    My background gives me a strong eye for composition, visual systems,
                                    hierarchy, and brand clarity. I’m now applying that foundation to
                                    React, Next.js, Tailwind CSS, Framer Motion, accessibility, and
                                    interactive product interfaces.
                              </p>

                              <p>
                                    I’m focused on building clean, cinematic, responsive web experiences
                                    that connect design thinking with real frontend implementation.
                              </p>

                              <p>
                                    Long term, I’m growing toward full-stack engineering so I can design,
                                    build, and connect complete digital products from interface to data.
                              </p>
                        </div>
                  </div>
            </motion.section>
      );
}