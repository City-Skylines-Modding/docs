import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "City Skylines Docs",
  tagline: "City Skylines Documentation for students",
  favicon: "img/favicon.ico",
  url: "https://City-Skylines-Modding.github.io",
  baseUrl: "/docs",
  organizationName: "City-Skylines-Modding",
  projectName: "docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/City-Skylines-Modding/docs/tree/main",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    image: "img/docusaurus-social-card.jpg",

    navbar: {
      title: "City Skylines Docs",
      style: "dark",
      logo: {
        alt: "The City Skylines Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "https://github.com/City-Skylines-Modding",
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
            {
              label: "Tutorial",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} City Skylines Modding. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      appId: "",
      apiKey: "",
      indexName: "City-Skylines-Moddingio",
      contextualSearch: false,
      searchParameters: {},
    },

    webpack: {
      jsLoader: (isServer: boolean) => ({
        loader: require.resolve("swc-loader"),
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },

            target: "es2020",
          },

          module: {
            type: isServer ? "commonjs" : "esmodule",
          },
        },
      }),
    },
  } satisfies Preset.ThemeConfig,
}

export default config
