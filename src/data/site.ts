/**
 * Laboratory website data.
 * Replace all placeholder copy, names, and URLs before publication.
 */

export type Locale = "en" | "ja";

export type LocalizedText = {
  en: string;
  ja: string;
};

export type MemberCategory =
  | "faculty"
  | "researcher";




/* ----------------------------------------
   Laboratory Information
---------------------------------------- */

export const site = {
  name: {
    en: "Human-Centered Innovation Laboratory",
    ja: "人間中心イノベーション研究室",
  },

  university: {
    en: "Kyoto University",
    ja: "京都大学",
  },

  shortName: "HCI Lab",

  description: {
    en: "Researching people-centered approaches to technology, collaboration, and social innovation.",
    ja: "テクノロジー、協働、社会イノベーションにおける人間中心のアプローチを研究しています。",
  },

  email: "", // Set an approved public lab email address.

  url: "https://hci-lab-website.vercel.app/", // Replace with production domain.

  withYouUrl: "https://withyou-worldwide.com/", // Add the approved WithYou website URL.
};

/* ----------------------------------------
   Laboratory Members
---------------------------------------- */

export type Member = {
  id: string;
  name: string;
  nameJa?: string;
  category: MemberCategory;
  role: LocalizedText;
  affiliation?: LocalizedText;
  bio?: LocalizedText;
  researchInterests?: LocalizedText[];
  image?: string;
  email?: string;
  links?: {
    label: string;
    url: string;
  }[];
};

export const members: Member[] = [
  {
    id: "spring-han",
    name: "Spring H. Han",
    category: "faculty",

    role: {
      en: "Professor",
      ja: "教授",
    },

    affiliation: {
      en: "Graduate School of Management, Kyoto University",
      ja: "京都大学大学院工学研究科",
    },
    researchInterests: [
      {
        en: "Service Marketing",
        ja: "サービスマーケティング",
      },
      {
        en: "Hospitality Management",
        ja: "ホスピタリティ管理",
      },
    ],

    links: [],
  },
  {
    id: "nguyen-van-tung",
    name: "Nguyen Van Tung",
    category: "researcher",

    role: {
      en: "M2 Student",
      ja: "修士課程2年",
    },

    affiliation: {
      en: "Graduate School of Economics, Kyoto University",
      ja: "京都大学大学院経済学研究科",
    },

    links: [],
  },
  {
    id: "alessa-castillo",
    name: "Alessa Castillo",
    nameJa: "キャスティーオ・アレサ",
    category: "researcher",

    role: {
      en: "Research Student",
      ja: "研究学生",
    },

    affiliation: {
      en: "Graduate School of Engineering, Kyoto University",
      ja: "京都大学大学院工学研究科",
    },
    researchInterests: [
      {
        en: "Human-Computer Interaction",
        ja: "ヒューマンコンピュータインタラクション",
      },
      {
        en: "Crowding Patterns and Transportation Systems",
        ja: "混雑動態と交通システム",
      },
    ],

    links: [
      {"label": "LinkedIn", "url": "https://www.linkedin.com/in/alessa-castillo-6030a2235/"}
    ],
  },
];

/* ----------------------------------------
   Research Projects
---------------------------------------- */

export type Project = {
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  thumbnail?: string;
  more_info?: LocalizedText;
  href?: string;
  external?: boolean;
};

export const projects: Project[] = [
  {
    title: "Human Link",

    category: {
      en: "Research",
      ja: "研究",
    },

    description: {
      en: "Research on Human Link identified the coexistence of everyday support needs and willingness to help others. These findings informed our role-mobility approach, in which participants take on receiving, helping, and connecting roles.",
      ja: "ヒューマンリンクに関する研究では、日常生活における支援ニーズと他者を助けたいという意欲が共存していることが明らかになりました。これらの知見に基づき、参加者が支援を受ける役割、援助する役割、そして繋がりを築く役割の間を行き来する、役割移動型のアプローチを採用しました。",
    },

    more_info: {
      en: "The web prototype named <bold>WithYou</bold> is intended to facilitate individual matches, and measure whether a participant further acts in receiving, helping and connecting roles. It acts as an initial proof of concept involving approximately 30 participants provide a starting point for translating this potential into an organized service.",
      ja: "「WithYou」と名付けられたこのウェブ・プロトタイプは、個人間のマッチングを成立させることを目的としており、参加者がその後、受け取る側、支援する側、あるいはつなぎ役としてどのような行動をとるかを測定するものです。約30名の参加者を対象としたこの取り組みは、概念実証（PoC）の第一歩であり、この可能性を体系的なサービスへと発展させていくための出発点となります。"
    },

    thumbnail: "/images/with-you-logo.png",

    href: "https://withyou-worldwide.com/", // Add the approved WithYou website URL.

    external: true,
  },

  // {
  //   title: "Research Initiative",

  //   category: {
  //     en: "Research",
  //     ja: "研究",
  //   },

  //   description: {
  //     en: "Add an approved summary of another current or planned laboratory initiative.",
  //     ja: "現在進行中または計画中の研究プロジェクトについて、承認済みの概要を記載してください。",
  //   },
  // },
];

