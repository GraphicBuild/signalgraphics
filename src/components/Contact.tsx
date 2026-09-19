"use client";

import { useState, type FormEvent } from "react";
import { site, telUrl, whatsappUrl } from "@/site.config";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const business = String(fd.get("business") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const text = [
      "Hallo Signal Graphics,",
      name && `Ich bin ${name}.`,
      business && `Betrieb: ${business}.`,
      message && message,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(whatsappUrl(text || undefined), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">
              Kontakt
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Kurz schreiben.
              <br />
              Schnell antworten.
            </h2>
            <p className="mt-5 max-w-md text-mute">
              Formular öffnet WhatsApp mit Ihrer Nachricht — oder rufen Sie
              direkt an.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={telUrl()}
                className="block font-semibold text-paper hover:text-signal"
              >
                Tel / WhatsApp: {site.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="block text-mute hover:text-signal"
              >
                {site.contact.email}
              </a>
              <p className="text-mute">{site.contact.city}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-line/40 p-6 md:p-8"
            >
              <label className="block text-sm">
                <span className="text-mute">Name</span>
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none focus:border-signal"
                  autoComplete="name"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="text-mute">Betrieb / Branche</span>
                <input
                  name="business"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none focus:border-signal"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="text-mute">Nachricht</span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-ink px-4 py-3 text-paper outline-none focus:border-signal"
                  placeholder="Was soll die Website leisten?"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-signal py-3.5 text-sm font-bold text-ink transition hover:brightness-110"
              >
                Per WhatsApp senden
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs text-mute">
                  WhatsApp sollte sich öffnen — falls nicht, nutzen Sie den
                  Button oben.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
