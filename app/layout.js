import './globals.css'

export const metadata = {
  title: 'FitQuest - Find Your Perfect Sports Retreat in Europe',
  description: 'The marketplace connecting passionate athletes with the best fitness retreats across Europe. CrossFit, trail running, bootcamp, HIIT — all in one place.',
  keywords: 'sports retreat, fitness vacation, CrossFit retreat, trail running camp, bootcamp holiday, Europe fitness',
  openGraph: {
    title: 'FitQuest - Find Your Perfect Sports Retreat',
    description: 'The marketplace for sports retreats in Europe',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
