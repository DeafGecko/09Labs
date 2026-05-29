"use client";

import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

const works = [
      {
            title: "VoltFund Console",
            desc: "A live money dashboard that tracks micro-grants, saves daily chart totals, and uses screen-reader voice features.",
            tag: "ASTRO • TYPESCRIPT • A11Y",
            problem:
                  "Workers sending out emergency funds in fast situations get slowed down by messy screens and easily make typing mistakes.",
            solution:
                  "A clean, black layout with strict code rules that block bad typing entries and keep form screens completely organized.",
            stack: ["Astro", "TypeScript", "Pure CSS", "Accessibility"],
            // STEP 1: Add your asset paths here (e.g., "/images/voltfund.jpg")
            imageSrc: "/images/voltfund.png",
            liveLink: "https://voltfund-platform.vercel.app/",
            repoLink: "https://github.com/DeafGecko/voltfund-platform"
      },
      {
            title: "ClearCard",
            desc: "A mobile web app that helps Deaf and Hard of Hearing individuals communicate instantly using smart visual cards.",
            tag: "REACT • ACCESSIBILITY • UX DESIGN",
            problem:
                  "Deaf and Hard of Hearing people often have to type messages over and over again to communicate with hearing people in everyday places like doctors or restaurants.",
            solution:
                  "A fast, high-contrast digital card library and a silent chat tool with voice-to-text features. It includes an AI assistant to auto-make cards, and keeps all sensitive user notes completely private on their own device.",
            stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            imageSrc: "/images/clearcard.png",
            liveLink: "https://clearcard.vercel.app/",
            repoLink: "https://github.com/DeafGecko/clearcard"
      },
      {
            title: "Kanso (Zen Notes)",
            desc: "A beautiful, distraction-free writing app made for deep focus and simple journaling.",
            tag: "Zen Philosophy • Local Privacy",
            problem:
                  "Most writing and note-taking apps have too many messy buttons, menus, and pop-ups that distract you from your thoughts.",
            solution:
                  "A super clean, minimalist text editor with custom themes and fonts. It tracks your word goals, works on mobile, and saves files straight to your computer so your writing stays 100% private and fast.",
            stack: ["JavaScript (Vanilla)", "Tailwind CSS", "HTML5", "Vite"],
            imageSrc: "/images/kanso.png",
            liveLink: "https://kanso-bay.vercel.app",
            repoLink: "https://github.com/DeafGecko/kanso"
      },
];

