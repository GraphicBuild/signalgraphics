import { Syne, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${display.variable} ${body.variable} min-h-screen bg-ink font-sans text-paper antialiased selection:bg-signal selection:text-ink sticky-cta-pad`}
    >
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </div>
  );
}
