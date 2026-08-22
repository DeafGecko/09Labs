import { motion, useReducedMotion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
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
        Dwight Rogers · Design engineering
      </motion.p>

      <motion.h1 className="hero-title" variants={reduced ? stillVisible : fadeUp}>
        {title}
        <br />
        <span className="accent">{subtitle}</span>
      </motion.h1>

      <motion.p className="hero-sub" variants={reduced ? stillVisible : fadeUp}>
        :: astro · typescript · framer-motion
        <br />
        tolerance ±0.001 · ISO 2768
      </motion.p>

      <motion.div className="hero-actions" variants={reduced ? stillFade : fadeIn}>
        <motion.button
          type="button"
          aria-label={`${primaryButtonText} — view portfolio`}
          className="btn-primary"
          whileHover={reduced ? {} : {
            y: -2,
          }}
          whileTap={reduced ? {} : { y: 0, scale: 0.98 }}
          transition={{ duration: 0.18 }}
        >
          {primaryButtonText}
        </motion.button>

        <motion.button
          type="button"
          aria-label={`${secondaryButtonText} — get in touch`}
          className="btn-ghost"
          whileHover={reduced ? {} : {
            y: -2,
          }}
          whileTap={reduced ? {} : { y: 0, scale: 0.98 }}
          transition={{ duration: 0.18 }}
        >
          {secondaryButtonText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
