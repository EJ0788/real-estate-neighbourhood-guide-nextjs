import type { Metadata } from 'next'
import Link from 'next/link'
import { neighbourhoods } from '@/data/neighbourhoods'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Vancouver to Squamish Relocation Guide | CorridorHomes.ca',
  description: 'Everything families and professionals need to know about relocating from Vancouver to Squamish — prices, commutes, lifestyle trade-offs, and the Connector bus.',
}

const gains = [
  '20–30% more space for the same budget',
  'Trails from your door',
  'Tight-knit, safe community',
  'Mountain views every day',
  'Family-friendly neighbourhoods',
  'Growing restaurant and arts scene',
]

const tradeoffs = [
  'Late-night dining closes 9–10 PM',
  'Car dependency in most neighbourhoods',
  '1.5 hrs to YVR',
  'Fewer shopping and entertainment options',
  'Limited specialist medical (some services in Van)',
]

const commuteTimes = [
  { name: 'Britannia Beach', slug: 'britannia-beach', time: '35–40 min', note: 'Fastest drive on corridor' },
  { name: 'Valleycliffe', slug: 'valleycliffe', time: '55–70 min', note: 'Worth it for lot size + value' },
  { name: 'Downtown Squamish', slug: 'downtown-squamish', time: '60–75 min', note: 'Most walkable locally' },
  { name: 'Garibaldi Estates', slug: 'garibaldi-estates', time: '60–75 min', note: 'Good school access' },
  { name: 'Tantalus', slug: 'tantalus', time: '60–75 min', note: 'New builds, mountain views' },
  { name: 'Garibaldi Highlands', slug: 'garibaldi-highlands', time: '65–80 min', note: 'Best schools (6.1/10)' },
  { name: 'Brackendale', slug: 'brackendale', time: '75–90 min', note: 'Best for Whistler workers' },
]

export default function RelocationPage() {
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
            Relocation Guide
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
            The Insider&apos;s Guide to Moving from Vancouver to Squamish
          </h1>
          <p className="text-cream/70 text-lg max-w-xl leading-relaxed">
            Honest commute times, real price comparisons, and the lifestyle trade-offs nobody else talks about.
          </p>
        </div>
      </section>

      {/* The equation */}
      <section className="py-16 px-5 bg-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">The Numbers</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-6">What Your Vancouver Budget Gets You</h2>

          <div className="bg-forest text-cream rounded-sm p-6 md:p-8 mb-8">
            <p className="font-display text-xl md:text-2xl text-white leading-snug">
              Your Vancouver <span className="text-gold">$1.5M condo</span> = Squamish <span className="text-gold">$960K townhouse</span> + $200–300/month savings on groceries + significantly more space.
            </p>
          </div>

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
                {[
                  { type: 'Detached Home', van: '$2,048,968', sq: '$1,500,000', save: '19–27%' },
                  { type: 'Townhouse', van: '$1,203,798', sq: '$860,000', save: '17–29%' },
                  { type: 'Condo / Apartment', van: '$719,864', sq: '$640,000', save: '21–25%' },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'}>
                    <td className="px-5 py-4 font-medium text-forest">{row.type}</td>
                    <td className="px-5 py-4 text-right text-muted">{row.van}</td>
                    <td className="px-5 py-4 text-right font-semibold text-forest">{row.sq}</td>
                    <td className="px-5 py-4 text-right font-bold text-gold">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Commute times */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Commute Reality</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-4">Drive Times to Vancouver</h2>
          <p className="text-muted leading-relaxed max-w-xl mb-10">
            These are real-world times via Hwy 99 with normal traffic. Add 15–20 min for peak hour southbound.
          </p>

          <div className="flex flex-col gap-3 mb-10">
            {commuteTimes.map((c) => (
              <Link
                key={c.slug}
                href={`/neighbourhood/${c.slug}`}
                className="group flex items-center justify-between bg-white hover:bg-gold/5 border border-forest/10 hover:border-gold/30 rounded-sm px-5 py-4 transition-all"
              >
                <div>
                  <span className="font-medium text-forest text-sm">{c.name}</span>
                  <span className="text-xs text-muted ml-3">{c.note}</span>
                </div>
                <span className="text-sm font-bold text-gold">{c.time}</span>
              </Link>
            ))}
          </div>

          {/* Connector bus */}
          <div className="bg-forest/5 border border-forest/15 rounded-sm p-6">
            <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-3">Squamish Connector Bus</p>
            <h3 className="font-display text-lg font-semibold text-forest mb-3">The hybrid worker&apos;s secret weapon</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              ~60 minute ride to downtown Vancouver. Work on your laptop both ways. Dedicated bus lanes mean reliable timing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: '$35', lbl: 'One-way fare' },
                { val: '$45', lbl: 'Return trip' },
                { val: '$185', lbl: '10-trip pass (transferable)' },
                { val: '~60 min', lbl: 'Vancouver commute time' },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="font-display text-xl font-bold text-forest">{s.val}</div>
                  <div className="text-xs text-muted mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-4 italic">Best for: hybrid workers commuting 1–2 days/week. Economical, comfortable, stress-free.</p>
          </div>
        </div>
      </section>

      {/* Gains + trade-offs */}
      <section className="py-16 px-5 bg-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Lifestyle Reality Check</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-10">What You Gain. What You Give Up.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cream border border-forest/10 rounded-sm p-6">
              <h3 className="font-display text-base font-semibold text-forest mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-forest flex items-center justify-center text-white text-xs">✓</span>
                What You Gain
              </h3>
              <ul className="flex flex-col gap-3">
                {gains.map((g) => (
                  <li key={g} className="text-sm text-muted flex items-start gap-2 leading-snug">
                    <span className="text-gold font-bold mt-0.5 shrink-0">·</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-forest/10 rounded-sm p-6">
              <h3 className="font-display text-base font-semibold text-muted mb-5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center text-muted text-xs">–</span>
                What You Trade Off
              </h3>
              <ul className="flex flex-col gap-3">
                {tradeoffs.map((t) => (
                  <li key={t} className="text-sm text-muted flex items-start gap-2 leading-snug">
                    <span className="text-muted/40 mt-0.5 shrink-0">·</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighbourhood finder CTA */}
      <section className="py-16 px-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Next Step</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-4">Find Your Neighbourhood</h2>
          <p className="text-muted leading-relaxed max-w-xl mb-8">
            You know the commute math. Now find which neighbourhood fits your life. We&apos;ve covered all 14 in detail.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-ink font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-colors"
          >
            Explore All Neighbourhoods
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Lead form */}
      <section className="py-16 px-5 bg-white">
        <div className="mx-auto max-w-2xl">
          <LeadForm
            headline="Planning Your Squamish Move?"
            subtext="Tell us your timeline and preferred neighbourhood — we'll send matching listings and a personal market briefing."
            source="relocation-page"
          />
        </div>
      </section>
    </>
  )
}
