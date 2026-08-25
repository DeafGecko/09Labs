import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
      const [mounted, setMounted] = useState(false);
      const [theme, setTheme] = useState<'light' | 'dark'>('dark');

// Only run on client after mount
            useEffect(() => {
            setMounted(true);

// Read from localStorage and DOM
            const stored = localStorage.getItem('09labs-theme');
            const isDark = document.documentElement.classList.contains('dark');
            const initial = stored === 'light' ? 'light' : isDark || !stored ? 'dark' : 'light';
            setTheme(initial);
      }, []);

      const toggle = () => {
      const next = theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('09labs-theme', next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', next === 'dark' ? '#0a0a0a' : '#dfe2e3');
      };

// During SSR or before mount, render a placeholder (no mismatch)
      if (!mounted) {
      return (
            <button
            type="button"
            aria-label="Loading theme toggle"
            className="
            relative inline-flex h-10 w-10 items-center justify-center
            rounded-[4px] border border-[#d6d0c8] dark:border-[#1f2937]
            bg-[#d2d6d8] dark:bg-[#0f1520]
            text-[#4a5059] dark:text-[#eef4ff]
            transition-colors duration-200
            "
            >
            <span className="w-5 h-5 block" />
            </button>
      );
      }

      return (
      <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggle}
            className="
                  relative inline-flex h-10 w-10 items-center justify-center
                  rounded-[4px] border border-[#d6d0c8] dark:border-[#1f2937]
                  bg-[#d2d6d8] dark:bg-[#0f1520]
                  text-[#4a5059] dark:text-[#eef4ff]
                  hover:bg-[#c5cacc] dark:hover:bg-[#161d2b]
                  focus-visible:ring-2 focus-visible:ring-[#5a8eff] focus:outline-none
                  transition-colors duration-200
                  "
      >
            {theme === 'dark' ? (
            <Moon className="w-5 h-5" />
            ) : (
            <Sun className="w-5 h-5" />
            )}
      </button>
      );
};

export default ThemeToggle;