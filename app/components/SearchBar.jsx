'use client';

import { destinations } from '../data/retreats';

export default function SearchBar({ t, lang }) {
  return (
    <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-2 mb-6">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 relative">
          <select className="w-full px-4 py-3 bg-transparent text-white/70 text-sm appearance-none cursor-pointer focus:outline-none">
            <option value="" className="bg-neutral-900">{t.hero.searchSport}</option>
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
            <option value="" className="bg-neutral-900">{t.hero.searchDestination}</option>
            {destinations.map((dest) => (
              <option key={dest.value} value={dest.value} className="bg-neutral-900">
                {dest.label} {dest.flag}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:block w-px bg-white/10"></div>
        <div className="flex-1">
          <input
            type="text"
            placeholder={t.hero.searchWhen}
            className="w-full px-4 py-3 bg-transparent text-white placeholder-white/40 text-sm focus:outline-none"
          />
        </div>
        <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-xl hover:bg-orange-400 transition">
          {t.hero.searchButton}
        </button>
      </div>
    </div>
  );
}
