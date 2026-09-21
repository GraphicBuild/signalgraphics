"use client";

import { useState, type FormEvent } from "react";
import type { ClientSite } from "@/content/clients/types";
import { clientTelUrl } from "@/lib/clientLinks";
import { Reveal } from "@/components/Reveal";

/**
 * Termin-Anfrageformular direkt auf der Startseite — opt-in per Kunde
 * (nur einbinden, wenn `client.bookingEmail` gesetzt ist). Sendet per
 * `mailto:`, damit kein Server-Endpoint nötig ist; Leistungsoptionen
 * kommen automatisch aus `client.services`.
 */
export function ClientBooking({ client }: { client: ClientSite }) {
  const [sent, setSent] = useState(false);
  if (!client.bookingEmail) return null;
  const bookingEmail = client.bookingEmail;

  const serviceOptions = client.services.flatMap((group) =>
    group.items.map((item) => `${group.category} — ${item}`)
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const service = String(fd.get("service") || "");
    const date = String(fd.get("date") || "");
    const time = String(fd.get("time") || "");
    const message = String(fd.get("message") || "").trim();

    const subject = `Terminanfrage — ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Rückruf-Nummer: ${phone}`,
      service && `Gewünschte Leistung: ${service}`,
      date && `Wunschtag: ${date}`,
      time && `Wunschzeit: ${time}`,
      message && `Nachricht: ${message}`,
    ].filter(Boolean);

    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setSent(true);
  }

  return (
    <section
      id="termin"
      className="border-b border-[var(--line)] py-16 md:py-24"
      style={{ background: "var(--accent-soft)" }}
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Termin
            </p>
            <h2 className="mt-3 font-client-display text-3xl font-semibold tracking-tight md:text-4xl">
              Direkt hier anfragen.
            </h2>
            <p className="mt-4 max-w-md text-[var(--ink)]/75">
              Formular ausfüllen, {client.name} meldet sich zum Bestätigen
              zurück — oder sofort anrufen, das geht am schnellsten.
            </p>
            <a
              href={clientTelUrl(client)}
              className="mt-6 inline-block font-semibold text-[var(--ink)] hover:text-[var(--accent)]"
            >
              Sofort anrufen: {client.nap.phoneDisplay}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-[var(--line)] p-6 md:p-8"
              style={{ background: "var(--bg)" }}
            >
              <label className="block text-sm">
                <span className="text-[var(--mute)]">Name</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="text-[var(--mute)]">Telefon (für Rückruf)</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="text-[var(--mute)]">Gewünschte Leistung</span>
                <select
                  name="service"
                  defaultValue={serviceOptions[0]}
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <label className="block text-sm">
                  <span className="text-[var(--mute)]">Wunschtag</span>
                  <input
                    name="date"
                    type="date"
                    className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-[var(--mute)]">Wunschzeit</span>
                  <input
                    name="time"
                    type="time"
                    className="mt-1.5 w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="text-[var(--mute)]">Nachricht (optional)</span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="z. B. gewünschte Länge, Wunschfarbe …"
                  className="mt-1.5 w-full resize-y rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)] outline-none focus:border-[var(--accent)]"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[var(--accent)] py-3.5 text-sm font-bold text-[var(--bg)] transition hover:brightness-110"
              >
                Terminanfrage senden
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs text-[var(--mute)]">
                  Ihr E-Mail-Programm sollte sich mit der Anfrage öffnen —
                  falls nicht, bitte direkt anrufen.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
