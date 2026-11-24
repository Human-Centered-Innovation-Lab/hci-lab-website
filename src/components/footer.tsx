import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import type { Locale } from "@/data/site";

import { Link } from "@/i18n/navigation";
import { site } from "@/data/site";

export async function Footer() {
  const t = await getTranslations("Footer");
  const locale = (await getLocale()) as Locale;

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Laboratory Information */}
        <div>
          <Link href="/" className="footer-brand">
            {site.name[locale]}
          </Link>

          <div className="footer-institution-logos">
            {/* Kyoto University logo placeholder */}
            <div
              className="footer-institution-logo logo-placeholder"
              style={{ width: 180, height: 55 }}
              aria-label="Kyoto University logo placeholder"
            />

            {/* Graduate School of Management logo placeholder */}
            <div
              className="footer-institution-logo logo-placeholder"
              style={{ width: 140, height: 55 }}
              aria-label="Graduate School of Management logo placeholder"
            />
          </div>

        </div>

        {/* Explore */}
        <nav aria-label="Explore">
          <strong>{t("explore")}</strong>

          <Link href="/">
            {t("home")}
          </Link>

          <Link href="/about">
            {t("about")}
          </Link>

          <Link href="/people">
            {t("ourPeople")}
          </Link>
        </nav>

        {/* Research */}
        <nav aria-label="Research">
          <strong>{t("research")}</strong>

          <Link href="/research">
            {t("researchProjects")}
          </Link>

          <Link href="/publications">
            {t("publications")}
          </Link>

          {site.withYouUrl && (
            <a
              href={site.withYouUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WithYou ↗
            </a>
          )}
        </nav>

        {/* Connect */}
        <nav aria-label="Connect">
          <strong>{t("connect")}</strong>

          <Link href="/contact">
            {t("contact")}
          </Link>
        </nav>

      </div>

      {/* Copyright */}
      <div className="container footer-bottom">
        © {new Date().getFullYear()} {site.name[locale]}.{" "}
        {t("copyrightNotice")}
      </div>
    </footer>
  );
}