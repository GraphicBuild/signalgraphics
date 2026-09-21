"use client";

import { telUrl } from "@/content/haarstudio.config";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-salonLine bg-salonCream/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-site gap-2">
        <a
          href={telUrl()}
          className="flex flex-1 items-center justify-center rounded-xl border border-salonInk/15 py-3 text-sm font-semibold text-salonInk"
        >
          Anrufen
        </a>
        <a
          href="#termin"
          className="flex flex-[1.4] items-center justify-center rounded-xl bg-salonClay py-3 text-sm font-bold text-salonCream"
        >
          Termin anfragen
        </a>
      </div>
    </div>
  );
}
