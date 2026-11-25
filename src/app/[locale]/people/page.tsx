
import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, UserRound } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import {
  members,
  type Locale,
  type MemberCategory,
} from "@/data/site";
import { PageIntro } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "People",
  });

  return {
    title: t("metadataTitle"),
    description: t("introDescription"),
  };
}

const categories: MemberCategory[] = [
  "faculty",
  "researcher",
];

export default async function People() {
  const t = await getTranslations("People");
  const locale = (await getLocale()) as Locale;

  const groups = categories
    .map((category) => ({
      category,
      members: members.filter(
        (member) => member.category === category
      ),
    }))
    .filter((group) => group.members.length > 0);

  return (
    <>
      <PageIntro
        eyebrow={t("introEyebrow")}
        title={t("introTitle")}
        description={t("introDescription")}
      />

      <section className="people-directory container">
        <nav className="people-index">
          <span>{t("directoryLabel")}</span>

          <div className="people-index-links">
            {groups.map((group) => (
              <a
                key={group.category}
                href={`#${group.category}`}
              >
                {t(`categories.${group.category}`)}
              </a>
            ))}
          </div>
        </nav>

        {groups.map((group) => (
          <section
            className="people-group"
            id={group.category}
            key={group.category}
          >
            <div className="people-group-heading">
              <h2>
                {t(`categories.${group.category}`)}
              </h2>
              <span>{group.members.length}</span>
            </div>

            <div className="people-list">
              {group.members.map((member) => (
                <article
                  className="people-entry"
                  key={member.id}
                >
                  <div className="people-entry-photo">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={t("portraitAlt", {
                          name: member.name,
                        })}
                        width={150}
                        height={180}
                      />
                    ) : (
                      <UserRound
                        size={42}
                        strokeWidth={1}
                      />
                    )}
                  </div>

                  <div className="people-entry-info">
                    <h3>
                      {locale === "ja" && member.nameJa
                        ? member.nameJa
                        : member.name}
                    </h3>

                    <p className="people-position">
                      {member.role[locale]}
                    </p>

                    {member.affiliation && (
                      <p className="people-affiliation">
                        {member.affiliation[locale]}
                      </p>
                    )}

                    {member.bio?.[locale] && (
                      <p className="people-bio">
                        {member.bio[locale]}
                      </p>
                    )}

                    {member.researchInterests?.length ? (
                      <div className="people-research">
                        <strong>
                          {t("researchInterests")}
                        </strong>
                        <p>
                          {member.researchInterests
                            .map(
                              (interest) =>
                                interest[locale]
                            )
                            .join(", ")}
                        </p>
                      </div>
                    ) : null}

                    {member.email && (
                      <p className="people-email">
                        <strong>{t("emailLabel")}: </strong>
                        <a href={`mailto:${member.email}`}>
                          {member.email}
                        </a>
                      </p>
                    )}

                    {member.links &&
                      member.links.length > 0 && (
                        <div className="people-links">
                          {member.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                              <ExternalLink size={13} />
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  );
}
