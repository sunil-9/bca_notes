// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DDS Notes",
  tagline: "DDS notes for BCA students",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dds.com.np",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sunil-9", // Usually your GitHub org/user name.
  projectName: "bca_notes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sunil-9/bca_notes/tree/main/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        { name: "twitter:card", content: "img/social-card.jpg" },
      ],
      headTags: [
        // Declare a <link> preconnect tag
        // {
        //   tagName: 'link',
        //   attributes: {
        //     rel: 'preconnect',
        //     href: 'https://example.com',
        //   },
        // },
        // Declare some json-ld structured data
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

      // Replace with your project's social card
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
          { to: "/plt/syllabus", label: "PLT", position: "left" },
          { to: "/madt", label: "MADT", position: "left" },
          { to: "/linux/syllabus", label: "LINUX", position: "left" },
          { to: "/workshop/syllabus", label: "WORKSHOP", position: "left" },
          { to: "/web2", label: "WEB TECH 2", position: "left" },
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
                to: "/plt/syllabus",
              },
              {
                label: "MADT",
                to: "/madt",
              },
              {
                label: "LINUX",
                to: "/linux/syllabus",
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
        additionalLanguages: ["kotlin", "java"],
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
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
    // [
    //   '@docusaurus/plugin-sitemap',
    //   {
    //     changefreq: 'weekly',
    //     priority: 0.5,
    //     ignorePatterns: ['/tags/**'],
    //     filename: 'sitemap.xml',
    //   },
    // ],
  ],
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4987525106509640",
      async: true,
      crossorigin: "anonymous",
    },
  ],
};

export default config;
