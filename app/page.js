'use client'

import { useState } from 'react';

// Sample retreats data (fictional but realistic)
const retreats = [
  {
    id: 1,
    title: { en: "CrossFit Camp", fr: "Stage CrossFit" },
    location: { en: "Algarve, Portugal", fr: "Algarve, Portugal" },
    flag: "🇵🇹",
    duration: { en: "5 days", fr: "5 jours" },
    price: 890,
    sport: "CROSSFIT",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
    level: { en: "All levels", fr: "Tous niveaux" }
  },
  {
    id: 2,
    title: { en: "Trail des Alpes", fr: "Trail des Alpes" },
    location: { en: "Chamonix, France", fr: "Chamonix, France" },
    flag: "🇫🇷",
    duration: { en: "7 days", fr: "7 jours" },
    price: 1190,
    sport: "TRAIL",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80",
    level: { en: "Intermediate", fr: "Intermédiaire" }
  },
  {
    id: 3,
    title: { en: "Hyrox Training Camp", fr: "Camp Hyrox" },
    location: { en: "Barcelona, Spain", fr: "Barcelone, Espagne" },
    flag: "🇪🇸",
    duration: { en: "4 days", fr: "4 jours" },
    price: 750,
    sport: "HYROX",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
    level: { en: "Advanced", fr: "Avancé" }
  },
  {
    id: 4,
    title: { en: "Yoga & HIIT Retreat", fr: "Retraite Yoga & HIIT" },
    location: { en: "Santorini, Greece", fr: "Santorin, Grèce" },
    flag: "🇬🇷",
    duration: { en: "6 days", fr: "6 jours" },
    price: 950,
    sport: "YOGA",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    level: { en: "All levels", fr: "Tous niveaux" }
  }
];

// Translations
const translations = {
  en: {
    nav: {
      logo: "FitQuest",
      cta: "List your retreat"
    },
    hero: {
      title: "Find your next",
      titleHighlight: "sports adventure",
      subtitle: "The best intensive fitness retreats across Europe. CrossFit, Hyrox, trail, bootcamp — all in one place.",
      cta: "Explore retreats"
    },
    retreats: {
      title: "Featured retreats",
      viewAll: "View all",
      from: "From",
      perPerson: "/ person"
    },
    sports: {
      title: "Explore by sport",
      list: ["CrossFit", "Hyrox", "Trail", "Bootcamp", "HIIT", "Running", "Yoga", "Pilates"]
    },
    why: {
      title: "Why FitQuest?",
      items: [
        { title: "Curated selection", desc: "Only the best intensive retreats, handpicked for athletes like you" },
        { title: "Easy booking", desc: "Compare, choose and book your next adventure in minutes" },
        { title: "Real reviews", desc: "Authentic feedback from athletes who've been there" }
      ]
    },
    organizers: {
      title: "Are you a retreat organizer?",
      subtitle: "Join as a founding partner. Free listing. Premium visibility.",
      form: {
        name: "Your name",
        email: "Your email",
        organization: "Organization / Retreat name",
        message: "Tell us about your retreat",
        submit: "Send",
        success: "Message sent! We'll get back to you within 48h.",
        error: "Error sending message. Please try again."
      }
    },
    footer: {
      tagline: "The marketplace for intensive sports retreats in Europe",
      copyright: "© 2026 FitQuest. All rights reserved.",
      contact: "Contact"
    }
  },
  fr: {
    nav: {
      logo: "FitQuest",
      cta: "Référencer ma retraite"
    },
    hero: {
      title: "Trouvez votre prochaine",
      titleHighlight: "aventure sportive",
      subtitle: "Les meilleures retraites sportives intensives en Europe. CrossFit, Hyrox, trail, bootcamp — tout au même endroit.",
      cta: "Explorer les retraites"
    },
    retreats: {
      title: "Retraites à la une",
      viewAll: "Voir tout",
      from: "À partir de",
      perPerson: "/ pers."
    },
    sports: {
      title: "Explorer par sport",
      list: ["CrossFit", "Hyrox", "Trail", "Bootcamp", "HIIT", "Running", "Yoga", "Pilates"]
    },
    why: {
      title: "Pourquoi FitQuest ?",
      items: [
        { title: "Sélection rigoureuse", desc: "Uniquement les meilleures retraites intensives, sélectionnées pour des athlètes comme vous" },
        { title: "Réservation simple", desc: "Comparez, choisissez et réservez votre prochaine aventure en quelques minutes" },
        { title: "Avis authentiques", desc: "Des retours d'expérience réels d'athlètes qui y sont allés" }
      ]
    },
    organizers: {
      title: "Vous êtes organisateur ?",
      subtitle: "Rejoignez-nous en tant que partenaire fondateur. Gratuit. Visibilité premium.",
      form: {
        name: "Votre nom",
        email: "Votre email",
        organization: "Organisation / Nom de la retraite",
        message: "Parlez-nous de votre retraite",
        submit: "Envoyer",
        success: "Message envoyé ! Nous vous répondons sous 48h.",
        error: "Erreur lors de l'envoi. Veuillez réessayer."
      }
    },
    footer: {
      tagline: "La marketplace des retraites sportives intensives en Europe",
      copyright: "© 2026 FitQuest. Tous droits réservés.",
      contact: "Contact"
    }
  }
};