export default function ProjectsHorizontal() {
      const targetRef = useRef<HTMLElement | null>(null);
      const [selectedProject, setSelectedProject] = useState<(typeof works)[0] | null>(null);

      const [sliderValue, setSliderValue] = useState(0);
      const manualX = useMotionValue(0);

      const { scrollYProgress } = useScroll({
            target: targetRef,
            offset: ["start start", "end end"],
      });

      const scrollX = useTransform(scrollYProgress, [0, 1], [0, -58]);
      const [combinedX, setCombinedX] = useState<any>("0%");

      useEffect(() => {
            return scrollX.on("change", (latestScroll) => {
                  if (latestScroll !== 0) {
                        setCombinedX(`${latestScroll}%`);
                        const percentage = Math.min(100, Math.max(0, (latestScroll / -58) * 100));
                        setSliderValue(percentage);
                  }
            });
      }, [scrollX]);

      useEffect(() => {
            return manualX.on("change", (latestManual) => {
                  setCombinedX(`${latestManual}%`);
            });
      }, [manualX]);

      useEffect(() => {
            const section = targetRef.current;
            if (!section) return;

            const handleWheel = (e: WheelEvent) => {
                  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                        e.preventDefault();
                  }
            };

            section.addEventListener("wheel", handleWheel, { passive: false });

            return () => {
                  section.removeEventListener("wheel", handleWheel);
            };
      }, []);

      const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = parseFloat(e.target.value);
            setSliderValue(val);
            const targetedX = (val / 100) * -58;
            manualX.set(targetedX);
      };

      return (
            <section
                  ref={targetRef}
                  id="works"
                  className="relative h-[300vh] snap-start"
            >
                  <div className="sticky top-0 flex h-screen flex-col justify-start overflow-hidden pt-16 pb-6">

                        {/* Top Header Section */}
                        <div className="mx-auto w-full max-w-6xl px-6">
                              <div className="mb-2 max-w-3xl">
                                    <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                                          Selected Works
                                    </p>

                                    <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                                          Interactive frontend systems.
                                    </h2>

                                    <p className="mt-4 text-base leading-relaxed text-white/70">
                                          Scroll through or use the slider below to view case studies.
                                    </p>
                              </div>
                        </div>

                        {/* Infinite horizontal card track frame */}
                        <div className="w-full overflow-x-hidden overflow-y-visible pt-4 mt-6">
                              <motion.div
                                    style={{ x: combinedX }}
                                    className="flex gap-8 pb-4 pl-[calc((100vw-1152px)/2+24px)] pr-24 min-[1152px]:pl-[calc((100vw-1152px)/2+24px)] max-[1152px]:px-6"
                              >
                                    {works.map((work, index) => (
                                          <motion.article
                                                key={work.title}
                                                onClick={() => setSelectedProject(work)}
                                                whileHover={{
                                                      y: -8,
                                                      borderColor: "rgba(245,127,0,0.35)",
                                                      boxShadow: "0 0 30px rgba(245,127,0,0.08)",
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="group flex min-w-[320px] flex-col cursor-pointer rounded-3xl border border-(--border) bg-[rgba(18,18,18,0.72)] p-6 backdrop-blur-xl md:min-w-105"
                                          >
                                                {/* STEP 2: Swapped 01/02 text out for a premium fluid background image container */}
                                                <div
                                                      className="mb-6 flex h-48 items-center justify-center rounded-2xl border border-(--border) bg-[rgba(28,28,28,0.82)] bg-cover bg-center transition-all duration-300 group-hover:opacity-90"
                                                      style={{ backgroundImage: `url(${work.imageSrc})` }}
                                                >
                                                      {/* Fallback clean number layout overlay if image string is blank or missing */}
                                                      {!work.imageSrc && (
                                                            <span className="text-6xl font-black text-white/10">
                                                                  0{index + 1}
                                                            </span>
                                                      )}
                                                </div>

                                                <p className="mb-3 text-sm uppercase tracking-[0.18em] text-(--accent)">
                                                      {work.tag}
                                                </p>

                                                <h3 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-(--accent)">
                                                      {work.title}
                                                </h3>

                                                <p className="flex-grow leading-relaxed text-slate-400">
                                                      {work.desc}
                                                </p>

                                                <p className="mt-6 text-sm font-medium text-(--accent)">
                                                      Click to view case study →
                                                </p>
                                          </motion.article>
                                    ))}
                              </motion.div>
                        </div>

                  </div>

                  <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                  />

                  <style jsx global>{`
                        input[type="range"]::-webkit-slider-thumb {
                              -webkit-appearance: none;
                              appearance: none;
                              width: 16px;
                              height: 16px;
                              border-radius: 50%;
                              background: var(--accent, #f57f00);
                              box-shadow: 0 0 12px rgba(245, 127, 0, 0.4);
                              cursor: grab;
                              transition: transform 0.1s ease;
                        }
                        input[type="range"]::-webkit-slider-thumb:active {
                              cursor: grabbing;
                              transform: scale(1.15);
                        }
                        input[type="range"]::-moz-range-thumb {
                              width: 16px;
                              height: 16px;
                              border-radius: 50%;
                              background: var(--accent, #f57f00);
                              border: none;
                              box-shadow: 0 0 12px rgba(245, 127, 0, 0.4);
                              cursor: grab;
                        }
                  `}</style>
            </section>
      );
}