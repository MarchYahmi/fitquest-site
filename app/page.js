'use client'

import { useState } from 'react';

// Translations
const translations = {
  en: {
    nav: {
      logo: "FITQUEST",
      cta: "Partner With Us"
    },
    hero: {
      title: "THE MARKETPLACE FOR",
      titleHighlight: "INTENSIVE SPORTS RETREATS",
      subtitle: "CrossFit. Hyrox. Trail. Bootcamp. One platform, all across Europe.",
      cta: "Become a Partner"
    },
    sports: {
      title: "DISCIPLINES",
      list: ["CROSSFIT", "HYROX", "TRAIL", "BOOTCAMP", "HIIT", "RUNNING", "YOGA", "PILATES"]
    },
    value: {
      title: "WHY FITQUEST",
      items: [
        { title: "VISIBILITY", desc: "Reach thousands of motivated athletes looking for their next challenge" },
        { title: "SIMPLICITY", desc: "Free listing, qualified leads delivered directly to you" },
        { title: "PERFORMANCE", desc: "Lower commission than competitors. You keep more." }
      ]
    },
    organizers: {
      title: "LIST YOUR RETREAT",
      subtitle: "Join as a founding partner. Free listing. Premium visibility.",
      form: {
        name: "Your name",
        email: "Your email",
        organization: "Organization / Retreat name",
        message: "Tell us about your retreat",
        submit: "SEND",
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
      logo: "FITQUEST",
      cta: "Devenir Partenaire"
    },
    hero: {
      title: "LA MARKETPLACE DES",
      titleHighlight: "RETRAITES SPORTIVES INTENSIVES",
      subtitle: "CrossFit. Hyrox. Trail. Bootcamp. Une plateforme, toute l'Europe.",
      cta: "Devenir Partenaire"
    },
    sports: {
      title: "DISCIPLINES",
      list: ["CROSSFIT", "HYROX", "TRAIL", "BOOTCAMP", "HIIT", "RUNNING", "YOGA", "PILATES"]
    },
    value: {
      title: "POURQUOI FITQUEST",
      items: [
        { title: "VISIBILITÉ", desc: "Touchez des milliers de sportifs motivés en quête de leur prochain défi" },
        { title: "SIMPLICITÉ", desc: "Référencement gratuit, prospects qualifiés livrés directement" },
        { title: "PERFORMANCE", desc: "Commission inférieure à la concurrence. Vous gardez plus." }
      ]
    },
    organizers: {
      title: "RÉFÉRENCEZ VOTRE RETRAITE",
      subtitle: "Rejoignez-nous en tant que partenaire fondateur. Gratuit. Visibilité premium.",
      form: {
        name: "Votre nom",
        email: "Votre email",
        organization: "Organisation / Nom de la retraite",
        message: "Parlez-nous de votre retraite",
        submit: "ENVOYER",
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
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
  const t = translations[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xpwzgkjq', {
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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <span className="text-black font-black text-lg">F</span>
            </div>
            <span className="text-xl font-light tracking-widest">{t.nav.logo}</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-sm font-medium text-white/60 hover:text-white transition tracking-wide"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <a
              href="#partner"
              className="hidden md:block px-6 py-2 bg-white text-black font-normal text-sm tracking-widest hover:bg-white/90 transition"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-8">
            {t.hero.title}
            <br />
            <span className="text-orange-500 font-normal">{t.hero.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 tracking-wide">
            {t.hero.subtitle}
          </p>
          <a
            href="#partner"
            className="inline-block px-10 py-4 bg-orange-500 text-black font-normal text-sm tracking-widest hover:bg-orange-400 transition"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-light tracking-widest text-white/40 mb-8">{t.sports.title}</h2>
          <div className="flex flex-wrap gap-4">
            {t.sports.list.map((sport, i) => (
              <span
                key={i}
                className="px-6 py-3 border border-white/20 text-white/70 font-light text-sm tracking-widest hover:bg-white hover:text-black transition cursor-pointer"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-16">{t.value.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t.value.items.map((item, i) => (
              <div key={i}>
                <div className="text-5xl font-light text-black/10 mb-4">0{i + 1}</div>
                <h3 className="text-lg font-normal tracking-widest mb-3">{item.title}</h3>
                <p className="text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner" className="py-20 px-6 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">{t.organizers.title}</h2>
            <p className="text-white/60 text-lg">{t.organizers.subtitle}</p>
          </div>

          {formStatus === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/30 p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-green-400 font-medium">{t.organizers.form.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.organizers.form.name}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.organizers.form.email}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition"
                />
              </div>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder={t.organizers.form.organization}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.organizers.form.message}
                rows={4}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-orange-500 transition resize-none"
              />

              {formStatus === 'error' && (
                <p className="text-red-400 text-sm">{t.organizers.form.error}</p>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-4 bg-orange-500 text-black font-normal tracking-widest hover:bg-orange-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? '...' : t.organizers.form.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-black text-sm">F</span>
              </div>
              <span className="font-light tracking-widest">FITQUEST</span>
            </div>
            <p className="text-white/40 text-sm text-center">{t.footer.tagline}</p>
            <a href="mailto:yahmirachida@gmail.com" className="text-white/40 text-sm hover:text-white transition">
              {t.footer.contact}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/30 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
