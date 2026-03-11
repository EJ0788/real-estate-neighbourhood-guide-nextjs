import { notFound } from 'next/navigation'
import Link from 'next/link'
import { neighbourhoods, getNeighbourhood } from '@/data/neighbourhoods'
import { config } from '@/config/client'
import LeadForm from '@/components/LeadForm'
import NeighbourhoodCard from '@/components/NeighbourhoodCard'

export function generateStaticParams() {
  return neighbourhoods.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const n = getNeighbourhood(slug)
  if (!n) return {}
  return {
    title: `${n.name} | Squamish Neighbourhood Guide`,
    description: `${n.vibe.slice(0, 140)}… Prices ${n.priceRange}. Updated Q1 2026.`,
  }
}

export default async function NeighbourhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const n = getNeighbourhood(slug)
  if (!n) notFound()

  // 3 related (different) neighbourhoods
  const related = neighbourhoods.filter((r) => r.slug !== n.slug).slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28"
        style={{ background: 'linear-gradient(158deg, #091510 0%, #1B3A2D 55%, #243D2F 100%)' }}
      >
        <div className="absolute inset-0 bg-[rgba(9,21,16,0.35)]" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream/50 hover:text-gold transition-colors mb-8"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Neighbourhoods
          </Link>

          <div className="flex flex-wrap gap-3 mb-5">
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-gold border border-gold/35 px-3 py-1 rounded-sm">
              {n.priceRange}
            </span>
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-cream/60 border border-white/20 px-3 py-1 rounded-sm">
              {n.commute.vancouver} to Vancouver
            </span>
            {n.presaleNote && (
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-gold bg-gold/15 px-3 py-1 rounded-sm">
                Pre-sale 2026
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {n.name}
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl leading-relaxed">
            {n.vibe}
          </p>
        </div>
      </section>

      {/* ── STATS ROW ── */}
      <div className="bg-forest">
        <div className="mx-auto max-w-6xl px-5 py-4 flex flex-wrap gap-x-10 gap-y-2">
          <Stat label="Price Range" value={n.priceRange} />
          <Stat label="Vancouver Commute" value={n.commute.vancouver} />
          <Stat label="Whistler Commute" value={n.commute.whistler} />
          <Stat label="Walk Score" value={String(n.walkScore)} />
          {n.dom !== undefined && <Stat label="Avg Days on Market" value={`${n.dom} days`} />}
          {n.listings !== undefined && <Stat label="Active Listings" value={String(n.listings)} />}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left column — main info */}
          <div className="lg:col-span-2 flex flex-col gap-12">

            {/* Pros / Cons */}
            <div>
              <SectionLabel>At a Glance</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white border border-forest/10 rounded-sm p-6">
                  <h3 className="font-display text-base font-semibold text-forest mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-forest flex items-center justify-center text-white text-[10px]">✓</span>
                    Pros
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {n.pros.map((p) => (
                      <li key={p} className="text-sm text-muted flex items-start gap-2 leading-snug">
                        <span className="text-gold mt-0.5 shrink-0">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-forest/10 rounded-sm p-6">
                  <h3 className="font-display text-base font-semibold text-forest mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center text-muted text-[10px]">–</span>
                    Cons
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {n.cons.map((c) => (
                      <li key={c} className="text-sm text-muted flex items-start gap-2 leading-snug">
                        <span className="text-muted/50 mt-0.5 shrink-0">·</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Best for */}
            <div>
              <SectionLabel>Best For</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {n.bestFor.map((tag) => (
                  <span key={tag} className="text-sm text-forest bg-forest/8 border border-forest/15 px-3 py-1.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hidden gem */}
            {n.hiddenGem && (
              <div className="bg-gold/10 border-l-4 border-gold rounded-sm p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Local Insider</p>
                <p className="text-sm text-ink leading-relaxed">{n.hiddenGem}</p>
              </div>
            )}

            {/* Market insight */}
            <div className="bg-forest text-cream rounded-sm p-6">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Market Insight</p>
              <p className="text-sm leading-relaxed text-cream/85">{n.marketInsight}</p>
            </div>

            {/* Buyer note */}
            {n.buyerNote && (
              <div className="border border-forest/15 rounded-sm p-5">
                <p className="text-xs font-bold tracking-widest uppercase text-muted mb-2">Buyer&apos;s Note</p>
                <p className="text-sm text-muted leading-relaxed">{n.buyerNote}</p>
              </div>
            )}

            {/* Pre-sale note */}
            {n.presaleNote && (
              <div className="bg-gold/10 border border-gold/30 rounded-sm p-5">
                <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Pre-Sale Alert</p>
                <p className="text-sm text-ink leading-relaxed">{n.presaleNote}</p>
              </div>
            )}

            {/* Schools */}
            {n.schools.length > 0 && (
              <div>
                <SectionLabel>Schools</SectionLabel>
                <div className="flex flex-col gap-2">
                  {n.schools.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <a
                  href={config.schoolGuideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-gold transition-colors mt-4"
                >
                  Full school catchment guide →
                </a>
              </div>
            )}

            {/* Dining */}
            {n.dining && n.dining.length > 0 && (
              <div>
                <SectionLabel>Local Dining + Spots</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {n.dining.map((d) => (
                    <span key={d} className="text-xs text-muted bg-white border border-forest/10 px-3 py-1.5 rounded-sm">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Listings CTA */}
            <div className="pt-2">
              <a
                href={n.listingsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-ink font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-colors"
              >
                View {n.name} Listings
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — sticky lead form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LeadForm
                headline={`Get Listings in ${n.name}`}
                subtext="Tell us what you're looking for and we'll send matching listings as they hit the market."
                defaultNeighbourhood={n.name}
                source={`neighbourhood-${n.slug}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── RELATED ── */}
      <section className="bg-white py-16 px-5">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold text-forest mb-8">Explore More Neighbourhoods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => (
              <NeighbourhoodCard key={r.slug} n={r} />
            ))}
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-forest hover:text-gold transition-colors"
          >
            ← View all 14 neighbourhoods
          </Link>
        </div>
      </section>
    </>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-gold mb-2">{children}</p>
      <div className="w-8 h-0.5 bg-gold" aria-hidden="true" />
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-sm text-cream/75">
      <strong className="text-gold font-semibold">{value}</strong>
      <span className="ml-1.5">{label}</span>
    </div>
  )
}
