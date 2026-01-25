// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import {ion} from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.packetevents.com",
    output: "static",
    compressHTML: process.env.NODE_ENV === "production",
    trailingSlash: "ignore",

    image: {
        responsiveStyles: true,
    },

    integrations: [
        starlight({
            plugins: [
                ion(),
            ],
            customCss: [
                "./src/styles/custom.css",
            ],
            components: {
                Head: "./src/components/overrides/Head.astro",
            },
            credits: true,
            lastUpdated: true,
            editLink: {
                baseUrl: "https://github.com/packetevents/packetevents-docs/edit/main/",
            },
            head: [
                {
                    tag: "link",
                    attrs: {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-touch-icon.png",
                    },
                },
                {
                    tag: "link",
                    attrs: {
                        rel: "icon",
                        sizes: "32x32",
                        href: "/favicon-32x32.png",
                    },
                },
                {
                    tag: "link",
                    attrs: {
                        rel: "icon",
                        sizes: "16x16",
                        href: "/favicon-16x16.png",
                    },
                },
                {
                    tag: "link",
                    attrs: {
                        rel: "manifest",
                        href: "/site.webmanifest",
                    },
                },
            ],
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
                        "",
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
                        "processing-and-sending/advanced-packetevents-example-combining-our-knowledge",
                        "sending-and-simulating-packets",
                        "faq",
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
