// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://packetevents-docs.pages.dev",
    output: "static",
    compressHTML: process.env.NODE_ENV === "production",
    trailingSlash: "ignore",

    integrations: [
        starlight({
            components: {
                Head: "./src/components/Head.astro",
            },
            favicon: "./favicon.ico",
            title: "packetevents",
            social: [
                {icon: "github", label: "GitHub", href: "https://github.com/retrooper/packetevents"},
                {icon: "discord", label: "Discord", href: "https://discord.com/invite/gtuVwM2ZP2"},
            ],
            logo: {
                dark: "./src/assets/logo_dark.webp",
                light: "./src/assets/logo_bright.webp",
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: "Example Guide", slug: "guides/example"},
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: {directory: "reference"},
                },
            ],
        }),
    ],

    vite: {
        plugins: [tailwindcss({
            optimize: true,
        })],
    },
});