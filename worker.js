// ─── Security headers added to all responses ────────────────────────────────
// CSP allows inline scripts (required for React + JSON-LD) and self-hosted assets.
// frame-ancestors 'none' prevents clickjacking.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",   // React + JSON-LD inline scripts
    "style-src 'self' 'unsafe-inline'",    // Inline styles from React
    "img-src 'self' data: https:",         // og-image + SVGs
    "font-src 'self'",
    "connect-src 'self' https://api.resend.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
};

function addSecurityHeaders(response) {
  const res = new Response(response.body, response);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    res.headers.set(key, value);
  }
  return res;
}

// ─── Simple in-memory rate limiter for contact form ─────────────────────────
// Workers are stateless per-isolate so this resets on cold start, but still
// provides meaningful protection against burst abuse within a single isolate.
// For persistent rate limiting, replace with Cloudflare KV or Durable Objects.
const contactRateLimit = new Map(); // ip → { count, resetAt }
const RATE_LIMIT_MAX = 5;           // max submissions per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip) {
  const now = Date.now();
  const entry = contactRateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    contactRateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// ─── Bot user agent detection ────────────────────────────────────────────────
const BOT_PATTERNS = [
  /GPTBot/i,
  /ChatGPT-User/i,
  /ClaudeBot/i,
  /Claude-Web/i,
  /anthropic-ai/i,
  /PerplexityBot/i,
  /Google-Extended/i,
  /Googlebot/i,
  /Bingbot/i,
  /Amazonbot/i,
  /meta-externalagent/i,
  /facebookexternalhit/i,
  /Applebot/i,
  /Twitterbot/i,
  /LinkedInBot/i,
  /Slackbot/i,
  /Discordbot/i,
  /ia_archiver/i,
];

function isBot(userAgent) {
  if (!userAgent) return false;
  return BOT_PATTERNS.some(p => p.test(userAgent));
}

// ─── Static pre-rendered HTML for bots ──────────────────────────────────────
const BOT_HTML = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Secure Stack Consulting — Blast Radius Framework. Map every propagation path, score your containment strength, and compress your AWS attack surface." />
  <title>Blast Radius Framework — Secure Stack Consulting</title>
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://secure-stack-consulting.com/blast-radius-framework/" />
  <meta property="og:title" content="Blast Radius Framework — Secure Stack Consulting" />
  <meta property="og:description" content="A structured AWS security assessment that models every propagation path, scores your containment strength, and gives you a sequenced plan to compress exposure." />
  <meta property="og:image" content="https://secure-stack-consulting.com/blast-radius-framework/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://secure-stack-consulting.com/blast-radius-framework/" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://secure-stack-consulting.com/#organization",
        "name": "Secure Stack Consulting",
        "url": "https://secure-stack-consulting.com",
        "description": "Cloud security consulting focused on blast radius reduction, IAM architecture, and AWS security posture.",
        "email": "oliver.clawd@secure-stack-consulting.com"
      },
      {
        "@type": "Service",
        "@id": "https://secure-stack-consulting.com/blast-radius-framework/#service",
        "name": "Blast Radius Framework (BRF)",
        "url": "https://secure-stack-consulting.com/blast-radius-framework/",
        "provider": { "@id": "https://secure-stack-consulting.com/#organization" },
        "description": "A structured AWS security assessment that maps every propagation path from initial compromise to crown jewel impact. BRF scores your Containment Strength Index across five domains and delivers a sequenced 60-day remediation plan.",
        "serviceType": "AWS Cloud Security Assessment",
        "offers": [
          { "@type": "Offer", "name": "Snapshot Assessment", "price": "3500", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Full Assessment", "price": "8500", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Continuous Coverage", "price": "2500", "priceCurrency": "USD" }
        ]
      }
    ]
  }
  <\/script>
