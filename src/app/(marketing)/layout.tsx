import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sticky-cta-pad">
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </div>
  );
}
