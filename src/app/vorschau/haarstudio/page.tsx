import { haarstudio } from "@/content/clients/haarstudio";
import { ClientHero } from "@/components/preview/ClientHero";
import { ClientBooking } from "@/components/preview/ClientBooking";
import { ClientServices } from "@/components/preview/ClientServices";
import { ClientReviews } from "@/components/preview/ClientReviews";
import { ClientAbout } from "@/components/preview/ClientAbout";
import { ClientGallery } from "@/components/preview/ClientGallery";
import { ClientHours } from "@/components/preview/ClientHours";
import { ClientContact } from "@/components/preview/ClientContact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: haarstudio.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: haarstudio.nap.street,
    addressLocality: "Mannheim",
    postalCode: "68165",
    addressCountry: "DE",
  },
  telephone: haarstudio.nap.phoneTel,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: haarstudio.reviews.rating,
    reviewCount: haarstudio.reviews.count,
  },
};

export default function HaarstudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientHero client={haarstudio} />
      <ClientBooking client={haarstudio} />
      <ClientServices client={haarstudio} />
      <ClientReviews client={haarstudio} />
      <ClientAbout client={haarstudio} />
      <ClientGallery client={haarstudio} />
      <ClientHours client={haarstudio} />
      <ClientContact client={haarstudio} />
    </>
  );
}
