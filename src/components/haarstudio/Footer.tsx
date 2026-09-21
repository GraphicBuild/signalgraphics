import Link from "next/link";
import { haarstudio, telUrl } from "@/content/haarstudio.config";

export function Footer() {
  return (
    <footer className="border-t border-salonLine bg-salonCream">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-salonDisplay text-2xl font-semibold text-salonInk">
            {haarstudio.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-salonMute">
            {haarstudio.category} in {haarstudio.contact.address.city}.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-salonMute">
            Kontakt
          </p>
          <ul className="space-y-2 text-salonInk/85">
            <li>{haarstudio.nap.name}</li>
            <li>
              <a href={telUrl()} className="hover:text-salonClay">
                {haarstudio.nap.phone}
              </a>
            </li>
            <li>{haarstudio.nap.address}</li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-salonMute">
            Rechtliches
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/preview/haarstudio/impressum/"
                className="hover:text-salonClay"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/preview/haarstudio/datenschutz/"
                className="hover:text-salonClay"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-salonLine px-5 py-5 text-center text-xs text-salonMute md:px-8">
        © {new Date().getFullYear()} {haarstudio.name} ·{" "}
        {haarstudio.contact.address.full}
      </div>
    </footer>
  );
}
