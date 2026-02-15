// Sample retreats data (fictional but realistic)
export const retreats = [
  {
    id: 1,
    title: { en: "CrossFit Camp", fr: "Stage CrossFit" },
    location: { en: "Algarve, Portugal", fr: "Algarve, Portugal" },
    flag: "🇵🇹",
    duration: { en: "5 days", fr: "5 jours" },
    price: 890,
    sport: "CROSSFIT",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80",
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

// Sports list for filters
export const sports = ["CrossFit", "Hyrox", "Trail", "Bootcamp", "HIIT", "Running", "Yoga", "Pilates"];

// Destinations for filters
export const destinations = [
  { value: "france", label: "France", flag: "🇫🇷" },
  { value: "portugal", label: "Portugal", flag: "🇵🇹" },
  { value: "spain", label: "Espagne", flag: "🇪🇸" },
  { value: "greece", label: "Grèce", flag: "🇬🇷" }
];
