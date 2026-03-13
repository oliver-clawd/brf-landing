export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect root → /blast-radius-framework/
    if (url.pathname === '/' || url.pathname === '') {
      return Response.redirect(url.origin + '/blast-radius-framework/', 301);
    }

    // Strip /blast-radius-framework prefix so ASSETS can serve from dist/
    url.pathname = url.pathname.replace(/^\/blast-radius-framework/, '') || '/';
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};
