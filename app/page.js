'use client';

import { useState } from 'react';

// Data
import { retreats, sports } from './data/retreats';
import { translations } from './data/translations';

// Components
import { Navbar, Hero, RetreatCard, PartnerForm, Footer } from './components';

export default function FitQuestLanding() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Navigation */}
      <Navbar t={t} lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <Hero t={t} lang={lang} />

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
              <RetreatCard key={retreat.id} retreat={retreat} lang={lang} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Sports Filter */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg text-white/40 mb-6">{t.sports.title}</h2>
          <div className="flex flex-wrap gap-3">
            {sports.map((sport, i) => (
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
      <PartnerForm t={t} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}
