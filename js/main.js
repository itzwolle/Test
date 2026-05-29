/* ============================================================
   LightHouse SOC — interactions: i18n, nav, contact form
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Translations ---------- */
  const I18N = {
    nl: {
      'meta.title': 'LightHouse SOC — De baken voor uw IT omgeving',
      'meta.description': 'LightHouse SOC bundelt detectie, onderzoek en respons in één platform. Sneller dreigingen vinden, minder ruis, 24/7 grip op je security.',

      'nav.features': 'Functies',
      'nav.how': 'Hoe het werkt',
      'nav.integrations': 'Integraties',
      'nav.pricing': 'Prijzen',
      'nav.contact': 'Contact',
      'nav.cta': 'Neem contact op',

      'hero.eyebrow': 'Security Operations Center platform',
      'hero.title': 'Zie elke dreiging. Reageer in seconden.',
      'hero.lede': 'LightHouse SOC bundelt detectie, onderzoek en respons in één overzichtelijk platform. Minder ruis, snellere triage en 24/7 grip op de security van je organisatie.',
      'hero.ctaPrimary': 'Neem contact op',
      'hero.ctaSecondary': 'Bekijk de demo',
      'hero.badge1': '✓ Live binnen een dag',
      'hero.badge2': '✓ ISO 27001 & GDPR-ready',
      'hero.badge3': '✓ Geen vendor lock-in',

      'dash.events': 'Events / sec',
      'dash.alerts': 'Open alerts',
      'dash.mttr': 'Gem. respons',

      'trust.label': 'Gebouwd op standaarden die je security-team al gebruikt',

      'features.eyebrow': 'Functies',
      'features.title': 'Alles wat een SOC nodig heeft, op één plek',
      'features.subtitle': 'Van datacollectie tot geautomatiseerde respons — zonder losse tools aan elkaar te knopen.',
      'feature.detect.title': 'Realtime detectie',
      'feature.detect.body': 'Correleer logs, endpoints en netwerkverkeer met regels op basis van MITRE ATT&CK en gedrag.',
      'feature.investigate.title': 'Snel onderzoek',
      'feature.investigate.body': 'Eén tijdlijn per incident met alle context, zodat analisten in minuten weten wat er speelt.',
      'feature.respond.title': 'Geautomatiseerde respons',
      'feature.respond.body': 'Playbooks isoleren hosts, blokkeren accounts en openen tickets — automatisch of met één klik.',
      'feature.intel.title': 'Threat intelligence',
      'feature.intel.body': 'Verrijk alerts met actuele IOC-feeds via STIX/TAXII en filter automatisch de ruis weg.',
      'feature.compliance.title': 'Compliance & rapportage',
      'feature.compliance.body': 'Kant-en-klare dashboards en exports voor ISO 27001, NIS2 en GDPR-audits.',
      'feature.monitor.title': '24/7 monitoring',
      'feature.monitor.body': 'Slimme alerting via e-mail, Slack en Teams, met escalatie wanneer het er echt toe doet.',

      'how.eyebrow': 'Hoe het werkt',
      'how.title': 'Van data naar respons in drie stappen',
      'how.step1.title': 'Verbind je bronnen',
      'how.step1.body': 'Koppel cloud, endpoints, firewalls en SaaS via kant-en-klare connectoren of syslog.',
      'how.step2.title': 'Detecteer & prioriteer',
      'how.step2.body': 'LightHouse SOC correleert events en zet alleen wat telt boven aan de wachtrij.',
      'how.step3.title': 'Reageer & los op',
      'how.step3.body': 'Playbooks en analisten werken samen om het incident in te dammen en af te sluiten.',

      'stats.noise': 'minder alert-ruis',
      'stats.mttr': 'gemiddelde reactietijd',
      'stats.connectors': 'kant-en-klare connectoren',
      'stats.coverage': 'monitoring & alerting',

      'integrations.eyebrow': 'Integraties',
      'integrations.title': 'Werkt met je bestaande stack',
      'integrations.subtitle': 'Geen rip-and-replace. LightHouse SOC sluit aan op de tools die je al draait.',

      'pricing.eyebrow': 'Prijzen',
      'pricing.title': 'Transparant en schaalbaar',
      'pricing.subtitle': 'Begin klein, groei mee. Alle plannen bevatten onbeperkte gebruikers.',
      'plan.perMonth': '/ maand',
      'plan.popular': 'Meest gekozen',
      'plan.cta': 'Neem contact op',
      'plan.starter.name': 'Starter',
      'plan.starter.price': '€499',
      'plan.starter.desc': 'Voor kleine teams die grip willen op hun security.',
      'plan.starter.f1': 'Tot 25 bronnen',
      'plan.starter.f2': 'Realtime detectie',
      'plan.starter.f3': 'E-mail & Slack alerts',
      'plan.starter.f4': '30 dagen retentie',
      'plan.pro.name': 'Professional',
      'plan.pro.price': '€1.499',
      'plan.pro.desc': 'Voor groeiende organisaties met een eigen SOC-team.',
      'plan.pro.f1': 'Tot 150 bronnen',
      'plan.pro.f2': 'Geautomatiseerde playbooks',
      'plan.pro.f3': 'Threat intelligence feeds',
      'plan.pro.f4': '1 jaar retentie',
      'plan.ent.name': 'Enterprise',
      'plan.ent.price': 'Op maat',
      'plan.ent.desc': 'Voor complexe omgevingen en strenge compliance-eisen.',
      'plan.ent.f1': 'Onbeperkte bronnen',
      'plan.ent.f2': 'Dedicated support & SLA',
      'plan.ent.f3': 'On-prem of private cloud',
      'plan.ent.f4': 'Custom retentie & SSO',

      'demo.eyebrow': 'Live demo',
      'demo.title': 'Binnenkort: een interactieve live demo',
      'demo.subtitle': 'We zetten hier binnenkort een echte, klikbare demo-omgeving neer. Wil je nu al een rondleiding? Neem contact op.',
      'demo.badge': 'Demo volgt',
      'demo.cta': 'Vraag een rondleiding aan',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Klaar om je security naar een hoger niveau te tillen?',
      'contact.subtitle': 'Laat je gegevens achter en we nemen binnen één werkdag contact op voor een vrijblijvend gesprek of demo.',
      'contact.point1': '📧 info@lighthouse-soc.example',
      'contact.point2': '📞 +31 6 1321 4598',
      'contact.point3': '📍 Amsterdam, Nederland',
      'contact.whatsapp': '💬 WhatsApp: +31 6 1321 4598',
      'contact.whatsappBtn': 'Chat direct via WhatsApp',
      'wa.label': 'Chat met ons via WhatsApp',
      'wa.prefill': 'Hoi! Ik heb een vraag over LightHouse SOC.',

      'form.name': 'Naam',
      'form.email': 'Zakelijk e-mailadres',
      'form.company': 'Organisatie',
      'form.message': 'Waar kunnen we mee helpen?',
      'form.submit': 'Verstuur bericht',
      'form.note': 'We gebruiken je gegevens alleen om contact op te nemen. Geen spam.',
      'form.sending': 'Bezig met verzenden…',
      'form.success': 'Bedankt! We nemen binnen één werkdag contact met je op.',
      'form.error': 'Vul alsjeblieft je naam, een geldig e-mailadres en een bericht in.',

      'footer.tagline': 'De baken voor uw IT omgeving.',
      'footer.rights': 'Alle rechten voorbehouden.'
    },

    en: {
      'meta.title': 'LightHouse SOC — The beacon for your IT environment',
      'meta.description': 'LightHouse SOC unifies detection, investigation and response in one platform. Find threats faster, cut the noise, stay in control 24/7.',

      'nav.features': 'Features',
      'nav.how': 'How it works',
      'nav.integrations': 'Integrations',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in touch',

      'hero.eyebrow': 'Security Operations Center platform',
      'hero.title': 'See every threat. Respond in seconds.',
      'hero.lede': 'LightHouse SOC unifies detection, investigation and response in one clear platform. Less noise, faster triage and 24/7 control over your organization’s security.',
      'hero.ctaPrimary': 'Get in touch',
      'hero.ctaSecondary': 'See the demo',
      'hero.badge1': '✓ Live within a day',
      'hero.badge2': '✓ ISO 27001 & GDPR-ready',
      'hero.badge3': '✓ No vendor lock-in',

      'dash.events': 'Events / sec',
      'dash.alerts': 'Open alerts',
      'dash.mttr': 'Avg. response',

      'trust.label': 'Built on the standards your security team already uses',

      'features.eyebrow': 'Features',
      'features.title': 'Everything a SOC needs, in one place',
      'features.subtitle': 'From data collection to automated response — without stitching together separate tools.',
      'feature.detect.title': 'Real-time detection',
      'feature.detect.body': 'Correlate logs, endpoints and network traffic with MITRE ATT&CK and behavior-based rules.',
      'feature.investigate.title': 'Fast investigation',
      'feature.investigate.body': 'One timeline per incident with all the context, so analysts know what’s happening in minutes.',
      'feature.respond.title': 'Automated response',
      'feature.respond.body': 'Playbooks isolate hosts, block accounts and open tickets — automatically or with a single click.',
      'feature.intel.title': 'Threat intelligence',
      'feature.intel.body': 'Enrich alerts with live IOC feeds via STIX/TAXII and automatically filter out the noise.',
      'feature.compliance.title': 'Compliance & reporting',
      'feature.compliance.body': 'Ready-made dashboards and exports for ISO 27001, NIS2 and GDPR audits.',
      'feature.monitor.title': '24/7 monitoring',
      'feature.monitor.body': 'Smart alerting via email, Slack and Teams, with escalation when it really matters.',

      'how.eyebrow': 'How it works',
      'how.title': 'From data to response in three steps',
      'how.step1.title': 'Connect your sources',
      'how.step1.body': 'Link cloud, endpoints, firewalls and SaaS via ready-made connectors or syslog.',
      'how.step2.title': 'Detect & prioritize',
      'how.step2.body': 'LightHouse SOC correlates events and puts only what matters at the top of the queue.',
      'how.step3.title': 'Respond & resolve',
      'how.step3.body': 'Playbooks and analysts work together to contain and close the incident.',

      'stats.noise': 'less alert noise',
      'stats.mttr': 'average response time',
      'stats.connectors': 'ready-made connectors',
      'stats.coverage': 'monitoring & alerting',

      'integrations.eyebrow': 'Integrations',
      'integrations.title': 'Works with your existing stack',
      'integrations.subtitle': 'No rip-and-replace. LightHouse SOC plugs into the tools you already run.',

      'pricing.eyebrow': 'Pricing',
      'pricing.title': 'Transparent and scalable',
      'pricing.subtitle': 'Start small, grow as you go. Every plan includes unlimited users.',
      'plan.perMonth': '/ month',
      'plan.popular': 'Most popular',
      'plan.cta': 'Get in touch',
      'plan.starter.name': 'Starter',
      'plan.starter.price': '€499',
      'plan.starter.desc': 'For small teams that want control over their security.',
      'plan.starter.f1': 'Up to 25 sources',
      'plan.starter.f2': 'Real-time detection',
      'plan.starter.f3': 'Email & Slack alerts',
      'plan.starter.f4': '30-day retention',
      'plan.pro.name': 'Professional',
      'plan.pro.price': '€1,499',
      'plan.pro.desc': 'For growing organizations with their own SOC team.',
      'plan.pro.f1': 'Up to 150 sources',
      'plan.pro.f2': 'Automated playbooks',
      'plan.pro.f3': 'Threat intelligence feeds',
      'plan.pro.f4': '1-year retention',
      'plan.ent.name': 'Enterprise',
      'plan.ent.price': 'Custom',
      'plan.ent.desc': 'For complex environments and strict compliance requirements.',
      'plan.ent.f1': 'Unlimited sources',
      'plan.ent.f2': 'Dedicated support & SLA',
      'plan.ent.f3': 'On-prem or private cloud',
      'plan.ent.f4': 'Custom retention & SSO',

      'demo.eyebrow': 'Live demo',
      'demo.title': 'Coming soon: an interactive live demo',
      'demo.subtitle': 'We’ll set up a real, clickable demo environment here soon. Want a tour now? Get in touch.',
      'demo.badge': 'Demo coming',
      'demo.cta': 'Request a tour',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Ready to take your security to the next level?',
      'contact.subtitle': 'Leave your details and we’ll reach out within one business day for a no-obligation chat or demo.',
      'contact.point1': '📧 info@lighthouse-soc.example',
      'contact.point2': '📞 +31 6 1321 4598',
      'contact.point3': '📍 Amsterdam, Netherlands',
      'contact.whatsapp': '💬 WhatsApp: +31 6 1321 4598',
      'contact.whatsappBtn': 'Chat on WhatsApp now',
      'wa.label': 'Chat with us on WhatsApp',
      'wa.prefill': 'Hi! I have a question about LightHouse SOC.',

      'form.name': 'Name',
      'form.email': 'Business email',
      'form.company': 'Organization',
      'form.message': 'How can we help?',
      'form.submit': 'Send message',
      'form.note': 'We only use your details to get in touch. No spam.',
      'form.sending': 'Sending…',
      'form.success': 'Thanks! We’ll get back to you within one business day.',
      'form.error': 'Please enter your name, a valid email address and a message.',

      'footer.tagline': 'The beacon for your IT environment.',
      'footer.rights': 'All rights reserved.'
    }
  };

  const SUPPORTED = ['nl', 'en'];
  const STORAGE_KEY = 'lighthouse-soc-lang';
  const WA_NUMBER = '31613214598'; // WhatsApp number, international format without + or spaces

  /* ---------- Apply a language ---------- */
  function applyLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'nl';
    const dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (!(key in dict)) return;
      const value = dict[key];

      if (key === 'meta.title') {
        document.title = value;
      } else if (key === 'meta.description') {
        el.setAttribute('content', value);
      } else {
        el.innerHTML = value;
      }
    });

    document.documentElement.lang = lang;

    // Swap logo (header + footer) to the language-specific version
    document.querySelectorAll('[data-logo]').forEach(function (img) {
      img.setAttribute('src', 'assets/logo-' + lang + '.png');
    });

    // Update WhatsApp links with a language-specific prefilled message
    const waHref = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(dict['wa.prefill']);
    document.querySelectorAll('[data-wa]').forEach(function (link) {
      link.setAttribute('href', waHref);
      link.setAttribute('aria-label', dict['wa.label']);
    });

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- Init language ---------- */
  function initLanguage() {
    let lang = 'nl';
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) {
        lang = stored;
      } else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
        lang = 'en';
      }
    } catch (e) { /* ignore */ }

    applyLanguage(lang);

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    if (!header || !toggle) return;

    toggle.addEventListener('click', function () {
      const open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    header.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Contact form ---------- */
  function initForm() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form || !status) return;

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function currentLang() {
      return document.documentElement.lang === 'en' ? 'en' : 'nl';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const dict = I18N[currentLang()];

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Reset invalid markers
      [form.name, form.email, form.message].forEach(function (f) { f.classList.remove('invalid'); });

      let valid = true;
      if (!name) { form.name.classList.add('invalid'); valid = false; }
      if (!emailRe.test(email)) { form.email.classList.add('invalid'); valid = false; }
      if (!message) { form.message.classList.add('invalid'); valid = false; }

      if (!valid) {
        status.textContent = dict['form.error'];
        status.className = 'form-status error';
        return;
      }

      // NOTE: This is a static site with no backend yet.
      // To receive submissions, wire this up to a service such as Formspree,
      // Netlify Forms, or your own endpoint. For now we show a confirmation.
      status.textContent = dict['form.sending'];
      status.className = 'form-status';

      setTimeout(function () {
        status.textContent = dict['form.success'];
        status.className = 'form-status success';
        form.reset();
      }, 600);
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initNav();
    initForm();
    initYear();
  });
})();
