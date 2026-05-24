export type Project = { name: string; sector: string; year?: string; type: "creation" | "refonte" | "ai"; };

export const PROJECTS: Project[] = [
  // IA / signature
  { name: "Hermes Agent", sector: "AI orchestration", year: "2025", type: "ai" },
  { name: "Winrider Blog API", sector: "AI content ops", year: "2025", type: "ai" },
  { name: "Diététicienne Bourgoin", sector: "Santé · Refonte + IA chat", year: "2025", type: "ai" },
  // Web
  { name: "HTC Santé", sector: "Réseau santé · Refonte", year: "2025", type: "refonte" },
  { name: "Installation OpenClaw", sector: "SaaS · Laravel + Stripe", year: "2025", type: "creation" },
  { name: "Winrider", sector: "E-commerce vélo (UAE)", year: "2024", type: "creation" },
  { name: "Diététicienne Vannes", sector: "Santé · Refonte", year: "2024", type: "refonte" },
  { name: "Obagem", sector: "Industrie", year: "2024", type: "creation" },
  { name: "Beach Toy", sector: "Lifestyle", year: "2024", type: "refonte" },
  { name: "Beauty Center", sector: "Beauté", year: "2024", type: "creation" },
  { name: "NOTO CBD", sector: "E-commerce", year: "2024", type: "creation" },
  { name: "TURF.FR", sector: "Média", year: "2023", type: "refonte" },
  { name: "Galerie ADAM", sector: "Art", year: "2023", type: "creation" },
  { name: "Diamantaires Paris", sector: "Luxe", year: "2023", type: "creation" },
  { name: "House of Palm", sector: "Décoration", year: "2023", type: "creation" },
  { name: "Villa Galilée", sector: "Hôtellerie", year: "2023", type: "creation" },
  { name: "Hercule Pro", sector: "B2B", year: "2023", type: "refonte" },
  { name: "Le Coin Barber", sector: "Local", year: "2023", type: "creation" },
  { name: "Cabinet KOPP", sector: "Avocat", year: "2023", type: "creation" },
  { name: "Sainte Union de Douai", sector: "Éducation", year: "2023", type: "refonte" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Daniel Obadia",
    role: "Gérant — Obagem",
    quote:
      "Design sur mesure, épuré et performant. Le site est optimisé pour le SEO et nos visites ont nettement augmenté. Une collaboration efficace et professionnelle.",
  },
  {
    name: "Olivier Soussan",
    role: "Gérant — Franchises Point Soleil",
    quote:
      "Approche centrée sur la performance et le SEO. Site rapide, fluide, parfaitement adapté. La maintenance proactive nous apporte une vraie tranquillité au quotidien.",
  },
  {
    name: "Karim B.",
    role: "Fondateur — Healthtech (2026)",
    quote:
      "Ils ont compris ce qu'on voulait faire en IA avant nous. Agent de qualification opérationnel en 3 semaines, +28% de leads qualifiés dès le 2e mois.",
  },
];

export const STATS = [
  { value: "15+", label: "années d'expérience web" },
  { value: "120+", label: "projets livrés" },
  { value: "24/7", label: "monitoring & support" },
  { value: "< 1 s", label: "temps de chargement moyen" },
];

export const METHOD = [
  {
    step: "01",
    title: "Audit & cadrage",
    body: "On comprend votre activité, vos process, vos data. On identifie ce qui peut être automatisé / augmenté par IA, et ce qui ne doit surtout pas l'être.",
  },
  {
    step: "02",
    title: "Prototype rapide",
    body: "On livre un prototype fonctionnel sous 2 semaines pour valider la direction sur du concret, pas sur des slides.",
  },
  {
    step: "03",
    title: "Build & intégration",
    body: "Développement itératif, démos hebdo. On branche votre stack existante : CRM, outils internes, site, e-commerce.",
  },
  {
    step: "04",
    title: "Run & amélioration",
    body: "Monitoring continu, ajustements basés sur l'usage réel. L'IA s'améliore avec vos feedbacks. Pas de boîte noire.",
  },
];

export const PILLARS = [
  {
    kicker: "01",
    title: "L'IA qui exécute, pas qui parle",
    body:
      "Nous ne vendons pas du « copilote ». Nous livrons des agents qui prennent vos RDV, traitent vos mails, qualifient vos leads, écrivent vos contenus. Mesurés sur des résultats, pas des démos.",
  },
  {
    kicker: "02",
    title: "Une stack lisible",
    body:
      "Pas de magie. Nous documentons chaque pipeline, chaque appel API, chaque prompt. Vous gardez la main, vos données, vos coûts. Aucun lock-in.",
  },
  {
    kicker: "03",
    title: "15 ans de production web",
    body:
      "L'IA est jeune, nous ne le sommes pas. Notre rigueur vient de l'ops web : déploiements zero-downtime, monitoring, sécurité, SEO. L'IA hérite de cette discipline.",
  },
];
