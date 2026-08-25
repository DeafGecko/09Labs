import { animate } from "framer-motion";
import { useEffect } from "react";

const SECTION_SELECTORS = [
  "#works-section",
  "#techstack-section",
  "#experience-section",
  "#contact-section",
];

const REVEAL_ITEMS =
  ":scope > header, :scope > .works-header, :scope > .works-accordion, :scope > .techstack-header, :scope > .marquee-group, :scope > .experience-list, :scope > .contact-layout";

export default function PortfolioMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    const sections = SECTION_SELECTORS.map((selector) =>
      document.querySelector<HTMLElement>(selector),
    ).filter((section): section is HTMLElement => Boolean(section));

    if (!reducedMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const items = Array.from(
              entry.target.querySelectorAll<HTMLElement>(REVEAL_ITEMS),
            );
            items.forEach((item, index) => {
              animate(
                item,
                { opacity: [0, 1], y: [22, 0] },
                {
                  duration: 0.58,
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                },
              );
            });
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12 },
      );

      sections.forEach((section) => {
        section
          .querySelectorAll<HTMLElement>(REVEAL_ITEMS)
          .forEach((item) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(22px)";
          });
        observer.observe(section);
      });
      cleanups.push(() => observer.disconnect());
    }

    if (finePointer && !reducedMotion) {
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".slice, .tech-card, .experience-item",
        ),
      );

      cards.forEach((card) => {
        card.style.transformStyle = "preserve-3d";
        card.style.setProperty("--motion-tilt-x", "0deg");
        card.style.setProperty("--motion-tilt-y", "0deg");
        card.style.setProperty("--motion-scale", "1");

        const handleMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          animate(
            card,
            {
              "--motion-tilt-x": `${y * -3}deg`,
              "--motion-tilt-y": `${x * 3}deg`,
              "--motion-scale": 1.006,
            },
            { duration: 0.18, ease: "easeOut" },
          );
        };

        const handleLeave = () => {
          animate(
            card,
            {
              "--motion-tilt-x": "0deg",
              "--motion-tilt-y": "0deg",
              "--motion-scale": 1,
            },
            { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
          );
        };

        card.addEventListener("pointermove", handleMove);
        card.addEventListener("pointerleave", handleLeave);
        cleanups.push(() => {
          card.removeEventListener("pointermove", handleMove);
          card.removeEventListener("pointerleave", handleLeave);
        });
      });

      const accordion = document.querySelector("#worksAccordion");
      if (accordion) {
        const activeObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            const target = mutation.target as HTMLElement;
            if (!target.classList.contains("is-active")) return;
            const content = target.querySelector<HTMLElement>(".slice-content");
            if (content) {
              animate(
                content,
                { opacity: [0.72, 1], x: [-8, 0] },
                { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
              );
            }
          });
        });
        accordion
          .querySelectorAll(".slice")
          .forEach((slice) =>
            activeObserver.observe(slice, {
              attributes: true,
              attributeFilter: ["class"],
            }),
          );
        cleanups.push(() => activeObserver.disconnect());
      }
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
