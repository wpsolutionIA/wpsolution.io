export type ServicePage = {
  slug: string;
  title: string;
  headline: string;
  description: string;
  icon: string;
  heroImage: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  pricing: { plan: string; price: string; desc: string; features: string[] }[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "solutions-ia",
    title: "Solutions IA & Intelligence Artificielle sur mesure | WP Solution",
    headline: "Des agents IA qui travaillent pour vous 24/7",
    description: "Nous concevons et d\u00e9ployons des agents d'intelligence artificielle op\u00e9rationnels : chatbots conversationnels, assistants vocaux, g\u00e9n\u00e9rateurs de contenu, classification automatique et analyse pr\u00e9dictive.",
    icon: "\ud83e\udd16",
    heroImage: "/images/service-ia.png",
    features: [
      "Chatbots et assistants conversationnels",
      "G\u00e9n\u00e9ration automatique de contenu (texte, image, code)",
      "Classification et analyse de donn\u00e9es",
      "Int\u00e9gration API (OpenAI, Claude, Gemini, Mistral)",
      "Fine-tuning de mod\u00e8les sur vos donn\u00e9es",
      "D\u00e9ploiement s\u00e9curis\u00e9 on-premise ou cloud",
    ],
    benefits: [
      { title: "Gain de temps", desc: "Vos \u00e9quipes gagnent 10+ heures par semaine gr\u00e2ce \u00e0 l'automatisation des t\u00e2ches r\u00e9p\u00e9titives." },
      { title: "Disponibilit\u00e9 24/7", desc: "Vos clients obtiennent des r\u00e9ponses instantan\u00e9es, m\u00eame en dehors des horaires d'ouverture." },
      { title: "Scalabilit\u00e9", desc: "Un agent IA traite 1000 conversations aussi facilement qu'une seule." },
      { title: "ROI mesurable", desc: "Chaque d\u00e9ploiement est suivi avec des KPIs : taux de r\u00e9solution, satisfaction, co\u00fbt par interaction." },
    ],
    process: [
      { step: "01", title: "Audit & cadrage", desc: "On analyse vos processus, identifie les t\u00e2ches automatisables et d\u00e9finit les objectifs chiffr\u00e9s." },
      { step: "02", title: "Prototypage", desc: "POC en 1 semaine sur un cas d'usage prioritaire. Test rapide, it\u00e9ration agile." },
      { step: "03", title: "D\u00e9veloppement", desc: "Architecture robuste, int\u00e9gration API, s\u00e9curit\u00e9 des donn\u00e9es, tests de charge." },
      { step: "04", title: "D\u00e9ploiement", desc: "Mise en production, monitoring, dashboards de performance, support continu." },
    ],
    faq: [
      { q: "Quels mod\u00e8les IA utilisez-vous ?", a: "Nous sommes agnostiques : OpenAI GPT-4o, Anthropic Claude, Google Gemini, Meta Llama, Mistral. Nous choisissons le meilleur mod\u00e8le pour votre cas d'usage et votre budget." },
      { q: "Mes donn\u00e9es sont-elles s\u00e9curis\u00e9es ?", a: "Oui. Nous proposons des d\u00e9ploiements on-premise (vos serveurs) ou cloud priv\u00e9 avec chiffrement AES-256. Aucune donn\u00e9e client ne transite sur des API publiques sans votre consentement explicite." },
      { q: "Combien de temps pour un premier agent ?", a: "Un POC fonctionnel en 5 jours ouvr\u00e9s. Une version production en 3 \u00e0 6 semaines selon la complexit\u00e9." },
      { q: "Peut-on fine-tuner sur nos donn\u00e9es ?", a: "Absolument. C'est m\u00eame recommand\u00e9. Nous pr\u00e9parons, nettoyons et entra\u00eenons le mod\u00e8le sur vos donn\u00e9es internes pour des r\u00e9ponses pr\u00e9cises et contextualis\u00e9es." },
    ],
    pricing: [
      { plan: "Starter", price: "\u00e0 partir de 1 500\u20ac", desc: "Chatbot basique sur votre site", features: ["1 agent conversationnel", "Int\u00e9gration site web", "FAQ automatis\u00e9e", "Tableau de bord", "Support email"] },
      { plan: "Business", price: "\u00e0 partir de 4 500\u20ac", desc: "Agent multi-canal avanc\u00e9", features: ["Agents illimit\u00e9s", "Multi-canal (web, WhatsApp, email)", "Fine-tuning inclus", "Analytics avanc\u00e9s", "Support prioritaire"] },
      { plan: "Enterprise", price: "Sur mesure", desc: "Solution IA compl\u00e8te", features: ["Architecture d\u00e9di\u00e9e", "On-premise possible", "Int\u00e9gration CRM/ERP", "Formation \u00e9quipes", "SLA garanti"] },
    ],
  },
  {
    slug: "creation-site-wordpress",
    title: "Création de Site WordPress Professionnel sur Mesure | WP Solution",
    headline: "Des sites WordPress sur mesure qui convertissent",
    description: "Conception et d\u00e9veloppement de sites WordPress professionnels : vitrines, blogs, sites institutionnels et landing pages. Design personnalis\u00e9, performance optimis\u00e9e, SEO d\u00e8s la construction.",
    icon: "\ud83c\udfa8",
    heroImage: "/images/service-web.png",
    features: [
      "Design 100% personnalis\u00e9 (pas de template achet\u00e9)",
      "Th\u00e8me sur mesure ou Elementor Pro",
      "Responsive mobile-first",
      "Core Web Vitals optimis\u00e9es",
      "SEO technique int\u00e9gr\u00e9",
      "Formation \u00e0 l'administration",
    ],
    benefits: [
      { title: "Design unique", desc: "Votre site refl\u00e8te VOTRE identit\u00e9 visuelle, pas un template utilis\u00e9 par 10 000 autres." },
      { title: "Performance", desc: "Score Lighthouse 90+ garanti. Chargement en moins d'une seconde." },
      { title: "\u00c9volutif", desc: "Architecture modulaire qui grandit avec votre activit\u00e9 : nouveau service = nouvelle page en quelques clics." },
      { title: "Autonome", desc: "Vous prenez la main sur le contenu. Formation compl\u00e8te à l'administration WordPress incluse." },
    ],
    process: [
      { step: "01", title: "Brief & wireframes", desc: "Atelier de cadrage, benchmark concurrentiel, zoning des pages, arborescence." },
      { step: "02", title: "Design UI/UX", desc: "Maquettes haute fid\u00e9lit\u00e9 sur Figma. 2 tours de r\u00e9visions inclus. Validation avant d\u00e9veloppement." },
      { step: "03", title: "D\u00e9veloppement", desc: "Int\u00e9gration WordPress, plugins essentiels, optimisation Core Web Vitals, tests cross-browser." },
      { step: "04", title: "Livraison", desc: "Mise en ligne, indexation Google, formation, documentation, support post-livraison 30 jours." },
    ],
    faq: [
      { q: "Combien de temps pour cr\u00e9er un site ?", a: "Un site vitrine : 3 \u00e0 4 semaines. Un site complexe (multilingue, e-commerce) : 6 \u00e0 10 semaines." },
      { q: "Utilisez-vous des templates ?", a: "Non. Chaque design est cr\u00e9\u00e9 sur mesure dans Figma, puis int\u00e9gr\u00e9 en code propre. Vous \u00eates propri\u00e9taire de 100% du code." },
      { q: "Le site sera-t-il r\u00e9f\u00e9renc\u00e9 sur Google ?", a: "Oui. SEO technique int\u00e9gr\u00e9 d\u00e8s la construction : balises meta, schema.org, sitemap XML, URLs propres, vitesse de chargement optimis\u00e9e." },
      { q: "Puis-je modifier le contenu moi-m\u00eame ?", a: "Absolument. WordPress + Elementor Pro vous permettent de modifier textes, images, pages sans toucher au code. Formation de 2h incluse." },
    ],
    pricing: [
      { plan: "Vitrine", price: "\u00e0 partir de 2 900\u20ac", desc: "Site vitrine professionnel", features: ["Jusqu'\u00e0 8 pages", "Design sur mesure", "Responsive", "SEO de base", "Formation admin"] },
      { plan: "Business", price: "\u00e0 partir de 5 900\u20ac", desc: "Site complet + blog", features: ["Pages illimit\u00e9es", "Blog int\u00e9gr\u00e9", "Multi-langue", "SEO avanc\u00e9", "Support 6 mois"] },
      { plan: "Sur mesure", price: "Sur devis", desc: "Projet complexe", features: ["Int\u00e9grations API", "Portail client", "Multi-sites", "Performance max", "Accompagnement d\u00e9di\u00e9"] },
    ],
  },
  {
    slug: "securite-wordpress",
    title: "Sécurité WordPress & Protection Anti-Hack 24/7 | WP Solution",
    headline: "Prot\u00e9gez votre site contre 99,9% des attaques",
    description: "Audit de s\u00e9curit\u00e9 complet, d\u00e9tection de malware, firewall applicatif, hardening syst\u00e8me, sauvegardes chiffr\u00e9es et plan de reprise d'activit\u00e9.",
    icon: "\ud83d\udd12",
    heroImage: "/images/service-security.png",
    features: [
      "Audit complet de vuln\u00e9rabilit\u00e9s (OWASP Top 10)",
      "D\u00e9tection et suppression de malware",
      "Firewall WAF personnalis\u00e9",
      "Hardening serveur + WordPress",
      "Sauvegardes chiffr\u00e9es automatiques",
      "Monitoring 24/7 + alertes temps r\u00e9el",
    ],
    benefits: [
      { title: "R\u00e9activit\u00e9", desc: "Alerte en moins de 2 minutes en cas d'intrusion. Intervention sous 4h ouvr\u00e9es." },
      { title: "Anticipation", desc: "Mises \u00e0 jour de s\u00e9curit\u00e9 appliqu\u00e9es dans les 24h. Veille permanente sur les CVE." },
      { title: "R\u00e9silience", desc: "Backups quotidiens chiffr\u00e9s stock\u00e9s sur 3 sites g\u00e9ographiques diff\u00e9rents." },
      { title: "Conformit\u00e9", desc: "RGPD, SSL, politique de mot de passe, logs d'audit tra\u00e7ables." },
    ],
    process: [
      { step: "01", title: "Audit initial", desc: "Scan complet : vuln\u00e9rabilit\u00e9s, malware, plugins obsol\u00e8tes, configuration serveur. Rapport d\u00e9taill\u00e9 avec priorit\u00e9s." },
      { step: "02", title: "Nettoyage", desc: "Suppression des malwares, correction des backdoors, restauration propre si n\u00e9cessaire." },
      { step: "03", title: "Hardening", desc: "S\u00e9curisation : WAF, restriction d'acc\u00e8s, authentification 2FA, politique de mots de passe, headers s\u00e9curit\u00e9." },
      { step: "04", title: "Monitoring", desc: "D\u00e9ploiement du monitoring 24/7, alertes temps r\u00e9el, backups automatiques, rapport mensuel." },
    ],
    faq: [
      { q: "Mon site a \u00e9t\u00e9 hack\u00e9, pouvez-vous le r\u00e9parer ?", a: "Oui. 95% de nos interventions de d\u00e9sinfection r\u00e9ussissent en moins de 24h. Nous nettoyons, s\u00e9curisons et remettons en ligne." },
      { q: "Quelle fr\u00e9quence de backups ?", a: "Quotidienne par d\u00e9faut. Horodat\u00e9e, chiffr\u00e9e, stock\u00e9e sur 3 emplacements. R\u00e9tention de 30 jours." },
      { q: "Le firewall ralentit-il mon site ?", a: "Non. Notre WAF est optimis\u00e9 pour filtrer les requ\u00eates malveillantes en < 1ms sans impacter les visiteurs l\u00e9gitimes." },
      { q: "Proposez-vous une garantie ?", a: "Oui. Si votre site est compromis alors que nous assurons sa maintenance, nous le d\u00e9sinfectons gratuitement." },
    ],
    pricing: [
      { plan: "Audit", price: "490\u20ac", desc: "Audit complet + rapport", features: ["Scan vuln\u00e9rabilit\u00e9s", "Analyse malware", "Rapport d\u00e9taill\u00e9", "Recommandations", "Devis r\u00e9paration"] },
      { plan: "S\u00e9curisation", price: "\u00e0 partir de 1 490\u20ac", desc: "Audit + nettoyage + hardening", features: ["Nettoyage malware", "Firewall WAF", "Hardening complet", "2FA", "Documentation"] },
      { plan: "Maintenance", price: "\u00e0 partir de 149\u20ac/mois", desc: "Surveillance continue", features: ["Monitoring 24/7", "Backups quotidiens", "M\u00e0J s\u00e9curit\u00e9", "Support prioritaire", "Rapport mensuel"] },
    ],
  },
  {
    slug: "maintenance-wordpress",
    title: "Maintenance WordPress Pro & Support Technique | WP Solution",
    headline: "Votre site WordPress toujours op\u00e9rationnel",
    description: "Maintenance pr\u00e9ventive et curative de sites WordPress : mises \u00e0 jour, sauvegardes, optimisation, support technique. Gagnez en s\u00e9r\u00e9nit\u00e9.",
    icon: "\ud83d\udd27",
    heroImage: "/images/service-maintenance.png",
    features: [
      "Mises \u00e0 jour WordPress, th\u00e8mes et plugins",
      "Sauvegardes automatiques quotidiennes",
      "Optimisation base de donn\u00e9es et m\u00e9dia",
      "Monitoring uptime et performance",
      "Support technique illimit\u00e9",
      "Rapport mensuel d'activit\u00e9",
    ],
    benefits: [
      { title: "Z\u00e9ro panne", desc: "Uptime garanti 99,9%. D\u00e9tection des probl\u00e8mes avant qu'ils n'affectent vos visiteurs." },
      { title: "Performances", desc: "Optimisation continue : cache, compression images, base de donn\u00e9es, CDN." },
      { title: "S\u00e9r\u00e9nit\u00e9", desc: "Vous ne vous occupez de rien. Nous g\u00e9rons tout en arri\u00e8re-plan." },
      { title: "\u00c9conomies", desc: "Un probl\u00e8me d\u00e9tect\u00e9 t\u00f4t co\u00fbte 10x moins cher qu'une panne majeure." },
    ],
    process: [
      { step: "01", title: "Diagnostic", desc: "Analyse compl\u00e8te de votre site : version WordPress, plugins, th\u00e8me, performance, s\u00e9curit\u00e9." },
      { step: "02", title: "Mise \u00e0 niveau", desc: "Mise \u00e0 jour de tous les composants, nettoyage, optimisation initiale." },
      { step: "03", title: "Surveillance", desc: "D\u00e9ploiement du monitoring, configuration des alertes, plan de backups." },
      { step: "04", title: "Optimisation continue", desc: "Rapports mensuels, recommandations, ajustements, veille technologique." },
    ],
    faq: [
      { q: "Que se passe-t-il si mon site tombe en panne ?", a: "Alerte automatique en moins de 5 minutes. Intervention sous 2h en journ\u00e9e, 4h en soir\u00e9e/we. Backup restauration en 15 minutes si n\u00e9cessaire." },
      { q: "Incluez-vous les mises \u00e0 jour des plugins payants ?", a: "Oui si vous nous fournissez les licences. Sinon nous vous indiquons lesquelles sont essentielles et lesquelles peuvent \u00eatre remplac\u00e9es par des alternatives gratuites." },
      { q: "Puis-je r\u00e9silier \u00e0 tout moment ?", a: "Oui. Pas d'engagement. Un mois de pr\u00e9avis. Vous recevez une archive compl\u00e8te de votre site." },
      { q: "Proposez-vous l'h\u00e9bergement ?", a: "Nous travaillons avec des h\u00e9bergeurs partenaires (OVH, Infomaniak, Cloudways) ou g\u00e9rons votre VPS existant." },
    ],
    pricing: [
      { plan: "Essentiel", price: "99\u20ac/mois", desc: "Maintenance de base", features: ["M\u00e0J mensuelles", "Backups hebdo", "Monitoring uptime", "Support email", "Rapport trimestriel"] },
      { plan: "Pro", price: "199\u20ac/mois", desc: "Maintenance compl\u00e8te", features: ["M\u00e0J hebdo", "Backups quotidiens", "Optimisation perf", "Support t\u00e9l\u00e9phone", "Rapport mensuel"] },
      { plan: "Entreprise", price: "399\u20ac/mois", desc: "Surveillance renforc\u00e9e", features: ["M\u00e0J \u00e0 la demande", "Backups temps r\u00e9el", "CDN inclus", "Support 24/7", "D\u00e9di\u00e9 technique"] },
    ],
  },
  {
    slug: "referencer-site",
    title: "Référencement SEO & Stratégie de Visibilité Google | WP Solution",
    headline: "Soyez visible l\u00e0 o\u00f9 vos clients vous cherchent",
    description: "Strat\u00e9gie SEO compl\u00e8te : audit technique, optimisation on-page, netlinking, content marketing, suivi de positions. R\u00e9sultats mesurables.",
    icon: "\ud83d\udcc8",
    heroImage: "/images/service-seo.png",
    features: [
      "Audit technique SEO complet",
      "Optimisation on-page (balises, contenu, structure)",
      "Strat\u00e9gie de netlinking",
      "Content marketing & r\u00e9daction SEO",
      "Suivi de positions et trafic",
      "Rapport mensuel d\u00e9taill\u00e9",
    ],
    benefits: [
      { title: "Trafic qualifi\u00e9", desc: "Attirez des visiteurs qui cherchent D\u00c9J\u00c0 ce que vous proposez. Conversion 3x sup\u00e9rieure au paid." },
      { title: "Rentable", desc: "ROI croissant dans le temps. Un article bien positionn\u00e9 g\u00e9n\u00e8re du trafic pendant des ann\u00e9es." },
      { title: "Durable", desc: "Contrairement aux ads, le SEO ne s'arr\u00eate pas quand vous arr\u00eatez de payer." },
      { title: "Mesurable", desc: "Positions, trafic organique, conversions, revenus. Chaque action est tra\u00e7able." },
    ],
    process: [
      { step: "01", title: "Audit SEO", desc: "Analyse technique, s\u00e9mantique, concurrentielle. Keyword research approfondie. Plan d'action prioris\u00e9." },
      { step: "02", title: "Optimisation", desc: "Corrections techniques, rewriting des pages cl\u00e9s, architecture de siloing, maillage interne." },
      { step: "03", title: "Contenu", desc: "R\u00e9daction d'articles optimis\u00e9s, optimisation des pages existantes, strat\u00e9gie de mots-cl\u00e9s longue tra\u00eene." },
      { step: "04", title: "Netlinking", desc: "Acquisition de backlinks qualitatifs, partenariats, PR digitale, guest blogging." },
    ],
    faq: [
      { q: "Combien de temps pour voir des r\u00e9sultats ?", a: "Les premiers signes en 1 \u00e0 3 mois. Des r\u00e9sultats significatifs en 6 \u00e0 12 mois. Le SEO est un investissement long terme." },
      { q: "Garantissez-vous la 1\u00e8re position ?", a: "Non, et m\u00e9fiez-vous de ceux qui le font. Nous garantissons une am\u00e9lioration mesurable de votre trafic et de vos positions." },
      { q: "Faites-vous du Black Hat ?", a: "Jamais. Pas de link farming, pas de contenu dupliqu\u00e9, pas de techniques interdites par Google. Notre r\u00e9putation en d\u00e9pend." },
      { q: "Sur quels moteurs optimisez-vous ?", a: "Principalement Google (90% du march\u00e9 fran\u00e7ais). Bing et DuckDuckGo sont optimis\u00e9s par ricochet." },
    ],
    pricing: [
      { plan: "Audit", price: "990\u20ac", desc: "Audit + plan d'action", features: ["Audit technique", "Audit s\u00e9mantique", "Benchmark concurrentiel", "Plan d'action", "Rapport 30 pages"] },
      { plan: "SEO Boost", price: "\u00e0 partir de 1 490\u20ac/mois", desc: "Accompagnement mensuel", features: ["Optimisation on-page", "2 articles/mois", "Netlinking", "Suivi positions", "Rapport mensuel"] },
      { plan: "SEO Max", price: "\u00e0 partir de 3 900\u20ac/mois", desc: "Strat\u00e9gie compl\u00e8te", features: ["Tout SEO Boost", "Content illimit\u00e9", "Campagne PR", "Formation interne", "D\u00e9di\u00e9 SEO"] },
    ],
  },
  {
    slug: "agence-woocommerce",
    title: "Agence WooCommerce & Création de Boutique E-commerce | WP Solution",
    headline: "Votre boutique en ligne qui vend toute l'ann\u00e9e",
    description: "Conception et d\u00e9veloppement de boutiques e-commerce performantes avec WooCommerce. Design optimis\u00e9 conversion, paiements s\u00e9curis\u00e9s, logistique int\u00e9gr\u00e9e.",
    icon: "\ud83d\udecd\ufe0f",
    heroImage: "/images/service-ecommerce.png",
    features: [
      "Design optimis\u00e9 pour la conversion",
      "Paiements s\u00e9curis\u00e9s (Stripe, PayPal, etc.)",
      "Gestion des stocks et commandes",
      "Emails transactionnels personnalis\u00e9s",
      "SEO e-commerce int\u00e9gr\u00e9",
      "Analytics et suivi de conversion",
    ],
    benefits: [
      { title: "Conversion", desc: "Parcours d'achat optimis\u00e9 : checkout en 3 clics, paiement express, r\u00e9cup\u00e9ration paniers abandonn\u00e9s." },
      { title: "Scalable", desc: "De 10 produits \u00e0 10 000. WooCommerce \u00e9volue avec votre catalogue sans ralentir." },
      { title: "Int\u00e9gr\u00e9", desc: "Connexion \u00e0 votre ERP, comptabilit\u00e9, transporteurs, marketplaces (Amazon, Cdiscount)." },
      { title: "Mesurable", desc: "Suivi CA, panier moyen, taux de conversion, ROI par canal. Dashboard en temps r\u00e9el." },
    ],
    process: [
      { step: "01", title: "Cadrage", desc: "D\u00e9finition du catalogue, des modes de livraison, des moyens de paiement, des int\u00e9grations n\u00e9cessaires." },
      { step: "02", title: "Design UX", desc: "Wireframes du parcours d'achat, maquettes des pages produit/cat\u00e9gorie/panier/checkout." },
      { step: "03", title: "D\u00e9veloppement", desc: "Configuration WooCommerce, int\u00e9gration paiements, logistique, tests de commande end-to-end." },
      { step: "04", title: "Lancement", desc: "Mise en ligne, recettage complet, formation \u00e0 la gestion des commandes, support post-lancement." },
    ],
    faq: [
      { q: "WooCommerce ou Shopify ?", a: "WooCommerce si vous voulez la propri\u00e9t\u00e9 totale de votre boutique, des co\u00fbts de transaction plus bas et une personnalisation illimit\u00e9e. Shopify si vous voulez une solution cl\u00e9-en-main sans technicit\u00e9." },
      { q: "Quels moyens de paiement sont int\u00e9gr\u00e9s ?", a: "Cartes bancaires (Stripe), PayPal, Apple Pay, Google Pay, virement, paiement en plusieurs fois (Alma, Klarna)." },
      { q: "Puis-je vendre sur Amazon / Cdiscount ?", a: "Oui. Nous int\u00e9grons des plugins de synchronisation pour vendre sur les marketplaces depuis votre back-office WooCommerce." },
      { q: "Quel est le co\u00fbt par transaction ?", a: "Avec Stripe : 1,5% + 0,25\u20ac par transaction. Pas de frais mensuels WooCommerce. Vous gardez 100% de votre marge." },
    ],
    pricing: [
      { plan: "Starter", price: "\u00e0 partir de 4 900\u20ac", desc: "Boutique jusqu'\u00e0 100 produits", features: ["Design sur mesure", "50 produits", "Stripe/PayPal", "Emails", "Support 3 mois"] },
      { plan: "Business", price: "\u00e0 partir de 9 900\u20ac", desc: "Boutique compl\u00e8te", features: ["Design premium", "Produits illimit\u00e9s", "Multi-paiements", "Marketplaces", "Support 6 mois"] },
      { plan: "Enterprise", price: "Sur devis", desc: "E-commerce complexe", features: ["Multi-boutiques", "ERP int\u00e9gr\u00e9", "B2B + B2C", "Personnalisation", "D\u00e9di\u00e9 technique"] },
    ],
  },
  {
    slug: "developpement-wordpress",
    title: "Développement WordPress Sur Mesure & Plugins Custom | WP Solution",
    headline: "Des fonctionnalit\u00e9s sur mesure pour WordPress",
    description: "D\u00e9veloppement de plugins custom, APIs, th\u00e8mes avanc\u00e9s et int\u00e9grations complexes. Quand WordPress standard ne suffit pas, nous le poussons plus loin.",
    icon: "\ud83d\udcbb",
    heroImage: "/images/service-dev.png",
    features: [
      "D\u00e9veloppement de plugins sur mesure",
      "Int\u00e9gration API tierces (CRM, ERP, PIM)",
      "Th\u00e8mes avanc\u00e9s avec logique m\u00e9tier",
      "Migration de donn\u00e9es et plateformes",
      "Optimisation performances avanc\u00e9e",
      "Architecture headless / JAMstack",
    ],
    benefits: [
      { title: "Sur mesure", desc: "Chaque ligne de code est \u00e9crite pour VOTRE besoin. Pas de plugin g\u00e9n\u00e9rique alourdi de fonctions inutiles." },
      { title: "Performance", desc: "Code optimis\u00e9, requ\u00eates SQL efficaces, cache intelligent. Votre site reste rapide m\u00eame avec des fonctionnalit\u00e9s complexes." },
      { title: "Maintenable", desc: "Documentation, tests unitaires, standards PSR. Un autre d\u00e9veloppeur peut reprendre le projet." },
      { title: "S\u00e9curis\u00e9", desc: "Sanitization des inputs, requ\u00eates pr\u00e9par\u00e9es, audit de code. Votre custom ne cr\u00e9e pas de failles." },
    ],
    process: [
      { step: "01", title: "Sp\u00e9cifications", desc: "Cahier des charges fonctionnel, architecture technique, choix des technologies, estimation pr\u00e9cise." },
      { step: "02", title: "D\u00e9veloppement", desc: "Sprints de 2 semaines, d\u00e9monstrations r\u00e9guli\u00e8res, it\u00e9rations bas\u00e9es sur vos retours." },
      { step: "03", title: "Tests", desc: "Tests unitaires, tests d'int\u00e9gration, tests de charge, recette fonctionnelle compl\u00e8te." },
      { step: "04", title: "Livraison", desc: "D\u00e9ploiement, documentation technique, formation, support post-livraison." },
    ],
    faq: [
      { q: "Pouvez-vous int\u00e9grer notre CRM/ERP ?", a: "Oui. Nous int\u00e9grons Salesforce, HubSpot, Odoo, SAP, Microsoft Dynamics et tout syst\u00e8me disposant d'une API REST ou SOAP." },
      { q: "Le code nous appartient-il ?", a: "Oui. Vous \u00eates propri\u00e9taire de 100% du code source. Nous livrons le d\u00e9p\u00f4t Git complet avec documentation." },
      { q: "Puis-je ajouter des fonctionnalit\u00e9s apr\u00e8s la livraison ?", a: "Absolument. L'architecture est con\u00e7ue pour \u00eatre \u00e9volutive. Chaque nouvelle fonctionnalit\u00e9 est d\u00e9velopp\u00e9e comme une extension du code existant." },
      { q: "Quelle stack technique utilisez-vous ?", a: "PHP 8.3+, WordPress 6.5+, MySQL/MariaDB, JavaScript ES6+, REST API, GraphQL si n\u00e9cessaire. Tests avec PHPUnit et Jest." },
    ],
    pricing: [
      { plan: "Plugin", price: "\u00e0 partir de 2 900\u20ac", desc: "Plugin custom", features: ["1 fonctionnalit\u00e9", "Documentation", "Tests", "Support 3 mois", "Mise \u00e0 jour WP"] },
      { plan: "Int\u00e9gration", price: "\u00e0 partir de 4 900\u20ac", desc: "API + WordPress", features: ["Int\u00e9gration API", "Synchronisation", "Dashboard", "Tests", "Support 6 mois"] },
      { plan: "Projet", price: "Sur devis", desc: "D\u00e9veloppement complexe", features: ["Architecture sur mesure", "Multi-API", "Tests complets", "Formation", "Support 12 mois"] },
    ],
  },
  {
    slug: "creer-un-site-web-avec-ia",
    title: "Créer un Site Web avec l'IA — Design & Contenu Assistés | WP Solution",
    headline: "Concevez votre site assist\u00e9 par intelligence artificielle",
    description: "Utilisez la puissance de l'IA pour acc\u00e9l\u00e9rer la conception de votre site web : g\u00e9n\u00e9ration de contenu, optimisation SEO automatique, personnalisation utilisateur et A/B testing intelligent.",
    icon: "\ud83e\udde0",
    heroImage: "/images/service-ai-site.png",
    features: [
      "G\u00e9n\u00e9ration de contenu assist\u00e9e par IA",
      "Optimisation SEO automatique",
      "Personnalisation du contenu par visiteur",
      "A/B testing intelligent",
      "Chatbot int\u00e9gr\u00e9 au site",
      "Analyse pr\u00e9dictive des comportements",
    ],
    benefits: [
      { title: "Rapidit\u00e9", desc: "La r\u00e9daction de contenu est 5x plus rapide. Votre site est en ligne en 2 semaines au lieu de 2 mois." },
      { title: "Personnalisation", desc: "Chaque visiteur voit un contenu adapt\u00e9 \u00e0 son profil, son historique, sa localisation." },
      { title: "SEO auto", desc: "Meta descriptions, balises alt, structure de titres g\u00e9n\u00e9r\u00e9es automatiquement et optimis\u00e9es." },
      { title: "Conversion", desc: "L'IA analyse les parcours et sugg\u00e8re les modifications qui augmentent votre taux de conversion." },
    ],
    process: [
      { step: "01", title: "Brief IA", desc: "D\u00e9finition de votre cible, de vos objectifs et des donn\u00e9es disponibles pour entra\u00eener les mod\u00e8les." },
      { step: "02", title: "G\u00e9n\u00e9ration", desc: "Cr\u00e9ation du contenu, des visuels et de la structure par IA. R\u00e9vision et affinage humain." },
      { step: "03", title: "Int\u00e9gration", desc: "D\u00e9veloppement WordPress avec modules IA int\u00e9gr\u00e9s : chatbot, personnalisation, analytics." },
      { step: "04", title: "Optimisation", desc: "A/B testing, ajustements bas\u00e9s sur les donn\u00e9es r\u00e9elles, am\u00e9lioration continue." },
    ],
    faq: [
      { q: "Le contenu g\u00e9n\u00e9r\u00e9 par IA est-il original ?", a: "Oui. Nous utilisons des mod\u00e8les de g\u00e9n\u00e9ration avanc\u00e9s avec v\u00e9rification anti-plagiat. Le contenu est ensuite relu et adapt\u00e9 par nos r\u00e9dacteurs." },
      { q: "Google p\u00e9nalise-t-il le contenu IA ?", a: "Non. Google p\u00e9nalise le contenu de MAUVAISE QUALIT\u00c9, pas le contenu IA. Notre approche combine g\u00e9n\u00e9ration IA + expertise humaine pour un contenu de qualit\u00e9." },
      { q: "Puis-je modifier le contenu g\u00e9n\u00e9r\u00e9 ?", a: "Absolument. Vous avez le contr\u00f4le total. L'IA est un assistant, pas un rempla\u00e7ant." },
      { q: "Quel est le co\u00fbt compar\u00e9 \u00e0 un site classique ?", a: "20 \u00e0 30% moins cher gr\u00e2ce \u00e0 l'acc\u00e9l\u00e9ration de la production de contenu. Livr\u00e9 2x plus vite." },
    ],
    pricing: [
      { plan: "IA Assist\u00e9", price: "\u00e0 partir de 2 400\u20ac", desc: "Site avec contenu IA", features: ["Design sur mesure", "Contenu g\u00e9n\u00e9r\u00e9 IA", "SEO auto", "Chatbot", "Support 3 mois"] },
      { plan: "IA Pro", price: "\u00e0 partir de 4 900\u20ac", desc: "Site + personnalisation", features: ["Tout IA Assist\u00e9", "Personnalisation contenu", "A/B testing", "Analytics IA", "Support 6 mois"] },
      { plan: "IA Enterprise", price: "Sur devis", desc: "Solution IA compl\u00e8te", features: ["Multi-sites", "CRM int\u00e9gr\u00e9", "Pr\u00e9diction comportement", "D\u00e9di\u00e9 IA", "Formation \u00e9quipe"] },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find(s => s.slug === slug);
}

// Locale-aware lookup
import { SERVICE_PAGES_EN } from "./services_en";
import { SERVICE_PAGES_ES } from "./services_es";
import type { Locale } from "../i18n/translations";

const POOLS: Record<Locale, ServicePage[]> = {
  fr: SERVICE_PAGES,
  en: SERVICE_PAGES_EN,
  es: SERVICE_PAGES_ES,
};

export function getServiceForLocale(slug: string, locale: Locale): ServicePage {
  return POOLS[locale].find(s => s.slug === slug) ?? POOLS.fr.find(s => s.slug === slug)!;
}

