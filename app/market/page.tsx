import type { Metadata } from 'next'
import Link from 'next/link'
import { neighbourhoods } from '@/data/neighbourhoods'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Q1 2026 Squamish Market Overview | CorridorHomes.ca',
  description: 'Squamish real estate market data for Q1 2026 — SFH prices, apartment surge, days on market by neighbourhood, and key development signals.',
}

const priceComparison = [
  { type: 'Detached Home', vancouver: '$2,048,968', squamish: '$1,500,000', saving: '19–27%' },
  { type: 'Townhouse', vancouver: '$1,203,798', squamish: '$860,000', saving: '17–29%' },
  { type: 'Condo / Apartment', vancouver: '$719,864', squamish: '$640,000', saving: '21–25%' },
]

const developments = [
  {
    title: 'South Britannia Surf Park',
    date: 'Approved May 2025',
    desc: "Canada's first Wavegarden surf park + 1,000+ homes. Strong upside potential for Britannia Beach.",
    neighbourhood: 'britannia-beach',
  },
  {
    title: 'Oceanfront Squamish',
    date: 'Pre-sale Q1 2026',
    desc: 'Master-planned waterfront community. Mixed-use, shoreline greenway, pump track. Register now for priority access.',
    neighbourhood: 'oceanfront-squamish',
  },
  {
    title: 'Downtown Overpass',
    date: 'Coming soon',
    desc: 'Connecting Sea + Sky to downtown on foot and by bike. Expected to drive price appreciation in Sea + Sky.',
    neighbourhood: 'sea-and-sky',
  },
  {
    title: 'SEAandSKY by Bosa',
    date: 'Ongoing delivery',
    desc: '1,144 strata + 295 rental homes on 53 acres. World-class 17,000 sqft amenity centre already open.',
    neighbourhood: 'sea-and-sky',
  },
]

export default function MarketPage() {
  // Sort neighbourhoods by DOM ascending for "fastest markets"
  const byDOM = [...neighbourhoods]
    .filter((n) => n.dom !== undefined)
    .sort((a, b) => (a.dom ?? 99) - (b.dom ?? 99))

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 md:py-28 relative"
        style={{ background: 'linear-gradient(158deg, #091510 0%, #1B3A2D 55%, #243D2F 100%)' }}
      >
        <div className="absolute inset-0 bg-[rgba(9,21,16,0.35)]" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <span className="inline-block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold border border-gold/35 px-3 py-1 rounded-sm mb-6">
            Q1 2026 Market Intelligence
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            Squamish Real Estate Market Overview
          </h1>
          <p className="text-cream/70 text-lg max-w-xl leading-relaxed">
            Current pricing, velocity, and development signals — everything you need to buy with confidence in Q1 2026.
          </p>
        </div>
      </section>

      {/* Key stats */}
      <section className="py-16 px-5 bg-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Key Numbers</p>
          <div className="w-11 h-0.5 bg-gold mb-8" aria-hidden="true" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: '$1.67M', lbl: 'Average SFH price', tag: '↑ 15% YoY' },
              { val: '31%', lbl: 'Apartment sales growth', tag: 'Q1 2026' },
              { val: '9 days', lbl: 'Fastest market (Downtown)', tag: 'High velocity' },
              { val: '14', lbl: 'Distinct neighbourhoods', tag: 'Covered in full' },
            ].map((s) => (
              <div key={s.val} className="bg-cream border border-forest/10 rounded-sm p-5">
                <div className="font-display text-3xl font-bold text-forest mb-1">{s.val}</div>
                <div className="text-xs text-muted mb-3 leading-snug">{s.lbl}</div>
                <span className="text-xs font-semibold text-forest bg-forest/8 px-2 py-0.5 rounded-sm">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price comparison: Vancouver vs Squamish */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Value Comparison</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-4">Vancouver vs. Squamish</h2>
          <p className="text-muted leading-relaxed max-w-xl mb-10">
            What does your Vancouver budget actually buy you 45–90 minutes north? The numbers are compelling.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="text-left px-5 py-3 font-semibold text-xs uppercase tracking-widest">Property Type</th>
                  <th className="text-right px-5 py-3 font-semibold text-xs uppercase tracking-widest">Vancouver</th>
                  <th className="text-right px-5 py-3 font-semibold text-xs uppercase tracking-widest">Squamish</th>
                  <th className="text-right px-5 py-3 font-semibold text-xs uppercase tracking-widest text-gold">Saving</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                    <td className="px-5 py-4 font-medium text-forest">{row.type}</td>
                    <td className="px-5 py-4 text-right text-muted">{row.vancouver}</td>
                    <td className="px-5 py-4 text-right font-semibold text-forest">{row.squamish}</td>
                    <td className="px-5 py-4 text-right font-bold text-gold">{row.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted mt-4 italic">
            The equation: your Vancouver $1.5M condo = a Squamish $960K townhouse + $200–300/month savings on groceries + more space.
          </p>
        </div>
      </section>

      {/* Market velocity by neighbourhood */}
      <section className="py-16 px-5 bg-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Market Velocity</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-4">Days on Market by Neighbourhood</h2>
          <p className="text-muted leading-relaxed max-w-xl mb-10">
            Lower DOM = higher competition. Downtown and Northyards move fastest — have financing ready before you offer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {byDOM.map((n) => (
              <Link
                key={n.slug}
                href={`/neighbourhood/${n.slug}`}
                className="group flex items-center justify-between bg-cream hover:bg-gold/5 border border-forest/10 hover:border-gold/30 rounded-sm px-5 py-4 transition-all"
              >
                <span className="font-medium text-forest group-hover:text-forest text-sm">{n.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gold">{n.dom} days</span>
                  <span className="text-xs text-muted">{n.priceRange}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Development signals */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Development Pipeline</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-4">Where Smart Money Is Watching</h2>
          <p className="text-muted leading-relaxed max-w-xl mb-10">
            Approved projects and infrastructure signals that will shape pricing in 2026 and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {developments.map((d) => (
              <div key={d.title} className="bg-white border border-forest/10 rounded-sm p-6">
                <div className="text-xs font-bold tracking-widest uppercase text-gold mb-2">{d.date}</div>
                <h3 className="font-display text-base font-semibold text-forest mb-2">{d.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{d.desc}</p>
                <Link
                  href={`/neighbourhood/${d.neighbourhood}`}
                  className="text-xs font-semibold text-forest hover:text-gold transition-colors"
                >
                  View neighbourhood →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 px-5 bg-white">
        <div className="mx-auto max-w-2xl">
          <LeadForm
            headline="Stay Ahead of the Market"
            subtext="Get Q1 2026 listings and market updates for your preferred Squamish neighbourhood."
            source="market-page"
          />
        </div>
      </section>
    </>
  )
}
