import { haarmonie11 } from "@/content/clients/haarmonie-11";
import { ClientHero } from "@/components/preview/ClientHero";
import { ClientReviews } from "@/components/preview/ClientReviews";
import { ClientServices } from "@/components/preview/ClientServices";
import { ClientAbout } from "@/components/preview/ClientAbout";
import { ClientGallery } from "@/components/preview/ClientGallery";
import { ClientHours } from "@/components/preview/ClientHours";
import { ClientContact } from "@/components/preview/ClientContact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: haarmonie11.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: haarmonie11.nap.street,
    addressLocality: "Mannheim",
    postalCode: "68159",
    addressCountry: "DE",
  },
  telephone: haarmonie11.nap.phoneTel,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: haarmonie11.reviews.rating,
    reviewCount: haarmonie11.reviews.count,
  },
};

export default function Haarmonie11Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientHero client={haarmonie11} />
      <ClientReviews client={haarmonie11} />
      <ClientServices client={haarmonie11} />
      <ClientAbout client={haarmonie11} />
      <ClientGallery client={haarmonie11} />
      <ClientHours client={haarmonie11} />
      <ClientContact client={haarmonie11} />
    </>
  );
}
