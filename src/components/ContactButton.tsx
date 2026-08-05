import { Mail } from 'lucide-react';

export default function ContactButton() {
  return (
    <a
      href="#contact"
      aria-label="Contact"
      className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-zinc-800 dark:hover:text-white"
    >
      <Mail className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}