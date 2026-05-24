// Centralized translations for FR (default) / EN / ES
// SEO: each locale has its own meta, headings, body text — no auto-translation gimmick

export type Locale = 'fr' | 'en' | 'es';

export const LOCALES: Locale[] = ['fr', 'en', 'es'];
export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
  es: 'es-ES',
};

// Build URL for a given locale
export function localizedUrl(locale: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  if (locale === DEFAULT_LOCALE) return cleanPath;
  return `/${locale}${cleanPath}`;
}

// Extract locale from URL pathname
export function getLocaleFromPath(pathname: string): Locale {
  const match = pathname.match(/^\/(en|es)(\/|$)/);
  return (match?.[1] as Locale) || DEFAULT_LOCALE;
}

// Strip locale prefix from path for switching languages
export function stripLocale(pathname: string): string {
  return pathname.replace(/^\/(en|es)/, '') || '/';
}

// Translation dictionary
export const T = {
  fr: {
    // Nav
    'nav.solutions_ia': 'Solutions IA',
    'nav.creation_site': 'Création site',
    'nav.security': 'Sécurité',
    'nav.maintenance': 'Maintenance',
    'nav.seo': 'SEO',
    'nav.ecommerce': 'E-commerce',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.about': "L'agence",
    'nav.blog': 'Blog',

    // Common CTAs
    'cta.free_quote': 'Devis gratuit',
    'cta.start_project': 'Démarrer mon projet',
    'cta.see_services': 'Voir nos services',
    'cta.contact_us': 'Nous contacter',
    'cta.read_more': 'En savoir plus',
    'cta.whatsapp': 'WhatsApp',
    'cta.discuss_project': 'Discutons de votre projet',
    'cta.quote_24h': 'Devis sous 24h',
    'cta.get_quote': 'Obtenir mon devis',
    'cta.send_request': 'Envoyer ma demande',

    // Home hero
    'home.hero.badge': 'Agence IA & Web',
    'home.hero.projects': '+120 projets livrés',
    'home.hero.title_1': "L'IA et le web,",
    'home.hero.title_2': 'au service de votre croissance.',
    'home.hero.subtitle': "Nous concevons des <strong>agents IA</strong>, des sites WordPress performants et des e-commerces qui convertissent. <strong>15 ans d'expertise</strong>.",
    'home.hero.clients_count': '120+ clients',
    'home.hero.rating': 'sur Google',
    'home.hero.uptime': 'Site live · 99.98% uptime',
    'home.hero.monitoring': 'Tous nos sites monitorés 24/7',
    'home.hero.form_subtitle': 'Décrivez votre projet en 60 secondes. On vous rappelle avec un devis.',

    // Home services section
    'home.services.label': 'Nos services',
    'home.services.title': 'Trois piliers, une exigence.',
    'home.services.subtitle': "L'<strong>IA est notre cœur de métier</strong>. WordPress, notre socle technique. Le marketing SEO, notre levier de croissance.",
    'home.pillar.ia.title': 'Solutions IA',
    'home.pillar.ia.subtitle': 'Agents, automatisations, chatbots',
    'home.pillar.wp.title': 'Site & Sécurité WordPress',
    'home.pillar.wp.subtitle': 'Création sur mesure, maintenance, protection 24/7',
    'home.pillar.seo.title': 'Marketing & SEO',
    'home.pillar.seo.subtitle': 'Visibilité, trafic qualifié, conversion',

    // Home clients
    'home.clients.label': 'Ils nous font confiance',
    'home.clients.footer': '+ 120 autres entreprises, startups et indépendants nous ont fait confiance.',

    // Home why us
    'home.why.label': 'Pourquoi WP Solution',
    'home.why.title_1': "15 ans d'expérience web.",
    'home.why.title_2': "Une expertise IA d'avant-garde.",
    'home.why.subtitle': "L'IA est jeune. Nous ne le sommes pas. Notre rigueur vient de 15 ans de production web.",
    'home.why.years': 'années',
    'home.why.projects': 'projets',
    'home.why.monitoring': 'monitoring',
    'home.why.cta': 'Discuter de mon projet',

    // Home pillars (philosophy)
    'home.philo.label': 'Notre philosophie',
    'home.philo.title': 'Trois principes qui font la différence.',
    'home.philo.pillar1.title': "L'IA qui exécute",
    'home.philo.pillar1.desc': 'Pas du copilote. Du logiciel qui prend vos RDV, traite vos mails, qualifie vos leads. Mesuré sur des résultats, pas des démos.',
    'home.philo.pillar2.title': 'Une stack lisible',
    'home.philo.pillar2.desc': 'Nous documentons chaque pipeline, chaque appel API. Vous gardez la main, vos données, vos coûts. Aucun lock-in.',
    'home.philo.pillar3.title': '15 ans de production',
    'home.philo.pillar3.desc': "Notre rigueur vient de l'ops web : zero-downtime, monitoring, sécurité, SEO. L'IA hérite de cette discipline.",

    // Testimonials
    'home.testi.label': 'Témoignages',
    'home.testi.title': 'Ce que nos clients en disent',

    // Contact section
    'home.contact.label': 'Contact',
    'home.contact.title_1': 'Parlons-en',
    'home.contact.title_2': 'honnêtement.',
    'home.contact.subtitle': 'On vous dit en 30 minutes si on est les bons. Si non, on vous oriente.',
    'home.contact.form_title': 'Demander un devis',
    'home.contact.form_subtitle': 'Remplissez le formulaire. On vous répond sous 24h.',

    // Footer CTA
    'footer.cta.title': 'Discutons de votre projet.',
    'footer.cta.subtitle': 'Une réponse sous 24h. Devis gratuit. Sans engagement.',

    // SEO meta
    'meta.home.title': 'WP Solution · Agence IA & développement web',
    'meta.home.desc': "Agence IA & développement web française. Nous concevons des agents IA, automatisations sur mesure, sites WordPress, e-commerce et stratégies SEO. 15 ans d'expertise, +120 projets livrés.",

    // Service page UI
    'svc.service': 'Service',
    'svc.features.label': 'Ce que nous faisons',
    'svc.features.title': 'Tout ce qui est inclus',
    'svc.features.subtitle': "Un service complet, du cadrage à la maintenance post-livraison.",
    'svc.use_cases.label': "Cas d'usage",
    'svc.use_cases.title': 'Pour qui ce service est-il fait ?',
    'svc.use_cases.subtitle': 'Découvrez si nous sommes le bon partenaire pour votre projet.',
    'svc.use_case.startup.title': 'Startups en croissance',
    'svc.use_case.startup.desc': "Vous avez besoin d'aller vite tout en construisant des fondations solides. Notre approche agile vous permet de tester rapidement vos hypothèses sans compromettre la qualité technique.",
    'svc.use_case.sme.title': 'PME établies',
    'svc.use_case.sme.desc': "Vous voulez moderniser votre présence digitale ou intégrer l'IA dans vos processus métier. Nous comprenons les enjeux de l'existant et savons faire évoluer sans tout casser.",
    'svc.use_case.ecom.title': 'E-commerçants',
    'svc.use_case.ecom.desc': "Vous cherchez à augmenter votre taux de conversion, optimiser votre catalogue et automatiser votre service client. Nous combinons UX et IA pour des résultats mesurables.",
    'svc.use_case.large.title': 'Grandes entreprises',
    'svc.use_case.large.desc': "Vous avez besoin de partenaires techniques fiables et discrets pour des projets sensibles : conformité RGPD, sécurité, intégration SI complexe, accompagnement long terme.",
    'svc.benefits.label': 'Les bénéfices',
    'svc.benefits.title': 'Pourquoi choisir ce service ?',
    'svc.process.label': 'Notre méthode',
    'svc.process.title': 'Comment ça marche ?',
    'svc.process.subtitle': 'Un processus éprouvé, transparent et efficace.',
    'svc.pricing.label': 'Tarifs',
    'svc.pricing.title': 'Des offres adaptées à vos besoins',
    'svc.pricing.subtitle': 'Prix transparents, pas de frais cachés.',
    'svc.pricing.popular': 'Populaire',
    'svc.pricing.choose': 'Choisir cette offre',
    'svc.faq.label': 'FAQ',
    'svc.faq.title': 'Questions fréquentes',
    'svc.faq.subtitle': 'Les réponses aux questions que vous vous posez probablement.',
    'svc.stats.projects': 'Projets livrés',
    'svc.stats.years': "Années d'expertise",
    'svc.stats.satisfaction': 'Clients satisfaits',
    'svc.stats.monitoring': 'Monitoring',
    'svc.testi.label': 'Témoignage',
    'svc.testi.title': 'Ce que nos clients en disent',
    'svc.testi.quote': '« WP Solution a transformé notre vision en un projet concret et opérationnel. Leur expertise technique combinée à une vraie compréhension du métier a fait toute la différence. Résultats mesurables dès le premier mois. »',
    'svc.cta.label': 'Contact',
    'svc.cta.title': 'Prêt à démarrer ?',
    'svc.cta.subtitle': 'Parlez-nous de votre projet. On vous répond sous 24h avec un devis personnalisé.',
    'svc.cta.discover': 'Découvrir les détails',
    'svc.cta.request_quote': 'Demander un devis',
  },

  en: {
    'nav.solutions_ia': 'AI Solutions',
    'nav.creation_site': 'Website creation',
    'nav.security': 'Security',
    'nav.maintenance': 'Maintenance',
    'nav.seo': 'SEO',
    'nav.ecommerce': 'E-commerce',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.about': 'About us',
    'nav.blog': 'Blog',

    'cta.free_quote': 'Free quote',
    'cta.start_project': 'Start my project',
    'cta.see_services': 'See our services',
    'cta.contact_us': 'Contact us',
    'cta.read_more': 'Learn more',
    'cta.whatsapp': 'WhatsApp',
    'cta.discuss_project': "Let's discuss your project",
    'cta.quote_24h': 'Quote within 24h',
    'cta.get_quote': 'Get my quote',
    'cta.send_request': 'Send my request',

    'home.hero.badge': 'AI & Web Agency',
    'home.hero.projects': '+120 projects delivered',
    'home.hero.title_1': 'AI and the web,',
    'home.hero.title_2': 'driving your growth.',
    'home.hero.subtitle': 'We design <strong>AI agents</strong>, high-performance WordPress sites and e-commerce stores that convert. <strong>15 years of expertise</strong>.',
    'home.hero.clients_count': '120+ clients',
    'home.hero.rating': 'on Google',
    'home.hero.uptime': 'Live site · 99.98% uptime',
    'home.hero.monitoring': 'All our sites monitored 24/7',
    'home.hero.form_subtitle': 'Describe your project in 60 seconds. We call you back with a quote.',

    'home.services.label': 'Our services',
    'home.services.title': 'Three pillars, one standard.',
    'home.services.subtitle': '<strong>AI is our core business</strong>. WordPress, our technical foundation. SEO marketing, our growth engine.',
    'home.pillar.ia.title': 'AI Solutions',
    'home.pillar.ia.subtitle': 'Agents, automations, chatbots',
    'home.pillar.wp.title': 'WordPress Site & Security',
    'home.pillar.wp.subtitle': 'Custom build, maintenance, 24/7 protection',
    'home.pillar.seo.title': 'Marketing & SEO',
    'home.pillar.seo.subtitle': 'Visibility, qualified traffic, conversion',

    'home.clients.label': 'They trust us',
    'home.clients.footer': '+ 120 other companies, startups and independents have trusted us.',

    'home.why.label': 'Why WP Solution',
    'home.why.title_1': '15 years of web experience.',
    'home.why.title_2': 'Cutting-edge AI expertise.',
    'home.why.subtitle': 'AI is young. We are not. Our rigor comes from 15 years of web production.',
    'home.why.years': 'years',
    'home.why.projects': 'projects',
    'home.why.monitoring': 'monitoring',
    'home.why.cta': 'Discuss my project',

    'home.philo.label': 'Our philosophy',
    'home.philo.title': 'Three principles that make the difference.',
    'home.philo.pillar1.title': 'AI that executes',
    'home.philo.pillar1.desc': 'Not a copilot. Software that books your appointments, processes your emails, qualifies your leads. Measured on results, not demos.',
    'home.philo.pillar2.title': 'A readable stack',
    'home.philo.pillar2.desc': 'We document every pipeline, every API call. You keep control of your data and costs. No lock-in.',
    'home.philo.pillar3.title': '15 years of production',
    'home.philo.pillar3.desc': 'Our rigor comes from web ops: zero-downtime, monitoring, security, SEO. AI inherits this discipline.',

    'home.testi.label': 'Testimonials',
    'home.testi.title': 'What our clients say',

    'home.contact.label': 'Contact',
    'home.contact.title_1': "Let's talk",
    'home.contact.title_2': 'honestly.',
    'home.contact.subtitle': "In 30 minutes we'll tell you if we're a good fit. If not, we point you elsewhere.",
    'home.contact.form_title': 'Request a quote',
    'home.contact.form_subtitle': 'Fill out the form. We reply within 24h.',

    'footer.cta.title': "Let's discuss your project.",
    'footer.cta.subtitle': 'Reply within 24h. Free quote. No commitment.',

    'meta.home.title': 'WP Solution · AI & web development agency',
    'meta.home.desc': 'French AI & web development agency. We design AI agents, custom automations, WordPress sites, e-commerce and SEO strategies. 15 years of expertise, +120 projects delivered.',

    'svc.service': 'Service',
    'svc.features.label': 'What we do',
    'svc.features.title': 'Everything that is included',
    'svc.features.subtitle': "A complete service, from scoping to post-launch maintenance.",
    'svc.use_cases.label': 'Use cases',
    'svc.use_cases.title': 'Who is this service for?',
    'svc.use_cases.subtitle': 'See if we are the right partner for your project.',
    'svc.use_case.startup.title': 'Growing startups',
    'svc.use_case.startup.desc': 'You need to move fast while building solid foundations. Our agile approach lets you test your hypotheses quickly without compromising technical quality.',
    'svc.use_case.sme.title': 'Established SMEs',
    'svc.use_case.sme.desc': 'You want to modernize your digital presence or integrate AI into your business processes. We understand the constraints of the existing and know how to evolve without breaking everything.',
    'svc.use_case.ecom.title': 'E-merchants',
    'svc.use_case.ecom.desc': 'You want to increase your conversion rate, optimize your catalog and automate customer service. We combine UX and AI for measurable results.',
    'svc.use_case.large.title': 'Large companies',
    'svc.use_case.large.desc': 'You need reliable and discreet technical partners for sensitive projects: GDPR compliance, security, complex IT integration, long-term support.',
    'svc.benefits.label': 'Benefits',
    'svc.benefits.title': 'Why choose this service?',
    'svc.process.label': 'Our method',
    'svc.process.title': 'How does it work?',
    'svc.process.subtitle': 'A proven, transparent and effective process.',
    'svc.pricing.label': 'Pricing',
    'svc.pricing.title': 'Plans tailored to your needs',
    'svc.pricing.subtitle': 'Transparent prices, no hidden fees.',
    'svc.pricing.popular': 'Popular',
    'svc.pricing.choose': 'Choose this plan',
    'svc.faq.label': 'FAQ',
    'svc.faq.title': 'Frequently asked questions',
    'svc.faq.subtitle': 'Answers to questions you probably have.',
    'svc.stats.projects': 'Projects delivered',
    'svc.stats.years': 'Years of expertise',
    'svc.stats.satisfaction': 'Satisfied clients',
    'svc.stats.monitoring': 'Monitoring',
    'svc.testi.label': 'Testimonial',
    'svc.testi.title': 'What our clients say',
    'svc.testi.quote': '"WP Solution turned our vision into a concrete, operational project. Their technical expertise combined with a real understanding of the business made all the difference. Measurable results from the first month."',
    'svc.cta.label': 'Contact',
    'svc.cta.title': 'Ready to start?',
    'svc.cta.subtitle': "Tell us about your project. We'll respond within 24h with a custom quote.",
    'svc.cta.discover': 'Discover the details',
    'svc.cta.request_quote': 'Request a quote',
  },

  es: {
    'nav.solutions_ia': 'Soluciones IA',
    'nav.creation_site': 'Creación web',
    'nav.security': 'Seguridad',
    'nav.maintenance': 'Mantenimiento',
    'nav.seo': 'SEO',
    'nav.ecommerce': 'E-commerce',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.about': 'La agencia',
    'nav.blog': 'Blog',

    'cta.free_quote': 'Presupuesto gratis',
    'cta.start_project': 'Iniciar mi proyecto',
    'cta.see_services': 'Ver nuestros servicios',
    'cta.contact_us': 'Contáctenos',
    'cta.read_more': 'Saber más',
    'cta.whatsapp': 'WhatsApp',
    'cta.discuss_project': 'Hablemos de su proyecto',
    'cta.quote_24h': 'Presupuesto en 24h',
    'cta.get_quote': 'Obtener presupuesto',
    'cta.send_request': 'Enviar solicitud',

    'home.hero.badge': 'Agencia IA & Web',
    'home.hero.projects': '+120 proyectos entregados',
    'home.hero.title_1': 'La IA y la web,',
    'home.hero.title_2': 'al servicio de su crecimiento.',
    'home.hero.subtitle': 'Diseñamos <strong>agentes IA</strong>, sitios WordPress de alto rendimiento y e-commerce que convierten. <strong>15 años de experiencia</strong>.',
    'home.hero.clients_count': '120+ clientes',
    'home.hero.rating': 'en Google',
    'home.hero.uptime': 'Sitio en línea · 99.98% uptime',
    'home.hero.monitoring': 'Todos nuestros sitios monitoreados 24/7',
    'home.hero.form_subtitle': 'Describa su proyecto en 60 segundos. Le llamamos con un presupuesto.',

    'home.services.label': 'Nuestros servicios',
    'home.services.title': 'Tres pilares, una exigencia.',
    'home.services.subtitle': '<strong>La IA es nuestro negocio principal</strong>. WordPress, nuestra base técnica. SEO marketing, nuestro motor de crecimiento.',
    'home.pillar.ia.title': 'Soluciones IA',
    'home.pillar.ia.subtitle': 'Agentes, automatizaciones, chatbots',
    'home.pillar.wp.title': 'Sitio & Seguridad WordPress',
    'home.pillar.wp.subtitle': 'Creación a medida, mantenimiento, protección 24/7',
    'home.pillar.seo.title': 'Marketing & SEO',
    'home.pillar.seo.subtitle': 'Visibilidad, tráfico cualificado, conversión',

    'home.clients.label': 'Confían en nosotros',
    'home.clients.footer': '+ 120 otras empresas, startups e independientes han confiado en nosotros.',

    'home.why.label': 'Por qué WP Solution',
    'home.why.title_1': '15 años de experiencia web.',
    'home.why.title_2': 'Una experiencia IA de vanguardia.',
    'home.why.subtitle': 'La IA es joven. Nosotros no. Nuestro rigor viene de 15 años de producción web.',
    'home.why.years': 'años',
    'home.why.projects': 'proyectos',
    'home.why.monitoring': 'monitoreo',
    'home.why.cta': 'Hablar de mi proyecto',

    'home.philo.label': 'Nuestra filosofía',
    'home.philo.title': 'Tres principios que marcan la diferencia.',
    'home.philo.pillar1.title': 'IA que ejecuta',
    'home.philo.pillar1.desc': 'No copilotos. Software que reserva sus citas, procesa sus correos, cualifica sus leads. Medido en resultados, no en demos.',
    'home.philo.pillar2.title': 'Stack legible',
    'home.philo.pillar2.desc': 'Documentamos cada pipeline, cada llamada API. Usted mantiene el control de sus datos y costes. Sin lock-in.',
    'home.philo.pillar3.title': '15 años de producción',
    'home.philo.pillar3.desc': 'Nuestro rigor viene del ops web: zero-downtime, monitoring, seguridad, SEO. La IA hereda esta disciplina.',

    'home.testi.label': 'Testimonios',
    'home.testi.title': 'Lo que dicen nuestros clientes',

    'home.contact.label': 'Contacto',
    'home.contact.title_1': 'Hablemos',
    'home.contact.title_2': 'honestamente.',
    'home.contact.subtitle': 'En 30 minutos le decimos si somos los adecuados. Si no, le orientamos.',
    'home.contact.form_title': 'Solicitar presupuesto',
    'home.contact.form_subtitle': 'Rellene el formulario. Respondemos en 24h.',

    'footer.cta.title': 'Hablemos de su proyecto.',
    'footer.cta.subtitle': 'Respuesta en 24h. Presupuesto gratis. Sin compromiso.',

    'meta.home.title': 'WP Solution · Agencia IA & desarrollo web',
    'meta.home.desc': 'Agencia francesa de IA y desarrollo web. Diseñamos agentes IA, automatizaciones a medida, sitios WordPress, e-commerce y estrategias SEO. 15 años de experiencia, +120 proyectos entregados.',

    'svc.service': 'Servicio',
    'svc.features.label': 'Lo que hacemos',
    'svc.features.title': 'Todo lo que está incluido',
    'svc.features.subtitle': 'Un servicio completo, desde el encuadre hasta el mantenimiento post-entrega.',
    'svc.use_cases.label': 'Casos de uso',
    'svc.use_cases.title': '¿Para quién es este servicio?',
    'svc.use_cases.subtitle': 'Descubra si somos el partner adecuado para su proyecto.',
    'svc.use_case.startup.title': 'Startups en crecimiento',
    'svc.use_case.startup.desc': 'Necesita ir rápido construyendo bases sólidas. Nuestro enfoque ágil le permite probar sus hipótesis rápidamente sin comprometer la calidad técnica.',
    'svc.use_case.sme.title': 'PYME establecidas',
    'svc.use_case.sme.desc': 'Quiere modernizar su presencia digital o integrar IA en sus procesos. Comprendemos las restricciones del existente y sabemos evolucionar sin romper nada.',
    'svc.use_case.ecom.title': 'E-comerciantes',
    'svc.use_case.ecom.desc': 'Busca aumentar su tasa de conversión, optimizar su catálogo y automatizar la atención al cliente. Combinamos UX e IA para resultados medibles.',
    'svc.use_case.large.title': 'Grandes empresas',
    'svc.use_case.large.desc': 'Necesita partners técnicos fiables y discretos para proyectos sensibles: conformidad RGPD, seguridad, integración SI compleja, acompañamiento a largo plazo.',
    'svc.benefits.label': 'Los beneficios',
    'svc.benefits.title': '¿Por qué elegir este servicio?',
    'svc.process.label': 'Nuestro método',
    'svc.process.title': '¿Cómo funciona?',
    'svc.process.subtitle': 'Un proceso probado, transparente y eficaz.',
    'svc.pricing.label': 'Tarifas',
    'svc.pricing.title': 'Ofertas adaptadas a sus necesidades',
    'svc.pricing.subtitle': 'Precios transparentes, sin gastos ocultos.',
    'svc.pricing.popular': 'Popular',
    'svc.pricing.choose': 'Elegir esta oferta',
    'svc.faq.label': 'FAQ',
    'svc.faq.title': 'Preguntas frecuentes',
    'svc.faq.subtitle': 'Respuestas a las preguntas que probablemente se hace.',
    'svc.stats.projects': 'Proyectos entregados',
    'svc.stats.years': 'Años de experiencia',
    'svc.stats.satisfaction': 'Clientes satisfechos',
    'svc.stats.monitoring': 'Monitoreo',
    'svc.testi.label': 'Testimonio',
    'svc.testi.title': 'Lo que dicen nuestros clientes',
    'svc.testi.quote': '«WP Solution transformó nuestra visión en un proyecto concreto y operativo. Su experiencia técnica combinada con un verdadero entendimiento del negocio marcó la diferencia. Resultados medibles desde el primer mes.»',
    'svc.cta.label': 'Contacto',
    'svc.cta.title': '¿Listo para empezar?',
    'svc.cta.subtitle': 'Háblenos de su proyecto. Respondemos en 24h con un presupuesto personalizado.',
    'svc.cta.discover': 'Descubrir los detalles',
    'svc.cta.request_quote': 'Solicitar presupuesto',
  },
} as const;

type TranslationKey = keyof typeof T['fr'];

export function t(locale: Locale, key: TranslationKey): string {
  return (T[locale] as Record<string, string>)[key] ?? (T.fr as Record<string, string>)[key] ?? key;
}
