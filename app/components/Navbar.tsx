"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogoWide } from "../lib/Logo.jsx";
import MenuIcon from "../components/MenuIcon";
import { scrollToId } from "../lib/helpers";

export default function Navbar() {
      const [open, setOpen] = useState(false);
      const [activeSection, setActiveSection] = useState("");
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
            const sections = ["works", "about", "stack", "contact"];

            const handleScroll = () => {
                  const scrollY = window.scrollY + window.innerHeight * 0.45;

                  const hero = document.getElementById("hero");

                  if (hero) {
                        const heroTop = hero.offsetTop;
                        const heroBottom = heroTop + hero.offsetHeight;

                        if (scrollY >= heroTop && scrollY < heroBottom) {
                              setActiveSection("");
                              return;
                        }
                  }

                  let current = "";

                  for (const id of sections) {
                        const el = document.getElementById(id);

                        if (!el) continue;

                        const top = el.offsetTop;
                        const bottom = top + el.offsetHeight;

                        if (scrollY >= top && scrollY < bottom) {
                              current = id;
                        }
                  }

                  setActiveSection(current);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll, {
                  passive: true,
            });

            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      useEffect(() => {
            const handleScroll = () => {
                  setScrolled(window.scrollY > 20);
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll, {
                  passive: true,
            });

            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);

      const scrollToSection = (id: string) => {
            setActiveSection(id);
            setOpen(false);

            const html = document.documentElement;
            const body = document.body;

            // This code is fighting against the browser's normal scroll behavior
            html.style.scrollSnapType = "none";
            body.style.scrollSnapType = "none";

            if (id === "works") {
                  const works = document.getElementById("works");

                  if (!works) return;

                  window.scrollTo({
                        top: works.offsetTop + 8,
                        behavior: "smooth",
                  });

                  setTimeout(() => {
                        html.style.scrollSnapType = "";
                        body.style.scrollSnapType = "";
                        setActiveSection("works");
                  }, 700);

                  return;
            }

            const el = document.getElementById(id);

            if (!el) return;

            window.scrollTo({
                  top: el.offsetTop,
                  behavior: "smooth",
            });

            setTimeout(() => {
                  html.style.scrollSnapType = "";
                  body.style.scrollSnapType = "";
            }, 700);
      };

      const navItem = (id: string, label: string) => (
            <button
                  onClick={() => scrollToSection(id)}
                  className={`relative lowercase transition-colors ${activeSection === id
                              ? "text-(--accent)"
                              : "text-slate-300 hover:text-(--accent)"
                        }`}
            >
                  {label}

                  <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-(--accent) transition-all duration-300 ${activeSection === id ? "w-full" : "w-0"
                              }`}
                  />
            </button>
      );

      return (
            <motion.nav
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                              ? "border-(--border) bg-[#080808]/95 shadow-lg shadow-black/30 backdrop-blur-xl"
                              : "border-(--border) bg-[#080808]/80 backdrop-blur-md"
                        }`}
            >
                  <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
                        {/* LOGO */}
                        <div className="flex shrink-0 flex-col leading-tight">
                              <Link
                                    href="/"
                                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                                    onClick={(e) => {
                                          e.preventDefault();
                                          setActiveSection("");
                                          scrollToId("hero");
                                          setOpen(false);
                                    }}
                              >
                              <div className="w-22 pb-1">
                                    <LogoWide className="h-auto w-full" />
                              </div>
                              </Link>

                              <span className="text-[10px] text-slate-200">
                                    creative frontend engineering
                              </span>
                        </div>

                        {/* DESKTOP NAV */}
                        <div className="hidden items-center gap-6 text-[14px] tracking-[0.18em] md:flex">
                              {navItem("works", "works")}
                              {navItem("about", "about")}
                              {navItem("stack", "stack")}
                              {navItem("contact", "contact")}
                        </div>

                        {/* MOBILE BUTTON */}
                        <button
                              onClick={() => setOpen(!open)}
                              className="text-2xl text-slate-200 md:hidden"
                              aria-label="Toggle navigation menu"
                        >
                              <MenuIcon open={open} />
                        </button>
                  </div>

                  {/* MOBILE MENU */}
                  <AnimatePresence>
                        {open && (
                              <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden border-t border-(--border) bg-[#080808]/95 md:hidden"
                              >
                                    <div className="flex flex-col gap-4 px-6 py-6 text-slate-300">
                                          {navItem("works", "works")}
                                          {navItem("about", "about")}
                                          {navItem("stack", "stack")}
                                          {navItem("contact", "contact")}
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </motion.nav>
      );
}