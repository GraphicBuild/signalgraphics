"use client";

import { salonLoi, salonTelUrl } from "../salon-loi.config";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--sl-line)] bg-[rgba(20,16,13,0.95)] px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-3xl gap-2">
        <a
          href={salonLoi.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-xl border border-[rgba(246,239,230,0.2)] py-3 text-sm font-medium text-[var(--sl-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sl-accent)]"
        >
          Route
        </a>
        <a
          href={salonTelUrl()}
          className="flex flex-[1.4] items-center justify-center rounded-xl bg-[var(--sl-accent)] py-3 text-sm font-bold text-[var(--sl-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sl-accent)]"
        >
          {salonLoi.contact.phoneDisplay} anrufen
        </a>
      </div>
    </div>
  );
}
