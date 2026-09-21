import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Fraunces, Work_Sans } from "next/font/google";
import { salonLoi } from "@/content/clients/salon-loi";
import { PreviewBanner } from "@/components/preview/PreviewBanner";
import { ClientFooter } from "@/components/preview/ClientFooter";
import { ClientStickyCta } from "@/components/preview/ClientStickyCta";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-client-display",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-client-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const client = salonLoi;

export const metadata: Metadata = {
  title: `${client.name} — ${client.category} ${client.neighborhood}`,
  description: client.promise,
  robots: { index: false, follow: false },
};

export default function SalonLoiLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeVars = {
    "--bg": client.theme.bg,
    "--ink": client.theme.ink,
    "--mute": client.theme.mute,
    "--accent": client.theme.accent,
    "--accent-soft": client.theme.accentSoft,
    "--line": client.theme.line,
  } as CSSProperties;

  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-[var(--bg)] font-client-body text-[var(--ink)] antialiased selection:bg-[var(--accent)] selection:text-[var(--bg)] sticky-cta-pad [&_.font-client-display]:italic`}
      style={themeVars}
    >
      <PreviewBanner name={client.name} />
      <main>{children}</main>
      <ClientFooter client={client} />
      <ClientStickyCta client={client} />
    </div>
  );
}
