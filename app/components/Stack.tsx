"use client";

import { motion } from "framer-motion";
import { sectionVariants } from "../lib/motion";

import {
      Code2,
      Sparkles,
      Database,
} from "lucide-react";

const stackGroups = [
      {
            title: "Frontend",
            icon: Code2,
            items: [
                  "React",
                  "Next.js",
                  "Astro",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
            ],
            desc: "The core tools I use to build fast, interactive websites and smooth user screens.",
      },

      {
            title: "Motion + UI",
            icon: Sparkles,
            items: [
                  "Framer Motion",
                  "Interaction Systems",
                  "Responsive Design",
                  "Accessibility",
                  "Design Systems",
            ],
      },

      {
            title: "Backend Journey",
            icon: Database,
            items: [
                  "Supabase",
                  "API Integration",
                  "Authentication",
                  "Backend Services",
                  "Full-Stack Learning",
            ],
      },
];

export default function Stack() {
      return (
            <motion.section
                  id="stack"
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="snap-start mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24"
            >
                  <div className="w-full">
                        {/* HEADER */}
                        <div className="mb-14 max-w-3xl">
                              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--accent)">
                                    Stack
                              </p>

                              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                    Tools and systems behind the creative frontend work.
                              </h2>

                              <p className="mt-6 text-lg leading-relaxed text-white/70">
                                    A focused stack built around frontend engineering, motion systems,
                                    accessibility, and a growing path toward full-stack development.
                              </p>
                        </div>

                        {/* GRID */}
                        <div className="grid gap-6 md:grid-cols-3">
                              {stackGroups.map((group, index) => {
                                    const Icon = group.icon;

                                    return (
                                          <motion.div
                                                key={group.title}
                                                whileHover={{
                                                      y: -8,
                                                      borderColor: "rgba(245,127,0,0.35)",
                                                      boxShadow: "0 0 30px rgba(245,127,0,0.08)",
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="group relative overflow-hidden rounded-3xl border border-(--border) bg-[rgba(18,18,18,0.72)] p-6 backdrop-blur-xl"
                                          >
                                                {/* GIANT NUMBER */}
                                                <div className="absolute right-5 top-3 text-8xl font-black text-white/3">
                                                      0{index + 1}
                                                </div>

                                                <div className="mb-6 flex items-center gap-4">
                                                      {/* ICON */}
                                                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-[rgba(28,28,28,0.82)] text-(--accent) transition-all duration-300 group-hover:border-(--accent-border)">
                                                            <Icon size={22} />
                                                      </div>

                                                      {/* TITLE */}
                                                      <h3 className="text-2xl font-bold text-white">
                                                            {group.title}
                                                      </h3>
                                                </div>

                                                {/* TAGS */}
                                                <div className="flex flex-wrap gap-3">
                                                      {group.items.map((item) => (
                                                            <span
                                                                  key={item}
                                                                  className="rounded-full border border-(--accent-border) bg-(--accent-soft) px-4 py-2 text-xs text-(--accent)"
                                                            >
                                                                  {item}
                                                            </span>
                                                      ))}
                                                </div>
                                          </motion.div>
                                    );
                              })}
                        </div>
                  </div>
            </motion.section>
      );
}