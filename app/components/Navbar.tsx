"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogoWide } from "../lib/Logo.jsx";
import MenuIcon from "../components/MenuIcon";
import { scrollToId } from "../lib/helpers";
import { translations, type Language } from "../lib/translations";

export default function Navbar() {
      const [open, setOpen] = useState(false);
      const [activeSection, setActiveSection] = useState("");
      const [scrolled, setScrolled] = useState(false);

      const [language, setLanguage] = useState<Language>("EN");
      const [languageOpen, setLanguageOpen] = useState(false);

      const t = translations[language];

      const languages = [
            { code: "EN", label: "English" },
            { code: "ZH", label: "Chinese" },
            { code: "FR", label: "French" },
            { code: "ES", label: "Spanish" },
      ];

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
                  className={`relative transition-colors ${activeSection === id
                        ? "text-[var(--accent)]"
                        : "text-slate-300 hover:text-[var(--accent)]"
                        }`}
            >
                  {label}

                  <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--accent)] transition-all duration-300 ${activeSection === id ? "w-full" : "w-0"
                              }`}
                  />
            </button>
      );

      const languageDropdown = (
            <div className="relative">
                  <button
                        onClick={() => setLanguageOpen(!languageOpen)}
                        className="text-sm font-medium tracking-wide text-slate-400 transition-colors hover:text-[var(--accent)]"
                  >
                        {language}
                  </button>

                  <AnimatePresence>
                        {languageOpen && (
                              <motion.div
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-4 w-40 rounded-2xl border border-[var(--border)] bg-[#080808]/95 p-2 shadow-xl backdrop-blur-xl"
                              >
                                    {languages.map((item) => (
                                          <button
                                                key={item.code}
                                                onClick={() => {
                                                      setLanguage(item.code as Language);
                                                      setLanguageOpen(false);
                                                }}
                                                className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-[var(--accent)]"
                                          >
                                                {item.label}
                                          </button>
                                    ))}
                              </motion.div>
                        )}
                  </AnimatePresence>
            </div>
      );

      return (
            <motion.nav
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
                        ? "border-[var(--border)] bg-[#080808]/95 shadow-lg shadow-black/30 backdrop-blur-xl"
                        : "border-[var(--border)] bg-[#080808]/80 backdrop-blur-md"
                        }`}
            >
                  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
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
                                    <div className="w-[100px] pb-1">
                                          <LogoWide className="h-auto w-full text-[var(--accent)]" />
                                    </div>
                              </Link>

                              <span className="text-[10px] text-slate-200">
                                    creative frontend engineering
                              </span>
                        </div>

                        {/* DESKTOP NAV */}
                        <div className="hidden items-center gap-8 text-[15px] uppercase tracking-[0.18em] md:flex">
                              {navItem("works", t.nav.works)}
                              {navItem("about", t.nav.about)}
                              {navItem("contact", t.nav.contact)}

                              <span className="text-white/20">|</span>

                              {languageDropdown}
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
                                    className="overflow-hidden border-t border-[var(--border)] bg-[#080808]/95 md:hidden"
                              >
                                    <div className="flex flex-col gap-4 px-6 py-6 text-slate-300">
                                          {navItem("works", t.nav.works)}
                                          {navItem("about", t.nav.about)}
                                          {navItem("contact", t.nav.contact)}

                                          <div className="my-2 h-px w-full bg-white/10" />

                                          {languageDropdown}
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </motion.nav>
      );
}