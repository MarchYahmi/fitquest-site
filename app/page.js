'use client'

import { useState } from 'react';

// Translations
const translations = {
  en: {
    nav: {
      logo: "FitQuest",
      tagline: "Your Sports Adventure Starts Here",
      cta: "List Your Retreat"
    },
    hero: {
      title: "Find Your Perfect",
      titleHighlight: "Sports Retreat",
      subtitle: "The marketplace connecting passionate athletes with the best intensive fitness retreats across Europe. CrossFit, Hyrox, trail running, bootcamp — all in one place.",
      searchPlaceholder: "What sport are you looking for?",
      searchButton: "Search Retreats",
      stats: {
        retreats: "Coming Soon",
        countries: "Europe",
        sports: "5+ Sports"
      }
    },
    problem: {
      title: "Tired of Endless Searching?",
      subtitle: "Finding the perfect sports retreat shouldn't be this hard.",
      issues: [
        { title: "Scattered Everywhere", desc: "Offers spread across dozens of different websites" },
        { title: "Dominated by Wellness", desc: "90% of platforms focus on yoga and spa, not real sports" },
        { title: "Hidden Gems Lost", desc: "Amazing intensive retreats with zero visibility" }
      ]
    },
    solution: {
      title: "One Platform. Intensive Sports Only.",
      subtitle: "FitQuest brings together the best performance-focused retreats in Europe",
      features: [
        { icon: "🎯", title: "Smart Filters", desc: "Find by sport, location, date, budget, and skill level" },
        { icon: "💪", title: "Performance Focus", desc: "Only intensive sports — no wellness fluff" },
        { icon: "⚡", title: "Book Easily", desc: "Simple, secure reservation process" },
        { icon: "⭐", title: "Verified Quality", desc: "Every organizer is vetted for excellence" }
      ]
    },
    sports: {
      title: "Your Sport. Your Adventure.",
      list: ["CrossFit", "Hyrox", "Trail Running", "Bootcamp", "HIIT", "Running"]
    },
    destinations: {
      title: "Dream Destinations",
      places: [
        { name: "France", flag: "🇫🇷", count: "Coming soon" },
        { name: "Portugal", flag: "🇵🇹", count: "Coming soon" },
        { name: "Spain", flag: "🇪🇸", count: "Coming soon" },
        { name: "Germany", flag: "🇩🇪", count: "Coming soon" },
        { name: "Italy", flag: "🇮🇹", count: "Coming soon" },
        { name: "Greece", flag: "🇬🇷", count: "Coming soon" }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { num: "1", title: "Search", desc: "Filter by sport, destination, and dates" },
        { num: "2", title: "Compare", desc: "Review prices, programs, and reviews" },
        { num: "3", title: "Book", desc: "Secure your spot in minutes" },
        { num: "4", title: "Train", desc: "Enjoy your dream sports vacation" }
      ]
    },
    cta: {
      title: "Be First to Know",
      subtitle: "Join the waitlist and get early access to exclusive sports retreats",
      placeholder: "Enter your email",
      button: "Get Early Access",
      privacy: "We respect your privacy. Unsubscribe anytime."
    },
    organizers: {
      title: "Are You a Retreat Organizer?",
      subtitle: "List your sports retreat for free and reach thousands of motivated athletes",
      benefits: ["Free listing for founding partners", "Qualified leads delivered to you", "Lower commission than competitors"],
      button: "Become a Founding Partner"
    },
    footer: {
      tagline: "The marketplace for intensive sports retreats in Europe",
      links: ["About", "Contact", "Blog", "FAQ"],
      legal: ["Privacy", "Terms"],
      copyright: "© 2026 FitQuest. All rights reserved."
    }
  },
  fr: {
    nav: {
      logo: "FitQuest",
      tagline: "Votre Aventure Sportive Commence Ici",
      cta: "Référencer Mon Stage"
    },
    hero: {
      title: "Trouvez Votre",
      titleHighlight: "Retraite Sportive",
      subtitle: "La marketplace qui connecte les sportifs passionnés aux meilleures retraites sportives intensives en Europe. CrossFit, Hyrox, trail, bootcamp — tout au même endroit.",
      searchPlaceholder: "Quel sport recherchez-vous ?",
      searchButton: "Rechercher",
      stats: {
        retreats: "Bientôt",
        countries: "Europe",
        sports: "5+ Sports"
      }
    },
    problem: {
      title: "Marre de Chercher Partout ?",
      subtitle: "Trouver la retraite sportive parfaite ne devrait pas être si difficile.",
      issues: [
        { title: "Éparpillées Partout", desc: "Les offres sont dispersées sur des dizaines de sites" },
        { title: "Dominé par le Wellness", desc: "90% des plateformes se concentrent sur yoga et spa" },
        { title: "Pépites Cachées", desc: "D'excellentes retraites intensives sans visibilité" }
      ]
    },
    solution: {
      title: "Une Plateforme. 100% Sport Intensif.",
      subtitle: "FitQuest rassemble les meilleures retraites orientées performance en Europe",
      features: [
        { icon: "🎯", title: "Filtres Intelligents", desc: "Trouvez par sport, lieu, date, budget et niveau" },
        { icon: "💪", title: "Focus Performance", desc: "Uniquement du sport intensif — pas de wellness" },
        { icon: "⚡", title: "Réservation Simple", desc: "Processus de réservation simple et sécurisé" },
        { icon: "⭐", title: "Qualité Vérifiée", desc: "Chaque organisateur est sélectionné avec soin" }
      ]
    },
    sports: {
      title: "Votre Sport. Votre Aventure.",
      list: ["CrossFit", "Hyrox", "Trail", "Bootcamp", "HIIT", "Running"]
    },
    destinations: {
      title: "Destinations de Rêve",
      places: [
        { name: "France", flag: "🇫🇷", count: "Bientôt" },
        { name: "Portugal", flag: "🇵🇹", count: "Bientôt" },
        { name: "Espagne", flag: "🇪🇸", count: "Bientôt" },
        { name: "Allemagne", flag: "🇩🇪", count: "Bientôt" },
        { name: "Italie", flag: "🇮🇹", count: "Bientôt" },
        { name: "Grèce", flag: "🇬🇷", count: "Bientôt" }
      ]
    },
    howItWorks: {
      title: "Comment Ça Marche",
      steps: [
        { num: "1", title: "Recherchez", desc: "Filtrez par sport, destination et dates" },
        { num: "2", title: "Comparez", desc: "Consultez prix, programmes et avis" },
        { num: "3", title: "Réservez", desc: "Sécurisez votre place en quelques minutes" },
        { num: "4", title: "Entraînez-vous", desc: "Profitez de vos vacances sportives" }
      ]
    },
    cta: {
      title: "Soyez les Premiers Informés",
      subtitle: "Rejoignez la liste d'attente et obtenez un accès anticipé aux retraites exclusives",
      placeholder: "Votre email",
      button: "Accès Anticipé",
      privacy: "Nous respectons votre vie privée. Désabonnement possible à tout moment."
    },
    organizers: {
      title: "Vous Êtes Organisateur ?",
      subtitle: "Référencez votre retraite sportive gratuitement et touchez des milliers de sportifs motivés",
      benefits: ["Référencement gratuit pour les partenaires fondateurs", "Des prospects qualifiés livrés directement", "Commission inférieure à la concurrence"],
      button: "Devenir Partenaire Fondateur"
    },
    footer: {
      tagline: "La marketplace des retraites sportives intensives en Europe",
      links: ["À propos", "Contact", "Blog", "FAQ"],
      legal: ["Confidentialité", "CGU"],
      copyright: "© 2026 FitQuest. Tous droits réservés."
    }
  }
};

