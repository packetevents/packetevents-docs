import type {APIRoute} from "astro";

export const GET: APIRoute = (ctx) => {
    const content = `
User-agent: *
Allow: /
Sitemap: ${new URL("sitemap-index.xml", ctx.site)}
`.trim();
    return new Response(content, {status: 200});
};
