"use client";

import { useState, type FormEvent } from "react";
import {
  haarstudio,
  bookingMailtoUrl,
  telUrl,
} from "@/content/haarstudio.config";
import { Reveal } from "@/components/Reveal";

export function Booking() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const service = String(fd.get("service") || "");
    const date = String(fd.get("date") || "");
    const time = String(fd.get("time") || "");
    const message = String(fd.get("message") || "").trim();
    window.location.href = bookingMailtoUrl({
      name,
      phone,
      service,
      date,
      time,
      message,
    });
    setSent(true);
  }

  return (
    <section
      id="termin"
      className="border-b border-salonLine bg-salonCard py-20 md:py-28"
    >
      <div className="mx-auto max-w-site px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-salonClay">
              Termin
            </p>
            <h2 className="mt-3 font-salonDisplay text-4xl font-semibold tracking-tight text-salonInk md:text-5xl">
              Direkt hier anfragen —
              <br />
              kein Umweg über Google.
            </h2>
            <p className="mt-5 max-w-md text-salonInk/75">
              Formular ausfüllen, wir melden uns zum Bestätigen zurück. Oder
              sofort anrufen — das geht am schnellsten.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={telUrl()}
                className="block font-semibold text-salonInk hover:text-salonClay"
              >
                Sofort anrufen: {haarstudio.contact.phoneDisplay}
              </a>
              <p className="text-salonMute">
                {haarstudio.contact.address.full}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-salonLine bg-salonCream p-6 md:p-8"
            >
              <label className="block text-sm">
                <span className="text-salonMute">Name</span>
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-xl border border-salonLine bg-white px-4 py-3 text-salonInk outline-none focus:border-salonClay"
                  autoComplete="name"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="text-salonMute">Telefon (für Rückruf)</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="mt-1.5 w-full rounded-xl border border-salonLine bg-white px-4 py-3 text-salonInk outline-none focus:border-salonClay"
                  autoComplete="tel"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="text-salonMute">Gewünschte Leistung</span>
                <select
                  name="service"
                  className="mt-1.5 w-full rounded-xl border border-salonLine bg-white px-4 py-3 text-salonInk outline-none focus:border-salonClay"
                  defaultValue={haarstudio.bookingServiceOptions[0]}
                >
                  {haarstudio.bookingServiceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <label className="block text-sm">
                  <span className="text-salonMute">Wunschtag</span>
                  <input
                    name="date"
                    type="date"
                    className="mt-1.5 w-full rounded-xl border border-salonLine bg-white px-4 py-3 text-salonInk outline-none focus:border-salonClay"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-salonMute">Wunschzeit</span>
                  <input
                    name="time"
                    type="time"
                    className="mt-1.5 w-full rounded-xl border border-salonLine bg-white px-4 py-3 text-salonInk outline-none focus:border-salonClay"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="text-salonMute">Nachricht (optional)</span>
                <textarea
                  name="message"
                  rows={3}
                  className="mt-1.5 w-full resize-y rounded-xl border border-salonLine bg-white px-4 py-3 text-salonInk outline-none focus:border-salonClay"
                  placeholder="z. B. gewünschte Länge, Wunschfarbe …"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-salonClay py-3.5 text-sm font-bold text-salonCream transition hover:brightness-110"
              >
                Terminanfrage senden
              </button>
              {sent && (
                <p className="mt-3 text-center text-xs text-salonMute">
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
