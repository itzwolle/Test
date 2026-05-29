# LightHouse SOC — sales website

A bilingual (Dutch / English) static marketing site for a Security Operations Center (SOC) tool.
No build step, no dependencies — just open it in a browser or drop it on any static host.

## Structure

```
.
├── index.html      # All page markup (hero, features, how-it-works, pricing, demo, contact)
├── css/styles.css  # Styling (dark security theme, fully responsive)
└── js/main.js       # Language switching, mobile nav, contact-form handling
```

## Run locally

Just open `index.html` in your browser. Or serve it (recommended, avoids file:// quirks):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- **Bilingual** — NL/EN toggle in the header. Choice is remembered in `localStorage`,
  and the browser language is used on first visit. All text lives in the `I18N`
  dictionary in `js/main.js`.
- **Responsive** — works from mobile to desktop, with a collapsible mobile menu.
- **Contact-first** — the main call-to-action is the contact form. There's also a
  placeholder **Live demo** section ready for the interactive demo you'll add later.

## Customizing

- **Brand name / logo** — search for `LightHouse SOC` to rename. The logo is an inline
  lighthouse SVG (in the header, footer and favicon); swap those paths for your own mark.
- **Copy** — edit the `I18N` object in `js/main.js` (both `nl` and `en`). The matching
  `data-i18n="..."` attributes in `index.html` hold the default/Dutch text.
- **Colors** — tweak the CSS variables at the top of `css/styles.css` (`--accent`, `--bg`, …).
- **Contact details** — update phone/email/address in `index.html` (`contact.point1-3`)
  and in the `I18N` dictionary.

## Wiring up the contact form

The form currently validates input and shows a confirmation message, but does **not**
send anything (this is a static site with no backend yet). To actually receive messages,
point the form at a service. For example with [Formspree](https://formspree.io):

```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/your-id" method="POST">
```

…and let the form submit normally instead of using the JavaScript handler, or adapt the
handler in `js/main.js` to `fetch()` your endpoint. Netlify Forms and your own API work too.

## Adding the live demo

The `#demo` section has a placeholder block. When your interactive demo is ready, replace
the `.demo-placeholder` element with an `<iframe>`, embedded app, or link.

## Deploying

Any static host works: GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, or your own
web server. No build required.
