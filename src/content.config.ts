import {defineCollection} from "astro:content";
import {file} from "astro/loaders";
import {docsLoader} from "@astrojs/starlight/loaders";
import {docsSchema} from "@astrojs/starlight/schema";
import {z} from "zod";

export const collections = {
    docs: defineCollection({
        loader: docsLoader(),
        schema: docsSchema(),
    }),
    redirects: defineCollection({
        loader: file("src/content/redirects.yml"),
        schema: z.string(),
    }),
};
