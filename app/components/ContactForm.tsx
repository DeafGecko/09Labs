"use client";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5">
      <input
        type="text"
        placeholder="Your name"
        className="rounded-xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] p-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[var(--accent)]"
      />

      <input
        type="email"
        placeholder="Email"
        className="rounded-xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] p-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[var(--accent)]"
      />

      <textarea
        rows={8}
        placeholder="Tell me about your project, ideas, goals, or collaboration opportunity..."
        className="resize-none rounded-xl border border-[var(--border)] bg-[rgba(18,18,18,0.72)] p-4 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[var(--accent)]"
      />

      <button
        type="submit"
        className="rounded-xl border border-[var(--accent)] bg-transparent p-4 font-bold text-white transition-all duration-300 hover:bg-[var(--accent)]"
      >
        Send Message
      </button>
    </form>
  );
}