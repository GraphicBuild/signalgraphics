import { DraftBanner } from "./_components/DraftBanner";
import { Hero } from "./_components/Hero";
import { Services } from "./_components/Services";
import { About } from "./_components/About";
import { Visit } from "./_components/Visit";
import { StickyBar } from "./_components/StickyBar";
import { PreviewFooter } from "./_components/PreviewFooter";

export default function SalonLoiPreviewPage() {
  return (
    <>
      <DraftBanner />
      <Hero />
      <Services />
      <About />
      <Visit />
      <PreviewFooter />
      <StickyBar />
    </>
  );
}
