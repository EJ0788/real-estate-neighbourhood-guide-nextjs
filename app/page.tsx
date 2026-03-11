import Link from 'next/link'
import { neighbourhoods } from '@/data/neighbourhoods'
import { config } from '@/config/client'
import NeighbourhoodCard from '@/components/NeighbourhoodCard'
import LeadForm from '@/components/LeadForm'

const STATS = [
  { value: '14', label: 'Neighbourhoods' },
  { value: '$1.67M', label: 'Avg SFH price' },
  { value: '9 days', label: 'Fastest DOM' },
  { value: 'Q1 2026', label: 'Data current' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[85svh] flex flex-col justify-center"
        style={{
          backgroundImage: 'url(/images/downtownsquamish.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(9,21,16,0.65)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,168,76,0.07)_0%,transparent_55%)]" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:py-28 text-center">
          <span className="inline-block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold border border-gold/35 px-3 py-1 rounded-sm mb-6">
            Q1 2026 &middot; Squamish, BC
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] mb-6 max-w-3xl mx-auto">
            {config.heroHeadline}
          </h1>

          <p className="text-cream/75 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            {config.heroSubline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#neighbourhoods"
              className="bg-gold hover:bg-gold-hover text-ink font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-colors"
            >
              Explore Neighbourhoods
            </a>
            <a
              href={config.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/30 hover:border-gold text-cream/80 hover:text-gold text-sm font-medium px-8 py-4 rounded-sm transition-colors"
            >
              View Listings
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 pb-8 flex justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="animate-bounce">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-forest">
        <div className="mx-auto max-w-6xl px-5 py-4 flex flex-wrap justify-center gap-x-10 gap-y-2">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-cream/75">
              <strong className="text-gold font-semibold">{s.value}</strong>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── NEIGHBOURHOOD GRID ── */}
      <section id="neighbourhoods" className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">
            Explore
          </p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4 leading-snug">
            Every Squamish Neighbourhood
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-xl mb-12">
            From coastal villages to luxury mountain estates — 14 communities, each with its own price point, character, and buyer profile.
          </p>

          {/* Grid with inline lead form after card 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {neighbourhoods.map((n, i) => (
              <>
                <NeighbourhoodCard key={n.slug} n={n} />
                {i === 2 && (
                  <div key="inline-form" className="sm:col-span-2 lg:col-span-3">
                    <LeadForm
                      headline="Get New Listings in Your Preferred Neighbourhood"
                      subtext={`Join ${config.downloadCount} homebuyers already exploring Squamish with our help.`}
                      source="homepage-inline"
                    />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET SNAPSHOT ── */}
      <section className="bg-white py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold mb-4">Market Intelligence</p>
          <div className="w-11 h-0.5 bg-gold mb-5" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-4">Q1 2026 Market Overview</h2>
          <p className="text-muted leading-relaxed max-w-xl mb-12">
            The Sea-to-Sky corridor remains one of BC&apos;s most compelling value plays — meaningful savings over Vancouver with direct access to world-class outdoor recreation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { val: '$1.67M', lbl: 'Average SFH price', tag: '↑ 15% YoY' },
              { val: '31%', lbl: 'Apartment sales surge', tag: 'Q1 2026 growth' },
              { val: '9 days', lbl: 'Fastest DOM (Downtown)', tag: 'High demand' },
              { val: '19–27%', lbl: 'Savings vs. Vancouver detached', tag: 'Comparable homes' },
            ].map((s) => (
              <div key={s.val} className="bg-cream border border-forest/10 rounded-sm p-5">
                <div className="font-display text-2xl font-bold text-forest mb-1">{s.val}</div>
                <div className="text-xs text-muted mb-2">{s.lbl}</div>
                <span className="text-xs font-semibold text-forest bg-forest/8 px-2 py-0.5 rounded-sm">{s.tag}</span>
              </div>
            ))}
          </div>

          <Link
            href="/market"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest hover:text-gold transition-colors"
          >
            Full market overview
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── AGENT ── */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-forest flex items-center justify-center font-display text-2xl text-gold shrink-0">
              EJ
            </div>
            <div className="max-w-xl">
              <div className="font-display text-xl font-bold text-forest mb-1">{config.agentName}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">{config.agentTitle}</div>
              <p className="text-muted leading-relaxed mb-5">
                Local Squamish REALTOR® with deep knowledge of every neighbourhood in this guide.
                My approach: help you find where you&apos;ll love living, not where it&apos;s easiest to close a deal.
                I&apos;ll walk away from a sale I don&apos;t think serves you.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href={`tel:${config.agentPhone.replace(/\./g, '')}`} className="text-sm font-semibold text-forest hover:text-gold transition-colors">{config.agentPhone}</a>
                <a href={`mailto:${config.agentEmail}`} className="text-sm font-semibold text-forest hover:text-gold transition-colors">{config.agentEmail}</a>
                <a href={config.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-forest hover:text-gold transition-colors">corridorhomes.ca</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM LEAD FORM ── */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-2xl">
          <LeadForm source="homepage-bottom" />
        </div>
      </section>
    </>
  )
}
