'use client';

import { config } from '../lib/config';

export default function Footer({ t }) {
  return (
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
          <a
            href={`mailto:${config.contactEmail}`}
            className="text-white/30 text-sm hover:text-white transition"
          >
            {t.footer.contact}
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-white/20 text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
