import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import { salonLoi } from "./salon-loi.config";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-salon-display",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-salon-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: salonLoi.seo.title,
  description: salonLoi.seo.description,
  robots: { index: false, follow: false },
};

export default function SalonLoiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-salon-body)]`}
      style={
        {
          "--sl-ink": "#14100d",
          "--sl-panel": "#1d1712",
          "--sl-paper": "#f6efe6",
          "--sl-mute": "#b6a89a",
          "--sl-accent": "#c9713f",
          "--sl-line": "rgba(246,239,230,0.12)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
