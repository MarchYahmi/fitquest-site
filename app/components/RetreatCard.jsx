'use client';

export default function RetreatCard({ retreat, lang, t }) {
  return (
    <div className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition cursor-pointer">
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
          {t.retreats.from} {retreat.price}€{' '}
          <span className="text-white/40 font-normal text-sm">{t.retreats.perPerson}</span>
        </p>
      </div>
    </div>
  );
}
