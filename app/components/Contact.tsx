"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";
import ContactForm from "./ContactForm";

export default function Contact() {
      return (
            <motion.section
                  id="contact"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="snap-start mx-auto flex min-h-screen max-w-6xl items-center pt-2 px-6 py-24"
            >
                  <div className="grid w-full gap-16 md:grid-cols-2 mt-4">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col justify-center">
                              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--accent)">
                                    Contact
                              </p>

                              <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                                    Let’s build modern frontend experiences together.
                              </h2>

                              <p className="mb-8 text-lg leading-relaxed text-white/70">
                                    I’m transitioning from a 10-year background in graphic
                                    design into Front-End Engineering, combining visual design,
                                    UI systems, and modern web technologies to create clean,
                                    interactive digital products.
                              </p>

                              <div className="space-y-4 text-white/70">
                                    <div>
                                          <p className="text-sm uppercase tracking-wider text-(--accent)">
                                                Focus
                                          </p>

                                          {/* UPDATED: Added Astro smoothly to your core tech stack line */}
                                          <p className="mt-1">
                                                React • Next.js • Astro • Tailwind • Framer Motion
                                          </p>
                                    </div>

                                    <div>
                                          <p className="text-sm uppercase tracking-wider text-(--accent)">
                                                Current Goal
                                          </p>

                                          <p className="mt-1">
                                                Building modern frontend systems and interactive user
                                                experiences.
                                          </p>
                                    </div>
                              </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="rounded-3xl border border-white/20 bg-[rgba(28,28,28,0.82) ] p-8 backdrop-blur-sm">
                              <ContactForm />
                        </div>

                  </div>
            </motion.section>
      );
}