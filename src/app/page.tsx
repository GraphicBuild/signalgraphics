import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Process />
      <Pricing />
      <Contact />
    </>
  );
}
