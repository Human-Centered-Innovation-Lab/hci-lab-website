
"use client";

import Image from "next/image";

import { useLocale, useTranslations } from "next-intl";
import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/navigation";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/research", key: "research" },
  { href: "/people", key: "people" },
  { href: "/publications", key: "publications" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(nextLocale: "en" | "ja") {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <header className="university-site-header">
      {/* Level 1: Kyoto University */}
      <div className="university-header-strip">
        <div className="container university-header-inner">
          <div
            className="kyoto-university-logo logo-placeholder"
            aria-label="Kyoto University logo placeholder"
          />

          <div className="university-header-language">
            <button
              type="button"
              className={locale === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
              aria-pressed={locale === "en"}
            >
              EN
            </button>

            <span aria-hidden="true">/</span>

            <button
              type="button"
              className={locale === "ja" ? "active" : ""}
              onClick={() => changeLanguage("ja")}
              aria-pressed={locale === "ja"}
            >
              JA
            </button>
          </div>
        </div>
      </div>

      {/* Level 2: HCI Lab identity */}
      <div className="hci-header-band">
        <div className="container hci-header-inner">
          <Link href="/" className="hci-header-brand">
            <div className="hci-header-logo" aria-hidden="true">
              {/* HCI Lab logo goes here */}
            </div>

            <div className="hci-header-text">
              <span className="hci-header-title">
                {locale === "ja"
                  ? "ヒューマン・センタード・イノベーション研究室"
                  : "Human-Centered Innovation Laboratory"}
              </span>

              <span className="hci-header-subtitle">
                HCI Lab
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Level 3: Navigation */}
      <div className="hci-nav-band">
        <nav
          className="container hci-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : ""}
                aria-current={active ? "page" : undefined}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
