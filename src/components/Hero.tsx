"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site, telUrl, whatsappUrl } from "@/site.config";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 0.6 })
        .from("[data-hero-title]", { opacity: 0, y: 36, duration: 0.9 }, "-=0.25")
        .from("[data-hero-offer]", { opacity: 0, y: 20, duration: 0.7 }, "-=0.45")
        .from("[data-hero-cta]", { opacity: 0, y: 14, duration: 0.55 }, "-=0.35")
        .from("[data-hero-meta]", { opacity: 0, duration: 0.5 }, "-=0.25");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-b border-line pt-28 md:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
      />
      <div className="mx-auto max-w-site px-5 pb-16 md:px-8 md:pb-24">
        <p
          data-hero-eyebrow
          className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-signal"
        >
          {site.name} · DACH
        </p>
        <h1
          data-hero-title
          className="max-w-4xl font-display text-[clamp(2.6rem,9vw,5.75rem)] font-bold leading-[0.95] tracking-tightest text-paper"
        >
          Websites, die
          <br />
          <span className="text-signal">lokal wirken.</span>
        </h1>
        <p
          data-hero-offer
          className="mt-7 max-w-xl text-lg leading-snug text-paper/85 md:text-xl"
        >
          {site.offer}
        </p>
        <div data-hero-cta className="mt-9 flex flex-wrap gap-3">
          <a
            href={whatsappUrl("Hallo Signal Graphics — Vorschau bitte.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-signal px-6 py-3.5 text-sm font-bold text-ink transition hover:brightness-110"
          >
            Vorschau per WhatsApp
          </a>
          <a
            href={telUrl()}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-paper transition hover:border-signal/50"
          >
            {site.contact.phoneDisplay}
          </a>
        </div>
        <p data-hero-meta className="mt-10 text-sm text-mute">
          Gründer: {site.founders.map((f) => f.name).join(" & ")} · Tür-zu-Tür
          Vorschau · Launch + Betreuung
        </p>
      </div>
    </section>
  );
}
