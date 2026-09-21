"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { salonLoi, salonTelUrl } from "../salon-loi.config";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 14, duration: 0.6 })
        .from("[data-hero-title]", { opacity: 0, y: 30, duration: 0.9 }, "-=0.25")
        .from("[data-hero-line]", { opacity: 0, y: 18, duration: 0.7 }, "-=0.45")
        .from("[data-hero-cta]", { opacity: 0, y: 12, duration: 0.5 }, "-=0.35")
        .from("[data-hero-badge]", { opacity: 0, duration: 0.5 }, "-=0.25");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-b border-[var(--sl-line)] bg-[var(--sl-ink)] pt-16 text-[var(--sl-paper)] md:pt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[rgba(201,113,63,0.14)] blur-[100px]"
      />
      <p
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-[family-name:var(--font-salon-display)] text-[26rem] font-medium italic leading-none text-[var(--sl-paper)] lg:block"
        style={{ opacity: 0.04 }}
      >
        L
      </p>
      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <p
          data-hero-eyebrow
          className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--sl-accent)]"
        >
          {salonLoi.district} · {salonLoi.city}
        </p>
        <h1
          data-hero-title
          className="font-[family-name:var(--font-salon-display)] text-[clamp(2.75rem,10vw,4.75rem)] font-medium italic leading-[0.98] tracking-tight text-[var(--sl-paper)]"
        >
          {salonLoi.name}
        </h1>
        <p
          data-hero-line
          className="mt-6 max-w-md text-lg leading-snug text-[rgba(246,239,230,0.85)] md:text-xl"
        >
          Schnitt, Farbe und Styling in der Neckarstadt — seit Jahren die
          Adresse, zu der man wieder zurückkommt.
        </p>
        <div data-hero-cta className="mt-9 flex flex-wrap gap-3">
          <a
            href={salonTelUrl()}
            className="inline-flex items-center rounded-full bg-[var(--sl-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--sl-ink)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sl-accent)]"
          >
            {salonLoi.contact.phoneDisplay} anrufen
          </a>
          <a
            href={salonLoi.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[rgba(246,239,230,0.25)] px-6 py-3.5 text-sm font-medium text-[var(--sl-paper)] transition hover:border-[rgba(201,113,63,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sl-accent)]"
          >
            Route planen
          </a>
        </div>
        <p
          data-hero-badge
          className="mt-10 text-sm text-[var(--sl-mute)]"
        >
          {salonLoi.reviews.count} {salonLoi.reviews.label} ·{" "}
          {salonLoi.address.full}
        </p>
      </div>
    </section>
  );
}
