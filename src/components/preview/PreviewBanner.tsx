export function PreviewBanner({ name }: { name: string }) {
  return (
    <div className="bg-[var(--ink)] px-4 py-2.5 text-center text-xs font-medium tracking-wide text-[var(--bg)] md:text-sm">
      Unverbindlicher Entwurf für {name} — nicht öffentlich, kein Auftrag.
    </div>
  );
}
