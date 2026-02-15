'use client';

import { config } from '../lib/config';
import SearchBar from './SearchBar';

export default function Hero({ t, lang }) {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${config.heroImage})`,
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

        <SearchBar t={t} lang={lang} />

        <p className="text-white/30 text-sm">{t.hero.comingSoon}</p>
      </div>
    </section>
  );
}
