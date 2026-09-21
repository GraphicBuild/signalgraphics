import type { ClientSite } from "@/content/clients/types";
import { clientMapsUrl, clientTelUrl, clientWhatsappUrl } from "@/lib/clientLinks";

export function ClientStickyCta({ client }: { client: ClientSite }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--line)] bg-[var(--bg)]/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden"
    >
      <div className="mx-auto flex max-w-site gap-2">
        <a
          href={clientTelUrl(client)}
          className="flex flex-1 items-center justify-center rounded-xl border border-[var(--ink)]/15 py-3 text-sm font-semibold text-[var(--ink)]"
        >
          Anrufen
        </a>
        <a
          href={clientMapsUrl(client)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-xl border border-[var(--ink)]/15 py-3 text-sm font-semibold text-[var(--ink)]"
        >
          Route
        </a>
        <a
          href={clientWhatsappUrl(client)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-[1.4] items-center justify-center rounded-xl bg-[var(--accent)] py-3 text-sm font-bold text-[var(--bg)]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