</head>
<body>
  <header>
    <a href="/blast-radius-framework/">Secure Stack Consulting</a>
    <nav>
      <a href="#framework">Framework</a>
      <a href="#report">Sample Report</a>
      <a href="#deliverables">Deliverables</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <main>
    <section>
      <p>Blast Radius Framework™</p>
      <h1>Know your blast radius.</h1>
      <p>
        A structured AWS security assessment that models every propagation path,
        scores your containment strength, and gives you a sequenced plan to compress
        exposure — before an incident does it for you.
      </p>
      <a href="#report">View Sample Report</a>
      <a href="#contact">Schedule an Assessment</a>
    </section>

    <section>
      <h2>Security tools find vulnerabilities. BRF maps their blast radius.</h2>
      <p>
        Your CSPM flags misconfigurations. Your pentest finds entry points.
        What neither answers: how far can an attacker move before you stop them?
        BRF models the full propagation graph — from initial compromise to org-admin —
        so you know exactly what's at risk, how fast, and what actually stops the spread.
      </p>
      <div>
        <div>
          <strong>Without BRF</strong>
          <ul>
            <li>Long list of findings — no propagation context</li>
            <li>Unknown blast radius per vulnerability</li>
            <li>No path from entry point to crown jewel impact</li>
            <li>Remediation ordered by CVSS, not actual risk</li>
            <li>No containment score to measure improvement</li>
          </ul>
        </div>
        <div>
          <strong>With BRF</strong>
          <ul>
            <li>Every blast path scored and ranked by severity</li>
            <li>Propagation chain from compromise to impact, modeled</li>
            <li>CSI score: measurable containment across 5 domains</li>
            <li>Interventions ranked by impact-to-effort ratio</li>
            <li>60-day sequenced plan, tied to specific blast paths</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="framework">
      <h2>Four phases. One complete picture.</h2>
      <ol>
        <li>
          <h3>01 — Structural Surface Mapping</h3>
          <p>Map every trust relationship, entry class, and privilege boundary in your account. Cross-account trust, environment separation, SAML federation, and CI/CD access chains — fully enumerated and risk-scored.</p>
        </li>
        <li>
          <h3>02 — Propagation Modeling</h3>
          <p>Score and rank every viable blast path from each entry class. Each path shows the full propagation chain, a BPSS severity score, hops-to-admin metric, and linked evidence.</p>
        </li>
        <li>
          <h3>03 — Containment Strength Evaluation</h3>
          <p>Quantify your ability to stop propagation across five domains. The Containment Strength Index (CSI) gives you a single score — and a breakdown that shows exactly where to invest.</p>
        </li>
        <li>
          <h3>04 — Risk Compression Plan</h3>
          <p>Interventions ranked by impact-to-effort ratio, not arbitrary priority. A sequenced 60-day remediation plan, tied to specific blast paths, that reduces the most risk for the least work.</p>
        </li>
      </ol>
    </section>

    <section id="deliverables">
      <h2>One engagement. Six deliverables.</h2>
      <ul>
        <li><strong>Blast Path Register</strong> — 20+ propagation paths, each scored by severity band and entry class. Every path links to evidence, affected resources, and the interventions that address it.</li>
        <li><strong>Containment Strength Index</strong> — A 0–100 score across five domains: Identity, Network, Data, Compute, and Control. Shows where your containment is holding and where it breaks down.</li>
        <li><strong>Ranked Intervention Matrix</strong> — Every control ranked by impact-to-effort ratio, with dependency chains and projected score impact.</li>
        <li><strong>60-Day Remediation Sequence</strong> — A week-by-week plan tied to specific blast paths and interventions.</li>
        <li><strong>Topology &amp; Trust Map</strong> — Graph of every node, trust relationship, and privilege boundary.</li>
        <li><strong>Evidence Package</strong> — Every finding backed by AWS API data — IAM GetRolePolicy, CloudTrail AssumeRole events, VPC flow logs. Hash-verified and timestamped.</li>
      </ul>
    </section>

    <section id="contact">
      <h2>Ready to measure your blast radius?</h2>
      <p>A BRF engagement typically runs 2–3 weeks for a single AWS account. You get the interactive report, evidence package, and a working session to walk through findings and priorities.</p>
      <p>Contact: <a href="mailto:oliver.clawd@secure-stack-consulting.com">oliver.clawd@secure-stack-consulting.com</a></p>
    </section>
  </main>
  <footer>
    <p>© Secure Stack Consulting. BLAST RADIUS FRAMEWORK™</p>
    <a href="mailto:oliver.clawd@secure-stack-consulting.com">Email us</a>
  </footer>
</body>
</html>`;

// ─── Main handler ────────────────────────────────────────────────────────────
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve robots.txt directly — allows all bots, no origin needed
    if (url.pathname === '/robots.txt') {
      return addSecurityHeaders(new Response(
        'User-agent: *\nAllow: /\n\nSitemap: https://secure-stack-consulting.com/blast-radius-framework/sitemap.xml\n',
        { status: 200, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' } }
      ));
    }

    // Redirect root → /blast-radius-framework/
    if (url.pathname === '/' || url.pathname === '') {
      return Response.redirect(url.origin + '/blast-radius-framework/', 301);
    }

    // Handle contact form POST
    if (url.pathname === '/blast-radius-framework/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    // Serve pre-rendered HTML to bots hitting the main page
    const userAgent = request.headers.get('User-Agent') || '';
    const isMainPage = url.pathname === '/blast-radius-framework' || url.pathname === '/blast-radius-framework/';

    if (isBot(userAgent) && isMainPage) {
      return addSecurityHeaders(new Response(BOT_HTML, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'X-Robots-Tag': 'index, follow',
        },
      }));
    }

    // Serve static assets — add security headers to HTML responses
    url.pathname = url.pathname.replace(/^\/blast-radius-framework/, '') || '/';
    const response = await env.ASSETS.fetch(new Request(url.toString(), request));
    const contentType = response.headers.get('Content-Type') || '';
    if (contentType.includes('text/html')) {
      return addSecurityHeaders(response);
    }
    return response;
  },
};

// ─── Contact form handler ────────────────────────────────────────────────────
async function handleContact(request, env) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://secure-stack-consulting.com',
    'Content-Type': 'application/json',
    'Vary': 'Origin',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Rate limiting by IP
  const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Too many requests. Please try again later.' }),
      { status: 429, headers: { ...corsHeaders, 'Retry-After': '3600' } }
    );
  }

  try {
    const { name, email, scope, message } = await request.json();

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), { status: 400, headers: corsHeaders });
    }

    // Basic email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), { status: 400, headers: corsHeaders });
    }

    // Truncate inputs to prevent abuse
    const safeName = String(name).slice(0, 200);
    const safeEmail = String(email).slice(0, 320);
    const safeScope = scope ? String(scope).slice(0, 500) : null;
    const safeMessage = message ? String(message).slice(0, 2000) : null;

    const body = [
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      safeScope ? `AWS scope: ${safeScope}` : null,
      safeMessage ? `\nMessage:\n${safeMessage}` : null,
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
        reply_to: safeEmail,
        subject: `BRF Inquiry — ${safeName}`,
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