export default function FitQuestLanding() {
  const [lang, setLang] = useState('fr');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const t = translations[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to email service (Mailchimp, ConvertKit, etc.)
      console.log('Email submitted:', email);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">{t.nav.logo}</span>
              <p className="text-xs text-gray-500 hidden sm:block">{t.nav.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium transition"
            >
              {lang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
            </button>
            <a
              href="#organizers"
              className="hidden md:block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-orange-200 transition"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.title} <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
              {t.hero.titleHighlight}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>

          {/* CTA Button instead of Search (MVP phase) */}
          <div className="max-w-xl mx-auto mb-12">
            <a
              href="#waitlist"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-orange-200 transition"
            >
              {lang === 'fr' ? "Rejoindre la liste d'attente" : "Join the Waitlist"} →
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{t.hero.stats.retreats}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">{lang === 'en' ? 'Launch' : 'Lancement'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{t.hero.stats.countries}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">{lang === 'en' ? 'Coverage' : 'Couverture'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{t.hero.stats.sports}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">{lang === 'en' ? 'Disciplines' : 'Disciplines'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Pills */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {t.sports.list.map((sport, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-gray-700 font-medium hover:from-orange-50 hover:to-red-50 hover:text-orange-600 cursor-pointer transition"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.problem.title}</h2>
            <p className="text-lg text-slate-400">{t.problem.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.problem.issues.map((issue, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-2xl">❌</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{issue.title}</h3>
                <p className="text-slate-400">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.solution.title}</h2>
            <p className="text-lg text-gray-600">{t.solution.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.solution.features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg shadow-orange-100/50 border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">{t.destinations.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.destinations.places.map((place, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 cursor-pointer transition">
                <div className="text-4xl mb-2">{place.flag}</div>
                <div className="font-semibold text-gray-900 group-hover:text-white transition">{place.name}</div>
                <div className="text-sm text-gray-500 group-hover:text-white/80 transition">{place.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">{t.howItWorks.title}</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-red-200"></div>

            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-2xl font-bold shadow-lg shadow-orange-200">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Waitlist */}
      <section id="waitlist" className="py-20 px-4 bg-gradient-to-br from-orange-500 via-red-500 to-rose-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-lg text-white/90 mb-10">{t.cta.subtitle}</p>

          {submitted ? (
            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 border border-white/30">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {lang === 'en' ? "You're on the list!" : "Vous êtes inscrit !"}
              </h3>
              <p className="text-white/80">
                {lang === 'en' ? "We'll notify you when we launch." : "Nous vous préviendrons dès le lancement."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.cta.placeholder}
                className="flex-1 px-6 py-4 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
              >
                {t.cta.button}
              </button>
            </form>
          )}
          <p className="text-sm text-white/70 mt-4">{t.cta.privacy}</p>
        </div>
      </section>

      {/* Organizers CTA */}
      <section id="organizers" className="py-20 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 md:p-16 border border-slate-700 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.organizers.title}</h2>
            <p className="text-lg text-slate-400 mb-8">{t.organizers.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {t.organizers.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm">
                  <span>✓</span> {benefit}
                </div>
              ))}
            </div>
            <a
              href="mailto:yahmirachida@gmail.com?subject=Partenariat%20GoFitQuest%20-%20Founding%20Partner"
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-emerald-500/25 transition"
            >
              {t.organizers.button}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">FitQuest</span>
                <p className="text-xs text-slate-500">{t.footer.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {t.footer.links.map((link, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white transition">{link}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">{t.footer.copyright}</p>
            <div className="flex gap-6">
              {t.footer.legal.map((link, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-slate-400 text-sm transition">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
