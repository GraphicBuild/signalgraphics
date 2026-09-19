"use client";

import { telUrl, whatsappUrl } from "@/site.config";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-site gap-2">
        <a
          href={telUrl()}
          className="flex flex-1 items-center justify-center rounded-xl border border-white/15 py-3 text-sm font-semibold text-paper"
        >
          Anrufen
        </a>
        <a
          href={whatsappUrl("Hallo — ich möchte eine Website-Vorschau.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.4] items-center justify-center rounded-xl bg-signal py-3 text-sm font-bold text-ink"
        >
          WhatsApp schreiben
        </a>
      </div>
    </div>
  );
}
