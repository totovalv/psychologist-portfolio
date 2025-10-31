"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { dict, type Lang, type Translations } from "@/lib/i18n";
import { LanguageProvider, useLang } from "@/components/i18n/LanguageProvider";
import React from "react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function HomeClient({ initialLang }: { initialLang: Lang }) {
  return (
    <LanguageProvider initialLang={initialLang}>
      <HomeContent />
    </LanguageProvider>
  );
}

function HomeContent() {
  const { lang, toggle } = useLang();
  const t: Translations = useMemo(() => dict[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Florencia Ferrandino Lamarca",
    medicalSpecialty: ["MentalHealth"],
    areaServed: "Spain",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Valencia",
      addressCountry: "ES",
    },
    email: t.contact.email,
    telephone: t.contact.phone,
    url: "https://drjanedoe.com",
    description: t.jsonLdDesc,
  };

  return (
    <main>
      <script
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            {t.brandName}
          </a>
          <nav className="hidden sm:flex gap-6 text-sm">
            <a href="#services" className="hover:text-brand-700">
              {t.nav.services}
            </a>
            <a href="#about" className="hover:text-brand-700">
              {t.nav.about}
            </a>
            <a href="#approach" className="hover:text-brand-700">
              {t.nav.approach}
            </a>
            <a href="#testimonials" className="hover:text-brand-700">
              {t.nav.testimonials}
            </a>
            <a href="#contact" className="hover:text-brand-700">
              {t.nav.contact}
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact">
              <Button className="rounded-2xl hidden sm:inline-flex">
                {t.ctaPrimary}
              </Button>
            </a>
            <Button
              variant="outline"
              className="rounded-2xl px-3 py-2 text-xs"
              aria-label="Toggle language"
              onClick={toggle}
              title={lang === "en" ? "Cambiar a español" : "Switch to English"}
            >
              {lang.toUpperCase()}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.div
            {...fadeUp}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                {t.hero.title}
              </h1>
              <p className="mt-4 text-stone-600">{t.hero.lead}</p>
              <div className="mt-6 flex gap-3">
                <a href="#contact">
                  <Button className="rounded-2xl">{t.hero.getInTouch}</Button>
                </a>
                <a href="#services">
                  <Button variant="outline" className="rounded-2xl">
                    {t.hero.explore}
                  </Button>
                </a>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-stone-600">
                {t.hero.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-600" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] md:aspect-[5/4]">
              <Image
                src="/hero-portrait.jpg"
                alt={t.hero.portraitAlt}
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-semibold">
          {t.services.title}
        </motion.h2>
        <p className="mt-2 text-stone-600">{t.services.lead}</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s) => (
            <motion.div key={s.title} {...fadeUp}>
              <Card className="rounded-2xl h-full">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-stone-600">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {t.about.title}
            </h2>
            <p className="mt-4 text-stone-700">{t.about.p1}</p>
            <p className="mt-3 text-stone-700">{t.about.p2}</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <Stat label={t.about.stats.years} value="10+" />
              <Stat label={t.about.stats.avg} value="8–14" />
              <Stat label={t.about.stats.sat} value="95%" />
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative aspect-[5/4]">
            <Image
              src="/about-office.jpg"
              alt={t.about.officeAlt}
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      {/* Therapy block with one shared background + subtle top/bottom shadow */}
      <section className="relative overflow-hidden">
        {/* single background image */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-[url('/therapy-calm-plant.jpg')] bg-cover bg-center opacity-70 dark:opacity-80" />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* soft top shadow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-16 z-0
               bg-gradient-to-b from-foreground/10 to-transparent
               dark:from-black/40"
        />
        {/* soft bottom shadow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-0
               bg-gradient-to-t from-foreground/10 to-transparent
               dark:from-black/40"
        />

        {/* content (raised above the fades) */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          {/* Approach */}
          <div id="approach">
            <motion.h2
              {...fadeUp}
              className="text-2xl md:text-3xl font-semibold"
            >
              {t.approach.title}
            </motion.h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {t.approach.steps.map((x) => (
                <Card
                  key={x.step}
                  className="rounded-2xl bg-white/80 dark:bg-card/70 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-brand-600 font-semibold">{x.step}</div>
                    <div className="mt-1 font-medium">{x.title}</div>
                    <div className="mt-2 text-sm text-stone-700 dark:text-stone-100">
                      {x.text}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="h-16" />

          {/* Testimonials */}
          <div id="testimonials">
            <motion.h2
              {...fadeUp}
              className="text-2xl md:text-3xl font-semibold"
            >
              {t.testimonials.title}
            </motion.h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {t.testimonials.quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className="rounded-2xl border p-6 bg-white/80 dark:bg-card/70 backdrop-blur-sm"
                >
                  <Quote className="h-5 w-5 opacity-50" />
                  <p className="mt-3 text-stone-700 dark:text-stone-100">
                    “{q}”
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              {t.contact.title}
            </h2>
            <p className="mt-3 text-stone-700">{t.contact.lead}</p>
            <ul className="mt-6 space-y-3 text-stone-700">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t.contact.location}
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t.contact.hours}
              </li>
            </ul>
          </div>
          <ContactForm t={t} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-stone-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()} {t.brandName}
          </span>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-stone-900">
              {t.footer.backToTop}
            </a>
            <a href="/privacy" className="hover:text-stone-900">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-stone-600">{label}</div>
    </div>
  );
}

function ContactForm({ t }: { t: Translations }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [errMsg, setErrMsg] = React.useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      hp: String(formData.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json?.error || "Failed to send");
      }
 
      setStatus("ok");
      form.reset();
    } catch (err: any) {
      setStatus("err");
      setErrMsg(err?.message || "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border p-6 bg-white/90 dark:bg-card/80 backdrop-blur"
    >
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <label className="block text-sm">{t.contact.form.name}</label>
      <input
        name="name"
        required
        className="mt-1 w-full rounded-xl border px-3 py-2"
        placeholder="Jane Doe"
      />

      <label className="block text-sm mt-4">{t.contact.form.email}</label>
      <input
        type="email"
        name="email"
        required
        className="mt-1 w-full rounded-xl border px-3 py-2"
        placeholder="jane@example.com"
      />

      <label className="block text-sm mt-4">{t.contact.form.message}</label>
      <textarea
        name="message"
        rows={5}
        required
        className="mt-1 w-full rounded-xl border px-3 py-2"
        placeholder="How can I help?"
      />

      <Button
        type="submit"
        className="mt-5 rounded-2xl"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : t.contact.form.send}
      </Button>

      <p className="mt-3 text-xs text-stone-500">{t.contact.form.disclaimer}</p>

      {/* Feedback */}
      <div className="mt-3 min-h-5" aria-live="polite">
        {status === "ok" && (
          <span className="text-green-700 dark:text-green-400">
            Thanks! Your message has been sent.
          </span>
        )}
        {status === "err" && (
          <span className="text-red-700 dark:text-red-400">{errMsg}</span>
        )}
      </div>
    </form>
  );
}
