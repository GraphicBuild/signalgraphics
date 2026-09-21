import type { ClientSite } from "@/content/clients/types";
import { clientTelUrl } from "@/lib/clientLinks";

export function ClientFooter({ client }: { client: ClientSite }) {
  return (
    <footer className="border-t border-[var(--line)] py-10 text-center text-xs text-[var(--mute)]">
      <p>
        {client.nap.name} · {client.nap.street}, {client.nap.zipCity} ·{" "}
        <a href={clientTelUrl(client)} className="hover:underline">
          {client.nap.phoneDisplay}
        </a>
      </p>
      <p className="mt-2">
        Unverbindliche Vorschau, erstellt von{" "}
        <a href="https://signalgraphics.de" className="hover:underline">
          Signal Graphics
        </a>
        .
      </p>
    </footer>
  );
}
