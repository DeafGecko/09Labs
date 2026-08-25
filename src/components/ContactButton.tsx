import { Mail } from 'lucide-react';

export default function ContactButton() {
  return (
    <>
      <style>{`
        @property --header-contact-border-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes header-contact-border-travel {
          to { --header-contact-border-angle: 360deg; }
        }
        .contact-btn::before {
          content: "";
          position: absolute;
          inset: -1px;
          padding: 1px;
          border-radius: inherit;
          background: conic-gradient(
            from var(--header-contact-border-angle),
            transparent 0 55%,
            #2a52cc 72% 88%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          pointer-events: none;
        }
        .contact-btn:hover::before {
          opacity: 1;
          animation: header-contact-border-travel 1.5s linear infinite;
        }
        .dark .contact-btn:hover {
          color: #5a8eff;
          background: rgba(90, 142, 255, 0.06);
          box-shadow: none;
        }
        .dark .contact-btn::before {
          background: conic-gradient(
            from var(--header-contact-border-angle),
            transparent 0 55%,
            #5a8eff 72% 88%,
            transparent 100%
          );
        }
        .contact-btn:hover {
          background: rgba(42, 82, 204, 0.08);
          color: #2a52cc;
          box-shadow: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-btn:hover::before {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
      <a
        href="mailto:dwirog@gmail.com"
        aria-label="Contact"
        className="contact-btn relative inline-flex items-center justify-center rounded-[4px] p-2 text-gray-700 dark:text-gray-300 transition-colors"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
      </a>
    </>
  );
}