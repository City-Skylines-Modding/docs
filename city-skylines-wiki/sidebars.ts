import type { SidebarsConfig } from "@docusaurus/plugin-content-docs"

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Organization",
      items: [{ type: "autogenerated", dirName: "guidelines" }],
    },
    {
      type: "category",
      label: "Gameplay",
      items: ["game_information/gi-001", "game_information/gi-002"],
    },
    {
      type: "category",
      label: "Guides",
      items: [{ type: "autogenerated", dirName: "guides" }],
    },
    {
      type: "category",
      label: "Modding",
      items: [
        {
          type: "category",
          label: "Development",
          items: [
            "development/environment",
            {
              type: "category",
              label: "Standards",
              items: [{ type: "autogenerated", dirName: "standards" }],
            },
            {
              type: "category",
              label: "Templates",
              items: [{ type: "autogenerated", dirName: "templates" }],
            },
          ],
        },
        {
          type: "category",
          label: "Mod Basics",
          items: ["mods/mods-001", "mods/mods-002"],
        },
      ],
    },
  ],
}

export default sidebars