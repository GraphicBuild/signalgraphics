import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { haarstudio } from "@/content/haarstudio.config";
import { PreviewBanner } from "@/components/haarstudio/PreviewBanner";
import { Header } from "@/components/haarstudio/Header";
import { Footer } from "@/components/haarstudio/Footer";
import { StickyCta } from "@/components/haarstudio/StickyCta";

const salonDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-salon-display",
  weight: ["500", "600"],
  style: ["normal"],
  display: "swap",
});

const salonSans = Manrope({
  subsets: ["latin"],
  variable: "--font-salon-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${haarstudio.name} — ${haarstudio.tagline}`,
  description: haarstudio.description,
  robots: { index: false, follow: false },
};

export default function HaarstudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`haarstudio-theme sticky-cta-pad ${salonDisplay.variable} ${salonSans.variable} bg-salonCream font-salonSans text-salonInk`}
    >
      <PreviewBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </div>
  );
}
