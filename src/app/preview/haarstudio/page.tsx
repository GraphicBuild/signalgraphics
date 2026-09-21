import { Hero } from "@/components/haarstudio/Hero";
import { Booking } from "@/components/haarstudio/Booking";
import { Services } from "@/components/haarstudio/Services";
import { Reviews } from "@/components/haarstudio/Reviews";
import { Gallery } from "@/components/haarstudio/Gallery";
import { About } from "@/components/haarstudio/About";
import { Location } from "@/components/haarstudio/Location";

export default function HaarstudioPreviewPage() {
  return (
    <>
      <Hero />
      <Booking />
      <Services />
      <Reviews />
      <Gallery />
      <About />
      <Location />
    </>
  );
}
