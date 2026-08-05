import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#stack', label: 'Stack' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
        className="
          p-2 rounded-md 
          text-gray-700 dark:text-gray-300 
          hover:text-gray-900 dark:hover:text-white 
          hover:bg-gray-100 dark:hover:bg-zinc-800
          transition-colors
        "
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div
          className="
            absolute top-full left-0 w-full 
            bg-white dark:bg-zinc-900 
            border-b border-gray-200 dark:border-zinc-700 
            shadow-lg
            md:hidden
          "
          role="menu"
        >
          <nav className="flex flex-col items-start px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-gray-700 dark:text-gray-300 
                  hover:text-gray-900 dark:hover:text-white 
                  transition-colors text-sm font-medium
                "
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;