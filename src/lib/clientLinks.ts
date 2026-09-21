import type { ClientSite } from "@/content/clients/types";

export function clientTelUrl(client: ClientSite) {
  return `tel:${client.nap.phoneTel}`;
}

export function clientWhatsappUrl(client: ClientSite, text?: string) {
  const message = text ?? client.whatsappDefaultText;
  return `https://wa.me/${client.nap.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function clientMapsUrl(client: ClientSite) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(client.mapsQuery)}`;
}
