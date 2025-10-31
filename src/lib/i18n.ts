export type Lang = "en" | "es";

export const dict = {
  en: {
    brandName: "Dr. Florencia Ferrandino Lamarca",
    nav: { services: "Services", about: "About", approach: "Approach", testimonials: "Testimonials", contact: "Contact" },
    ctaPrimary: "Book a consultation",
    hero: {
      title: "Compassionate, evidence-based therapy",
      lead:
        "Helping adults navigate anxiety, depression, burnout, and life transitions. In-person in Valencia & secure online sessions.",
      getInTouch: "Get in touch",
      explore: "Explore services",
      bullets: ["Confidential", "Flexible scheduling", "CBT • ACT • Mindfulness", "English & Spanish"],
      portraitAlt: "Dr. Florencia Ferrandino Lamarca portrait",
    },
    services: {
      title: "Services",
      lead: "Short-term and longer-term therapy tailored to your goals.",
      items: [
        { title: "Anxiety & Stress", desc: "CBT & mindfulness to reduce worry, rumination, and panic." },
        { title: "Depression", desc: "Behavioral activation and values-based interventions." },
        { title: "Burnout & Work", desc: "Boundaries, resilience, and sustainable routines." },
        { title: "Grief & Loss", desc: "Compassionate space to process and integrate." },
        { title: "Life Transitions", desc: "Support through relocation, parenthood, separation." },
        { title: "Couples (Brief)", desc: "Communication tools and conflict de-escalation." }
      ]
    },
    about: {
      title: "About Dr. Florencia Ferrandino Lamarca",
      p1:
        "Licensed psychologist (PhD, University of Barcelona). 10+ years helping adults using CBT, ACT, and compassion-focused therapy. Registered with COPCV.",
      p2:
        "I believe change happens in a safe, collaborative space. We’ll set clear goals, track progress, and build practical skills you can use between sessions.",
      stats: { years: "Years experience", avg: "Avg. sessions", sat: "Satisfaction" },
      officeAlt: "Calm therapy office"
    },
    approach: {
      title: "How therapy works",
      steps: [
        { step: "01", title: "Discovery", text: "Free 15-min call to clarify needs & fit." },
        { step: "02", title: "Assessment", text: "First 1–2 sessions map patterns & goals." },
        { step: "03", title: "Treatment", text: "Weekly sessions + brief home practices." }
      ]
    },
    testimonials: {
      title: "What clients say",
      quotes: [
        "I felt understood and had practical tools from day one.",
        "Gentle, structured, and genuinely helpful for my anxiety.",
        "Sessions gave me clarity—and a plan I could follow."
      ]
    },
    contact: {
      title: "Contact",
      lead: "Fill the form to request availability. I typically reply within 24 hours.",
      phone: "+34 960 000 000",
      email: "hello@drjanedoe.com",
      location: "Valencia & Online",
      hours: "Mon–Fri, 9:00–19:00",
      form: { name: "Name", email: "Email", message: "Message", send: "Send", disclaimer: "By submitting, you agree to be contacted about scheduling." }
    },
    footer: { backToTop: "Back to top", privacy: "Privacy" },
    jsonLdDesc: "Evidence-based psychotherapy for anxiety, depression, and life transitions. In-person & online sessions."
  },

  es: {
    brandName: "Dra. Florencia Ferrandino Lamarca",
    nav: { services: "Servicios", about: "Sobre mí", approach: "Metodología", testimonials: "Testimonios", contact: "Contacto" },
    ctaPrimary: "Reservar una consulta",
    hero: {
      title: "Terapia compasiva y basada en la evidencia",
      lead:
        "Acompaño a adultos con ansiedad, depresión, burnout y transiciones vitales. Sesiones presenciales en Valencia y online de forma segura.",
      getInTouch: "Escríbeme",
      explore: "Ver servicios",
      bullets: ["Confidencial", "Horarios flexibles", "TCC • ACT • Mindfulness", "Inglés y español"],
      portraitAlt: "Retrato de la Dra. Florencia Ferrandino Lamarca",
    },
    services: {
      title: "Servicios",
      lead: "Intervenciones a corto y largo plazo adaptadas a tus objetivos.",
      items: [
        { title: "Ansiedad y Estrés", desc: "TCC y mindfulness para reducir preocupación, rumiación y pánico." },
        { title: "Depresión", desc: "Activación conductual e intervenciones basadas en valores." },
        { title: "Burnout y Trabajo", desc: "Límites, resiliencia y rutinas sostenibles." },
        { title: "Duelo y Pérdida", desc: "Espacio compasivo para procesar e integrar." },
        { title: "Transiciones Vitales", desc: "Apoyo en mudanzas, maternidad/paternidad, separaciones." },
        { title: "Pareja (breve)", desc: "Herramientas de comunicación y desescalada del conflicto." }
      ]
    },
    about: {
      title: "Sobre la Dra. Florencia Ferrandino Lamarca",
      p1:
        "Psicóloga sanitaria (PhD, Universidad de Barcelona). Más de 10 años acompañando a adultos con TCC, ACT y terapia focalizada en la compasión. Colegiada en COPCV.",
      p2:
        "Creo que el cambio ocurre en un espacio seguro y colaborativo. Definiremos objetivos claros, haremos seguimiento y practicaremos habilidades entre sesiones.",
      stats: { years: "Años de experiencia", avg: "Sesiones promedio", sat: "Satisfacción" },
      officeAlt: "Consulta de terapia tranquila"
    },
    approach: {
      title: "Cómo trabajo",
      steps: [
        { step: "01", title: "Toma de contacto", text: "Llamada gratuita de 15 min para aclarar necesidad y encaje." },
        { step: "02", title: "Evaluación", text: "En 1–2 sesiones mapeamos patrones y objetivos." },
        { step: "03", title: "Intervención", text: "Sesiones semanales + prácticas breves en casa." }
      ]
    },
    testimonials: {
      title: "Lo que dicen mis pacientes",
      quotes: [
        "Me sentí comprendida y con herramientas prácticas desde el primer día.",
        "Un enfoque amable, estructurado y realmente útil para mi ansiedad.",
        "Las sesiones me dieron claridad… y un plan que pude seguir."
      ]
    },
    contact: {
      title: "Contacto",
      lead: "Completa el formulario para solicitar disponibilidad. Suelo responder en 24 horas.",
      phone: "+34 960 000 000",
      email: "hello@drjanedoe.com",
      location: "Valencia y Online",
      hours: "Lun–Vie, 9:00–19:00",
      form: { name: "Nombre", email: "Email", message: "Mensaje", send: "Enviar", disclaimer: "Al enviar aceptas ser contactad@ para agendar." }
    },
    footer: { backToTop: "Volver arriba", privacy: "Privacidad" },
    jsonLdDesc: "Psicoterapia basada en la evidencia para ansiedad, depresión y transiciones vitales. Presencial y online."
  }
} as const;

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("lang") as Lang | null;
  if (stored === "en" || stored === "es") return stored;
  const nav = navigator.language.toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}
