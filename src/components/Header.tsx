"use client";

import Link from "next/link";
import { telUrl, whatsappUrl } from "@/site.config";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-paper md:text-xl"
        >
          Signal<span className="text-signal">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-mute md:flex">
          <a href="#arbeit" className="transition hover:text-paper">
            Arbeit
          </a>
          <a href="#ablauf" className="transition hover:text-paper">
            Ablauf
          </a>
          <a href="#preise" className="transition hover:text-paper">
            Preise
          </a>
          <a href="#kontakt" className="transition hover:text-paper">
            Kontakt
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={telUrl()}
            className="hidden rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-paper transition hover:border-signal/60 sm:inline-flex"
          >
            Anrufen
          </a>
          <a
            href={whatsappUrl("Hallo Signal Graphics — ich interessiere mich für eine Website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-signal px-3.5 py-1.5 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
