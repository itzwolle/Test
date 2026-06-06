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
      'hero.badge2': '✓ NIS2, ISO 27001 & GDPR-ready',
      'hero.badge3': '✓ Geen vendor lock-in',

      'dash.events': 'Events / sec',
      'dash.alerts': 'Open alerts',
      'dash.mttr': 'Gem. respons',

      'trust.label': 'Leest direct uit de bronnen die je al gebruikt',

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
      'stats.connectors': 'weekly report ready',
      'stats.coverage': 'monitoring & alerting',

      'integrations.eyebrow': 'Integraties',
      'integrations.title': 'Werkt met je bestaande stack',
      'integrations.subtitle': 'Geen rip-and-replace. LightHouse SOC sluit aan op de tools die je al draait.',

      'nis2.title': 'Klaar voor NIS2',
      'nis2.body': 'Continue monitoring, snelle incidentrespons en wekelijkse rapportages — precies wat de NIS2-richtlijn van organisaties vraagt. Met LightHouse SOC blijf je aantoonbaar in control.',
      'nis2.cta': 'Meer over NIS2',

      'pricing.eyebrow': 'Prijzen',
      'pricing.title': 'Transparant en schaalbaar',
      'pricing.subtitle': 'Prijs per actieve Microsoft-licentie. Kies het pakket dat bij uw organisatie past.',
      'pricing.note': 'Vereist Microsoft Business Premium. Doordat je met ons SOC meer grip krijgt, bespaar je direct op je licenties.',
      'plan.perMonth': '/ maand',
      'plan.popular': 'Meest gekozen',
      'plan.cta': 'Neem contact op',
      'plan.starter.name': 'Starter',
      'plan.starter.price': '€499',
      'plan.starter.desc': 'Voor kleine organisaties. Leest standaard Entra, Intune en Defender uit.',
      'plan.starter.f1': 'Tot 25 actieve licenties',
      'plan.starter.f2': 'Entra, Intune & Defender',
      'plan.starter.f3': 'Realtime detectie & alerting',
      'plan.starter.f4': 'E-mail, pop-up',
      'plan.starter.f5': 'Report',
      'plan.med.name': 'Medium',
      'plan.med.price': '€999',
      'plan.med.desc': 'Voor groeiende organisaties die meer bronnen koppelen.',
      'plan.med.f1': 'Tot 50 actieve licenties',
      'plan.med.f2': 'Entra, Intune & Defender',
      'plan.med.f3': '+ Connectoren: Roboshadow, PRTG & iLert',
      'plan.med.f4': 'Geautomatiseerde playbooks',
      'plan.med.f5': 'SSO',
      'plan.pro.name': 'Professional',
      'plan.pro.price': '€1.499',
      'plan.pro.desc': 'Voor organisaties met een volwassen securitybehoefte.',
      'plan.pro.f1': 'Tot 100 actieve licenties',
      'plan.pro.f2': 'Connectoren: Roboshadow, PRTG & iLert',
      'plan.pro.f3': 'SSO',
      'plan.pro.f4': 'Geautomatiseerde playbooks',
      'plan.pro.f5': 'Prioriteit-support',
      'plan.ent.name': 'Enterprise',
      'plan.ent.price': 'Op maat',
      'plan.ent.desc': 'Voor meer dan 100 actieve licenties en complexe omgevingen.',
      'plan.ent.f1': 'Meer dan 100 actieve licenties',
      'plan.ent.f2': 'Alle connectoren + Splunk',
      'plan.ent.f3': 'Dedicated support & SLA',
      'plan.ent.f4': 'SSO',

      'demo.eyebrow': 'Het platform',
      'demo.title': 'Een kijkje in LightHouse SOC',
      'demo.subtitle': 'Van identity tot devices en kwetsbaarheden — alles in één helder overzicht.',
      'demo.badge': 'Demo volgt',
      'demo.cta': 'Vraag een rondleiding aan',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Klaar om je security naar een hoger niveau te tillen?',
      'contact.subtitle': 'Laat je gegevens achter en we nemen binnen één werkdag contact op voor een vrijblijvend gesprek of demo.',
      'contact.point1': '📧 info@lighthousesoc.com',
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
      'form.errorSend': 'Verzenden lukte niet. Probeer het later opnieuw of mail ons direct.',

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
      'hero.badge2': '✓ NIS2, ISO 27001 & GDPR-ready',
      'hero.badge3': '✓ No vendor lock-in',

      'dash.events': 'Events / sec',
      'dash.alerts': 'Open alerts',
      'dash.mttr': 'Avg. response',

      'trust.label': 'Reads straight from the sources you already use',

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
      'stats.connectors': 'weekly report ready',
      'stats.coverage': 'monitoring & alerting',

      'integrations.eyebrow': 'Integrations',
      'integrations.title': 'Works with your existing stack',
      'integrations.subtitle': 'No rip-and-replace. LightHouse SOC plugs into the tools you already run.',

      'nis2.title': 'NIS2-ready',
      'nis2.body': 'Continuous monitoring, fast incident response and weekly reporting — exactly what the NIS2 directive expects from organizations. With LightHouse SOC you stay demonstrably in control.',
      'nis2.cta': 'More about NIS2',

      'pricing.eyebrow': 'Pricing',
      'pricing.title': 'Transparent and scalable',
      'pricing.subtitle': 'Priced per active Microsoft license. Pick the plan that fits your organization.',
      'pricing.note': 'Requires Microsoft Business Premium. Because our SOC gives you more control, you save on licenses right away.',
      'plan.perMonth': '/ month',
      'plan.popular': 'Most popular',
      'plan.cta': 'Get in touch',
      'plan.starter.name': 'Starter',
      'plan.starter.price': '€499',
      'plan.starter.desc': 'For small organizations. Reads Entra, Intune and Defender out of the box.',
      'plan.starter.f1': 'Up to 25 active licenses',
      'plan.starter.f2': 'Entra, Intune & Defender',
      'plan.starter.f3': 'Real-time detection & alerting',
      'plan.starter.f4': 'Email, pop-up',
      'plan.starter.f5': 'Report',
      'plan.med.name': 'Medium',
      'plan.med.price': '€999',
      'plan.med.desc': 'For growing organizations connecting more sources.',
      'plan.med.f1': 'Up to 50 active licenses',
      'plan.med.f2': 'Entra, Intune & Defender',
      'plan.med.f3': '+ Connectors: Roboshadow, PRTG & iLert',
      'plan.med.f4': 'Automated playbooks',
      'plan.med.f5': 'SSO',
      'plan.pro.name': 'Professional',
      'plan.pro.price': '€1,499',
      'plan.pro.desc': 'For organizations with mature security needs.',
      'plan.pro.f1': 'Up to 100 active licenses',
      'plan.pro.f2': 'Connectors: Roboshadow, PRTG & iLert',
      'plan.pro.f3': 'SSO',
      'plan.pro.f4': 'Automated playbooks',
      'plan.pro.f5': 'Priority support',
      'plan.ent.name': 'Enterprise',
      'plan.ent.price': 'Custom',
      'plan.ent.desc': 'For more than 100 active licenses and complex environments.',
      'plan.ent.f1': 'More than 100 active licenses',
      'plan.ent.f2': 'All connectors + Splunk',
      'plan.ent.f3': 'Dedicated support & SLA',
      'plan.ent.f4': 'SSO',

      'demo.eyebrow': 'The platform',
      'demo.title': 'A look inside LightHouse SOC',
      'demo.subtitle': 'From identity to devices and vulnerabilities — all in one clear overview.',
      'demo.badge': 'Demo coming',
      'demo.cta': 'Request a tour',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Ready to take your security to the next level?',
      'contact.subtitle': 'Leave your details and we’ll reach out within one business day for a no-obligation chat or demo.',
      'contact.point1': '📧 info@lighthousesoc.com',
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
      'form.errorSend': 'Sending failed. Please try again later or email us directly.',

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
    let lang = 'en'; // default to English
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) {
        lang = stored;
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

      // Send via FormSubmit (free, no backend). Delivers to the inbox below.
      // First submission triggers a one-time activation email to confirm.
      status.textContent = dict['form.sending'];
      status.className = 'form-status';

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      const data = new FormData(form);
      data.append('_subject', 'Nieuw bericht via lighthousesoc.com');
      data.append('_template', 'table');
      data.append('_captcha', 'false');

      fetch('https://formsubmit.co/ajax/info@lighthousesoc.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
        .then(function (r) { if (!r.ok) throw new Error('bad status'); return r.json(); })
        .then(function () {
          status.textContent = dict['form.success'];
          status.className = 'form-status success';
          form.reset();
        })
        .catch(function () {
          status.textContent = dict['form.errorSend'];
          status.className = 'form-status error';
        })
        .then(function () { if (submitBtn) submitBtn.disabled = false; });
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- Screenshot sliders ---------- */
  function initSliders() {
    document.querySelectorAll('[data-slider]').forEach(function (root) {
      const track = root.querySelector('.shots-track');
      const slides = Array.prototype.slice.call(root.querySelectorAll('.shot'));
      if (!track || slides.length < 2) return;

      const dotsWrap = root.querySelector('.shots-dots');
      const prev = root.querySelector('.shots-prev');
      const next = root.querySelector('.shots-next');
      let index = 0;
      let timer = null;

      const dots = slides.map(function (_, i) {
        const d = document.createElement('button');
        d.type = 'button';
        d.setAttribute('aria-label', 'Slide ' + (i + 1));
        d.addEventListener('click', function () { go(i); restart(); });
        if (dotsWrap) dotsWrap.appendChild(d);
        return d;
      });

      function go(n) {
        index = (n + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        dots.forEach(function (d, i) { d.classList.toggle('active', i === index); });
      }
      function start() { timer = setInterval(function () { go(index + 1); }, 5000); }
      function restart() { if (timer) clearInterval(timer); start(); }

      if (prev) prev.addEventListener('click', function () { go(index - 1); restart(); });
      if (next) next.addEventListener('click', function () { go(index + 1); restart(); });

      // Click the left half to go back, the right half to go forward
      const viewport = root.querySelector('.shots-viewport');
      if (viewport) {
        viewport.addEventListener('click', function (e) {
          const r = viewport.getBoundingClientRect();
          go(index + ((e.clientX - r.left) < r.width / 2 ? -1 : 1));
          restart();
        });
      }

      root.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
      root.addEventListener('mouseleave', start);

      go(0);
      start();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initNav();
    initForm();
    initYear();
    initSliders();
  });
})();
