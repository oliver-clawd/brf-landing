export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect root → /blast-radius-framework/
    if (url.pathname === '/' || url.pathname === '') {
      return Response.redirect(url.origin + '/blast-radius-framework/', 301);
    }

    // Handle contact form POST
    if (url.pathname === '/blast-radius-framework/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    // Strip /blast-radius-framework prefix so ASSETS can serve from dist/
    url.pathname = url.pathname.replace(/^\/blast-radius-framework/, '') || '/';
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};

async function handleContact(request, env) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const { name, email, scope, message } = await request.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), { status: 400, headers: corsHeaders });
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      scope ? `AWS scope: ${scope}` : null,
      message ? `\nMessage:\n${message}` : null,
    ].filter(Boolean).join('\n');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'BRF Contact Form <noreply@secure-stack-consulting.com>',
        to: ['oliver.clawd@secure-stack-consulting.com'],
        reply_to: email,
        subject: `BRF Inquiry — ${name}`,
        text: body,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ error: 'Failed to send. Please email us directly.' }), { status: 500, headers: corsHeaders });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: corsHeaders });

  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: 'Unexpected error.' }), { status: 500, headers: corsHeaders });
  }
}
