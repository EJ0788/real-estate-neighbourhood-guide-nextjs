import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { config } from '@/config/client'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: config.siteTitle,
  description: config.metaDescription,
  alternates: {
    canonical: 'https://guide.corridorhomes.ca/',
  },
  openGraph: {
    title: config.siteTitle,
    description: config.metaDescription,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'CorridorHomes.ca',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {"@type":"RealEstateAgent","@id":"https://corridorhomes.ca/#business","name":"Corridor Homes","url":"https://corridorhomes.ca","telephone":"+16048285704","email":"info@corridorhomes.ca","address":{"@type":"PostalAddress","addressLocality":"Squamish","addressRegion":"BC","addressCountry":"CA"},"areaServed":{"@type":"City","name":"Squamish","sameAs":"https://www.wikidata.org/wiki/Q974794"},"employee":{"@id":"https://corridorhomes.ca/#eric-johnson"}},
    {"@type":"Person","@id":"https://corridorhomes.ca/#eric-johnson","name":"Eric Johnson","jobTitle":"REALTOR®","worksFor":{"@type":"Organization","name":"Engel & Völkers Squamish/Whistler"},"url":"https://corridorhomes.ca","telephone":"+16048285704","email":"info@corridorhomes.ca","knowsAbout":["Squamish real estate","Sea-to-Sky corridor","Squamish neighbourhoods"]},
    {"@type":"WebPage","@id":"https://guide.corridorhomes.ca/#webpage","url":"https://guide.corridorhomes.ca","name":"Squamish Neighbourhood Guide — Find Your Perfect Community","description":"Local insight on all 14 Squamish neighbourhoods — price ranges, commute times, walk scores, school catchments, and buyer profiles. Q1 2026 data.","inLanguage":"en-CA","dateModified":"2026-01-01","author":{"@id":"https://corridorhomes.ca/#eric-johnson"},"publisher":{"@id":"https://corridorhomes.ca/#business"},"speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".market-overview"]}},
    {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best neighbourhood in Squamish for families?","acceptedAnswer":{"@type":"Answer","text":"Garibaldi Highlands is widely considered the best neighbourhood in Squamish for families. It offers the highest-rated elementary school catchment (Garibaldi Highlands Elementary, Fraser 6.1/10), mature tree-lined streets, mountain views, and strong long-term property values ranging from $1.4M–$2.0M+."}},{"@type":"Question","name":"What is the average house price in Squamish in 2026?","acceptedAnswer":{"@type":"Answer","text":"As of Q1 2026, the average single-family home price in Squamish is $1.67M, representing approximately 19–27% savings compared to equivalent detached homes in Vancouver. The market has seen 15% year-over-year price growth."}},{"@type":"Question","name":"Which Squamish neighbourhood is closest to Vancouver?","acceptedAnswer":{"@type":"Answer","text":"Britannia Beach is the closest Squamish-area community to Vancouver at approximately 35 minutes by car. Downtown Squamish and most central neighbourhoods are 60–75 minutes from Vancouver."}},{"@type":"Question","name":"What is the most affordable neighbourhood in Squamish?","acceptedAnswer":{"@type":"Answer","text":"Downtown Squamish offers the most affordable entry point, with condos and townhomes ranging from $450K–$600K. It also has the fastest days on market (9 days average) and the highest walk score (65) of any Squamish neighbourhood."}},{"@type":"Question","name":"Is Squamish a good place to buy real estate in 2026?","acceptedAnswer":{"@type":"Answer","text":"Yes. Squamish offers compelling value relative to Vancouver — comparable homes are 19–27% less expensive — with direct access to world-class outdoor recreation. Q1 2026 data shows strong demand, with some neighbourhoods averaging just 9 days on market."}},{"@type":"Question","name":"What is the most expensive neighbourhood in Squamish?","acceptedAnswer":{"@type":"Answer","text":"Crumpit Woods is Squamish's most exclusive neighbourhood, with custom luxury builds ranging from $2.5M to $5M+. Tantalus and University Heights are also upscale communities with prices from $1.5M–$2.5M+."}}]}
  ]
}) }} />
      </head>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
