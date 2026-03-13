// Strips /blast-radius-framework prefix so Cloudflare Workers Assets
// can serve files from dist/ with their normal base-/ paths.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.pathname = url.pathname.replace(/^\/blast-radius-framework/, '') || '/';
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};
