import type { Config } from "@docusaurus/types";

import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "DDS Notes",

  tagline: "BCA Notes",

  favicon: "img/favicon.ico",

  url: "https://dds.com.np",

  baseUrl: "/",

  organizationName: "sunil-9",

  projectName: "bca_notes",

  onBrokenLinks: "throw",

  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",

    locales: ["en"],
  },

  presets: [
    [
      "classic",

      {
        docs: {
          sidebarPath: "./sidebars.ts",

          editUrl: "https://github.com/sunil-9/bca_notes/tree/main/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } as any,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },

    metadata: [
      {
        name: "keywords",

        content:
          "BCA, Bachelor of computer application, PU,Pokhara University, DDS Notes, DDS BCA Notes",
      },

      { name: "twitter:card", content: "@site/static/img/social-card.png" },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "DDS Notes - PU BCA Study Materials" },
      {
        name: "og:description",
        content:
          "Comprehensive study materials and notes for BCA students at Pokhara University",
      },
      { name: "og:image", content: "@site/static/img/social-card.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "@site/static/img/social-card.png",
      },
      { name: "twitter:title", content: "DDS Notes - PU BCA Study Materials" },
      {
        name: "twitter:description",
        content:
          "Comprehensive study materials and notes for BCA students at Pokhara University",
      },
    ],

    headTags: [
      {
        tagName: "script",

        attributes: {
          type: "application/ld+json",
        },

        innerHTML: JSON.stringify({
          "@context": "https://schema.org/",

          "@type": "Organization",

          name: "DDS Notes",

          url: "https://dds.com.np/",

          logo: "https://dds.com.np/img/logo.svg",
        }),
      },
    ],

    image: "img/social-card.jpg",

    navbar: {
      logo: {
        alt: "DDS Logo",

        src: "img/logo.svg",
      },

      items: [
        {
          type: "docSidebar",

          sidebarId: "tutorialSidebar",

          position: "left",

          label: "ALL",
        },

        { to: "/docs/plt/syllabus", label: "PLT", position: "left" },

        { to: "/docs/madt", label: "MADT", position: "left" },

        { to: "/docs/linux/syllabus", label: "LINUX", position: "left" },

        { to: "/docs/workshop/syllabus", label: "WORKSHOP", position: "left" },

        { to: "/docs/webii", label: "WEB TECH II", position: "left" },

        {
          href: "https://github.com/sunil-9/bca_notes/",

          label: "GitHub",

          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            // {
            //   label: 'Tutorial',
            //   to: '/intro',
            // },
            {
              label: "PLT",
              to: "/docs/plt/syllabus",
            },
            {
              label: "MADT",
              to: "/docs/madt",
            },
            {
              label: "LINUX",
              to: "/docs/linux/syllabus",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/8008979/sunil-sapkota",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/sunilsapkota09",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Portfolio",
              href: "https://sapkotasunil.com.np/",
            },
            {
              label: "GitHub",
              href: "https://github.com/sunil-9/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DDS Notes, for PU BCA students.`,
    },
    prism: {
      theme: prismThemes.github,

      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "1VUXQL0700",

      // Public API key: it is safe to commit it
      // apiKey: "7c12878cb34afc914d193bd47029254b", //from website
      apiKey: "5300d8545a649134bfd771cdff579db7", //from email

      indexName: "dds-com",
      // placeholder: "Ask me",

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: "search",

      //... other Algolia params
    } as any,
  },
};

export default config;
