"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
      const [progress, setProgress] = useState(5);

      useEffect(() => {
            const updateProgress = () => {
                  const scrollTop = window.scrollY;
                  const scrollHeight =
                        document.documentElement.scrollHeight - window.innerHeight;

                  const value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 5;

                  setProgress(Math.max(value, 5));
            };

            updateProgress();

            window.addEventListener("scroll", updateProgress, { passive: true });
            window.addEventListener("resize", updateProgress);

            return () => {
                  window.removeEventListener("scroll", updateProgress);
                  window.removeEventListener("resize", updateProgress);
            };
      }, []);

      return (
            <>
                  {/* TOP BAR */}
                  <div className="fixed left-0 top-0 z-999999 h-1.5 w-screen bg-white/10">
                        <div className="progress-bar-animate"  style={{ width: `${progress}%` }} />
                  </div>

                  {/* PERCENT */}
                  <div className="fixed top-5 left-3 z-999999 text-xs font-extralight tracking-wide text-white/30">
                        {Math.round(progress)}%
                  </div>
            </>
      );
}