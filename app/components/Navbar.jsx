'use client';

export default function Navbar({ t, lang, setLang }) {
  return (
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
  );
}
