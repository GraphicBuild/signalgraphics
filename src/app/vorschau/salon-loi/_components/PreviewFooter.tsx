import { salonLoi } from "../salon-loi.config";

export function PreviewFooter() {
  return (
    <footer className="bg-[var(--sl-ink)] px-5 pb-24 pt-10 text-center text-xs text-[var(--sl-mute)] md:px-8 md:pb-10">
      <p>
        {salonLoi.name} · {salonLoi.address.full} ·{" "}
        {salonLoi.contact.phoneDisplay}
      </p>
      <p className="mt-2">
        Entwurf von{" "}
        <a
          href="https://signalgraphics.de"
          className="underline decoration-[var(--sl-accent)] underline-offset-2 hover:text-[var(--sl-paper)]"
        >
          Signal Graphics
        </a>{" "}
        — unverbindlich, kein Auftrag.
      </p>
    </footer>
  );
}
