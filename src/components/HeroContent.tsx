import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  summary: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const still = { hidden: {}, show: {} };
const stillVisible = { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } };
const stillFade = { hidden: { opacity: 1 }, show: { opacity: 1 } };

export default function HeroContent({
  title,
  subtitle,
  summary,
  primaryButtonText,
  secondaryButtonText,
}: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="hero-content-inner"
      variants={reduced ? still : container}
      initial="hidden"
      animate="show"
    >
      <motion.p className="hero-name" variants={reduced ? stillVisible : fadeUp}>
        <span className="hero-name-dot" aria-hidden="true" />
        DWIGHT ROGERS · Product Engineer
      </motion.p>

      <motion.h1 className="hero-title" variants={reduced ? stillVisible : fadeUp}>
        {title}
        <br />
        <span className="accent" aria-label={subtitle}>
          {Array.from(subtitle).map((letter, index) => (
            <span className="accent-letter" aria-hidden="true" key={`${letter}-${index}`}>
              {letter === " " ? "\u00a0" : letter}
            </span>
          ))}
        </span>
      </motion.h1>

      <motion.p className="hero-sub" variants={reduced ? stillVisible : fadeUp}>
        {summary}
      </motion.p>

      <motion.div className="hero-actions" variants={reduced ? stillFade : fadeIn}>
        <motion.a
          href="#works-section"
          aria-label={`${primaryButtonText} — view portfolio`}
          className="btn-primary"
          whileHover={reduced ? {} : {
            y: -2,
          }}
          whileTap={reduced ? {} : { y: 0, scale: 0.98 }}
          transition={{ duration: 0.18 }}
        >
          <ArrowDownRight size={18} strokeWidth={1.8} aria-hidden="true" />
          {primaryButtonText}
        </motion.a>

        <motion.a
          href="#contact-section"
          aria-label={`${secondaryButtonText} — get in touch`}
          className="btn-ghost"
          whileHover={reduced ? {} : {
            y: -2,
          }}
          whileTap={reduced ? {} : { y: 0, scale: 0.98 }}
          transition={{ duration: 0.18 }}
        >
          <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
          {secondaryButtonText}
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
