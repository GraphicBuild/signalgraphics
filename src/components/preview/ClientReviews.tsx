"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ClientSite } from "@/content/clients/types";
import { Reveal } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill={filled ? "var(--accent)" : "none"}
      stroke="var(--accent)"
      strokeWidth={1.2}
      aria-hidden
    >
      <path
        d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClientReviews({ client }: { client: ClientSite }) {
  const root = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !ratingRef.current || !countRef.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      ratingRef.current.textContent = client.reviews.rating
        .toFixed(1)
        .replace(".", ",");
      countRef.current.textContent = client.reviews.count.toLocaleString("de-DE");
      return;
    }

    const ctx = gsap.context(() => {
      const counters = { rating: 0, count: 0 };
      gsap.to(counters, {
        rating: client.reviews.rating,
        count: client.reviews.count,
        duration: 1.3,
        ease: "power2.out",
        onUpdate: () => {
          if (ratingRef.current) {
            ratingRef.current.textContent = counters.rating.toFixed(1).replace(".", ",");
          }
          if (countRef.current) {
            countRef.current.textContent = Math.round(counters.count).toLocaleString("de-DE");
          }
        },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [client.reviews.rating, client.reviews.count]);

  const filledStars = Math.round(client.reviews.rating);
  const highlights = client.reviewHighlights;
  const placeholderCount = highlights.length > 0 ? 0 : 3;

  return (
    <section
      id="bewertungen"
      ref={root}
      className="border-b border-[var(--line)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Bewertungen
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <span className="font-client-display text-5xl font-semibold tracking-tight md:text-6xl">
              <span ref={ratingRef}>0,0</span>
            </span>
            <div className="pb-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < filledStars} />
                ))}
              </div>
              <p className="mt-1 text-sm text-[var(--mute)]">
                <span ref={countRef}>0</span> Bewertungen bei {client.reviews.source}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.author} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-[var(--line)] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)]">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} filled={s < h.rating} />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/85">
                  „{h.text}“
                </p>
                <p className="mt-4 text-sm font-semibold">{h.author}</p>
              </div>
            </Reveal>
          ))}
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <Reveal key={`placeholder-${i}`} delay={i * 0.06}>
              <div className="flex h-full min-h-[160px] items-center justify-center rounded-2xl border border-dashed border-[var(--line)] p-6 text-center text-sm text-[var(--mute)]">
                Bewertung folgt
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