export default function FitQuestLanding() {
  const [lang, setLang] = useState('fr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const t = translations[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mpqlveqy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          _subject: `FitQuest Partner Request - ${formData.organization}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-950/95 backdrop-blur-sm z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-lg font-medium tracking-tight">{t.nav.logo}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-sm text-white/50 hover:text-white transition"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a
              href="#partner"
              className="hidden md:block px-5 py-2 bg-white/10 text-white text-sm rounded-full hover:bg-white/20 transition"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6">
            {t.hero.title}
            <br />
            <span className="text-orange-500">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10">
            {t.hero.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-2 mb-6">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <select className="w-full px-4 py-3 bg-transparent text-white/70 text-sm appearance-none cursor-pointer focus:outline-none">
                  <option value="" className="bg-neutral-900">{lang === 'fr' ? 'Sport' : 'Sport'}</option>
                  <option value="crossfit" className="bg-neutral-900">CrossFit</option>
                  <option value="hyrox" className="bg-neutral-900">Hyrox</option>
                  <option value="trail" className="bg-neutral-900">Trail</option>
                  <option value="bootcamp" className="bg-neutral-900">Bootcamp</option>
                  <option value="yoga" className="bg-neutral-900">Yoga</option>
                </select>
              </div>
              <div className="hidden md:block w-px bg-white/10"></div>
              <div className="flex-1">
                <select className="w-full px-4 py-3 bg-transparent text-white/70 text-sm appearance-none cursor-pointer focus:outline-none">
                  <option value="" className="bg-neutral-900">{lang === 'fr' ? 'Destination' : 'Destination'}</option>
                  <option value="france" className="bg-neutral-900">France 🇫🇷</option>
                  <option value="portugal" className="bg-neutral-900">Portugal 🇵🇹</option>
                  <option value="spain" className="bg-neutral-900">Espagne 🇪🇸</option>
                  <option value="greece" className="bg-neutral-900">Grèce 🇬🇷</option>
                </select>
              </div>
              <div className="hidden md:block w-px bg-white/10"></div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={lang === 'fr' ? 'Quand ?' : 'When?'}
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-white/40 text-sm focus:outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-400 transition">
                {lang === 'fr' ? 'Rechercher' : 'Search'}
              </button>
            </div>
          </div>
          <p className="text-white/30 text-sm">{lang === 'fr' ? 'Bientôt disponible — Inscrivez-vous pour être informé du lancement' : 'Coming soon — Sign up to be notified at launch'}</p>
        </div>
      </section>

      {/* Featured Retreats */}
      <section id="retreats" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light">{t.retreats.title}</h2>
            <span className="text-white/40 text-sm cursor-pointer hover:text-white transition">
              {t.retreats.viewAll} →
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {retreats.map((retreat) => (
              <div
                key={retreat.id}
                className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={retreat.image}
                    alt={retreat.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full">
                      {retreat.sport}
                    </span>
                    <span className="text-xs text-white/40">{retreat.level[lang]}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">{retreat.title[lang]}</h3>
                  <p className="text-white/50 text-sm mb-3">
                    {retreat.flag} {retreat.location[lang]} · {retreat.duration[lang]}
                  </p>
                  <p className="text-orange-500 font-medium">
                    {t.retreats.from} {retreat.price}€ <span className="text-white/40 font-normal text-sm">{t.retreats.perPerson}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Filter */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg text-white/40 mb-6">{t.sports.title}</h2>
          <div className="flex flex-wrap gap-3">
            {t.sports.list.map((sport, i) => (
              <span
                key={i}
                className="px-5 py-2.5 border border-white/10 text-white/70 text-sm rounded-full hover:bg-white hover:text-black transition cursor-pointer"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why FitQuest */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-16">{t.why.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t.why.items.map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-light text-black/10 mb-4">0{i + 1}</div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner" className="py-20 px-6 bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-light mb-4">{t.organizers.title}</h2>
            <p className="text-white/50">{t.organizers.subtitle}</p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-green-400">{t.organizers.form.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.organizers.form.name}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.organizers.form.email}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder={t.organizers.form.organization}
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.organizers.form.message}
                rows={4}
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition resize-none"
              />

              {formStatus === 'error' && (
                <p className="text-red-400 text-sm">{t.organizers.form.error}</p>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-4 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? '...' : t.organizers.form.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">F</span>
              </div>
              <span className="font-medium">FitQuest</span>
            </div>
            <p className="text-white/30 text-sm text-center">{t.footer.tagline}</p>
            <a href="mailto:yahmirachida@gmail.com" className="text-white/30 text-sm hover:text-white transition">
              {t.footer.contact}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/20 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