/* ----------------------------------------
   Publications
---------------------------------------- */

export type PublicationType =
  | "journal"
  | "conference"
  | "book"
  | "chapter"
  | "thesis"
  | "preprint"
  | "report";

export type Publication = {
  id: string;
  year: number;
  type: PublicationType;

  title: string;
  authors: string[];

  venue?: string;
  volume?: string;
  issue?: string;
  pages?: string;

  doi?: string;
  url?: string;
  pdf?: string;

  description?: {
    en: string;
    ja: string;
  };
};

export const publications: Publication[] = [
  {
    id: "sample-2026-01",
    year: 2026,
    type: "conference",
    title: "Example 1",
    authors: [
      "Author A",
      "Author B",
      "Author C",
    ],
    venue: "Example International Conference",
    pages: "1–8",
    doi: "",
    url: "",
    pdf: "",
  },
  {
    id: "sample-2025-01",
    year: 2025,
    type: "journal",
    title: "Example 2",
    authors: [
      "Author A",
      "Author B",
    ],
    venue: "Example Journal of Human-Centered Systems",
    volume: "12",
    issue: "3",
    pages: "45–60",
    doi: "",
    url: "",
  },
];

/* =========================================
   HOMEPAGE CONTENT
========================================= */


/* Hero photographs */

export const heroImages: {
  src: string | null;
  alt: LocalizedText;
  caption: LocalizedText;
}[] = [
  {
    src: null,
    alt: {
      en: "Laboratory research activities",
      ja: "研究室の研究活動",
    },
    caption: {
      en: "Research Activities",
      ja: "研究と共同活動",
    },
  },
  {
    src: null,
    alt: {
      en: "Community engagement activities",
      ja: "コミュニティ活動",
    },
    caption: {
      en: "Workshops",
      ja: "ワークショップ",
    },
  },
  {
    src: null,
    alt: {
      en: "Human-centered research projects",
      ja: "人間中心の研究プロジェクト",
    },
    caption: {
      en: "Technology",
      ja: "研究プロジェクト",
    },
  },
];

/* News and announcements */

export const news: {
  date: string;
  category: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  tone?: "notice" | "research" | "award" | "event";
  href?: string;
}[] = [
  {
    date: "2026-11-18",
    category: {
      en: "Research",
      ja: "研究",
    },
    title: {
      en: "WithYou Community Support Project",
      ja: "WithYouコミュニティ支援プロジェクト",
    },
    body: {
      en: "WithYou explores how digital services can connect students through everyday support and mutual assistance.",
      ja: "WithYouは、デジタルサービスを通じて学生同士の日常的な支援と相互扶助を促進する仕組みを研究しています。",
    },
    tone: "research",
  },
];

/* Laboratory newsletter */

export const newsletter: {
  issue: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  topics: LocalizedText[];
  href?: string;
} = {
  issue: {
    en: "Laboratory Newsletter",
    ja: "研究室ニュースレター",
  },
  title: {
    en: "HCI Lab Notes",
    ja: "HCI Labだより",
  },
  summary: {
    en: "Research updates, community initiatives, and developments from the Human-Centered Innovation Laboratory.",
    ja: "ヒューマン・センタード・イノベーション研究室の研究成果やコミュニティ活動、最新の取り組みを紹介します。",
  },
  topics: [
    {
      en: "Human Link Research",
      ja: "Human Link研究",
    },
    {
      en: "WithYou Project",
      ja: "WithYouプロジェクト",
    },
    {
      en: "Community Participation",
      ja: "コミュニティへの参加",
    },
  ],
};

/* Laboratory activities */

export const activities: {
  date: string;
  category: LocalizedText;
  title: LocalizedText;
  image: string | null;
  tone?: "notice" | "research" | "award" | "event";
}[] = [
  {
    date: "2026-11-18",
    category: {
      en: "Research",
      ja: "研究",
    },
    title: {
      en: "Human Link Research",
      ja: "Human Link研究",
    },
    image: null,
    tone: "research",
  },
  {
    date: "2026-11-18",
    category: {
      en: "Project",
      ja: "プロジェクト",
    },
    title: {
      en: "WithYou Platform Development",
      ja: "WithYouプラットフォーム開発",
    },
    image: "/images/with_you_app_screenshot.png",
    tone: "notice",
  },
  {
    date: "2026-11-18",
    category: {
      en: "Community",
      ja: "コミュニティ",
    },
    title: {
      en: "Community Engagement and Mutual Support",
      ja: "コミュニティ参加と相互支援",
    },
    image: null,
    tone: "event",
  },
];
