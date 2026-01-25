import type {APIRoute} from "astro";
import {getCollection} from "astro:content";

// https://developers.cloudflare.com/pages/configuration/redirects/
const redirectsPath = "_redirects";

export const getStaticPaths = () => {
    // workaround to allow dynamic creation of cloudflare redirects as astro
    // seems to ignore all files prefixed with an underscore
    return [{params: {redirects: redirectsPath}}];
};

export const GET: APIRoute = async (ctx) => {
    if (ctx.params.redirects !== redirectsPath) {
        return new Response(null, {status: 404});
    }

    const redirects = (await getCollection("redirects"))
        .map(redirect => `/${redirect.id} ${redirect.data} 301`)
        .join("\n");
    return new Response(redirects, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
};
