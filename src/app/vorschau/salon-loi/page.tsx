import { salonLoi } from "@/content/clients/salon-loi";
import { ClientHero } from "@/components/preview/ClientHero";
import { ClientServices } from "@/components/preview/ClientServices";
import { ClientAbout } from "@/components/preview/ClientAbout";
import { ClientGallery } from "@/components/preview/ClientGallery";
import { ClientHours } from "@/components/preview/ClientHours";
import { ClientContact } from "@/components/preview/ClientContact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: salonLoi.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: salonLoi.nap.street,
    addressLocality: "Mannheim",
    postalCode: "68167",
    addressCountry: "DE",
  },
  telephone: salonLoi.nap.phoneTel,
};

export default function SalonLoiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientHero client={salonLoi} />
      <ClientServices client={salonLoi} />
      <ClientAbout client={salonLoi} />
      <ClientGallery client={salonLoi} />
      <ClientHours client={salonLoi} />
      <ClientContact client={salonLoi} />
    </>
  );
}
