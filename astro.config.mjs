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

    image: {
        responsiveStyles: true,
    },

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
                    label: "Introduction",
                    items: [
                        "introduction",
                        "introduction/prerequisites",
                        "introduction/development-setup",
                        "introduction/the-problem-of-bundling",
                        "introduction/a-developers-introduction",
                    ],
                },
                {
                    label: "Setup when Bundling",
                    items: [
                        "setup-when-bundling/a-beginners-guide-to-bundling",
                        "setup-when-bundling/master",
                        "setup-when-bundling/tweaking-packetevents",
                    ],
                },
                {
                    label: "Processing and Sending",
                    items: [
                        "processing-and-sending/master",
                    ],
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
