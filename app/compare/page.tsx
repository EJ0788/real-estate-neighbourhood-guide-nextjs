'use client'

import { useState } from 'react'
import Link from 'next/link'
import { neighbourhoods, type Neighbourhood } from '@/data/neighbourhoods'
import LeadForm from '@/components/LeadForm'

const MAX = 3

const COMPARE_ROWS: { label: string; key: keyof Neighbourhood | string }[] = [
  { label: 'Price Range', key: 'priceRange' },
  { label: 'Avg Price', key: 'avgPrice' },
  { label: 'Days on Market', key: 'dom' },
  { label: 'Vancouver Commute', key: 'commute.vancouver' },
  { label: 'Whistler Commute', key: 'commute.whistler' },
  { label: 'Walk Score', key: 'walkScore' },
  { label: 'Best For', key: 'bestFor' },
  { label: 'Schools', key: 'schools' },
  { label: 'Pros', key: 'pros' },
  { label: 'Cons', key: 'cons' },
]

function getVal(n: Neighbourhood, key: string): string {
  if (key === 'commute.vancouver') return n.commute.vancouver
  if (key === 'commute.whistler') return n.commute.whistler
  if (key === 'dom') return n.dom !== undefined ? `${n.dom} days` : '—'
  if (key === 'avgPrice') return n.avgPrice ?? '—'
  const val = (n as unknown as Record<string, unknown>)[key]
  if (Array.isArray(val)) return val.join(', ')
  return String(val ?? '—')
}

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([])

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug)
      if (prev.length >= MAX) return prev
      return [...prev, slug]
    })
  }

  const chosen = selected.map((s) => neighbourhoods.find((n) => n.slug === s)!)

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 md:py-20 relative"
        style={{ background: 'linear-gradient(158deg, #091510 0%, #1B3A2D 55%, #243D2F 100%)' }}
      >
        <div className="absolute inset-0 bg-[rgba(9,21,16,0.35)]" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-5">
          <span className="inline-block text-[0.68rem] font-bold tracking-[0.16em] uppercase text-gold border border-gold/35 px-3 py-1 rounded-sm mb-6">
            Comparison Tool
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Compare Neighbourhoods
          </h1>
          <p className="text-cream/70 text-lg max-w-xl leading-relaxed">
            Select up to {MAX} neighbourhoods to compare side by side — price, commute, schools, and more.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12">

        {/* Neighbourhood picker */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-xl font-bold text-forest">
              Select up to {MAX} neighbourhoods
            </h2>
            <span className="text-sm text-muted">{selected.length}/{MAX} selected</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {neighbourhoods.map((n) => {
              const isSelected = selected.includes(n.slug)
              const isDisabled = !isSelected && selected.length >= MAX
              return (
                <button
                  key={n.slug}
                  onClick={() => toggle(n.slug)}
                  disabled={isDisabled}
                  className={`text-left px-3 py-3 rounded-sm border text-sm transition-all ${
                    isSelected
                      ? 'bg-forest text-cream border-forest'
                      : isDisabled
                      ? 'bg-cream/50 text-muted/40 border-forest/5 cursor-not-allowed'
                      : 'bg-white text-forest border-forest/15 hover:border-gold/40 hover:bg-gold/5'
                  }`}
                >
                  <div className="font-medium leading-snug">{n.name}</div>
                  <div className={`text-xs mt-0.5 ${isSelected ? 'text-gold' : 'text-muted'}`}>
                    {n.priceRange}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Comparison table */}
        {chosen.length >= 2 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 bg-cream border border-forest/10 text-xs font-bold uppercase tracking-widest text-muted w-40">
                    —
                  </th>
                  {chosen.map((n) => (
                    <th key={n.slug} className="text-left px-4 py-3 bg-forest text-cream border border-forest/80">
                      <div className="font-display font-semibold text-base leading-snug">{n.name}</div>
                      <div className="text-gold text-xs font-normal mt-0.5">{n.priceRange}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? 'bg-white' : 'bg-cream/60'}>
                    <td className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted/70 border border-forest/8 align-top">
                      {row.label}
                    </td>
                    {chosen.map((n) => (
                      <td key={n.slug} className="px-4 py-3 text-forest border border-forest/8 align-top leading-relaxed">
                        {getVal(n, row.key)}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* View page links */}
                <tr className="bg-white">
                  <td className="px-4 py-3 border border-forest/8" />
                  {chosen.map((n) => (
                    <td key={n.slug} className="px-4 py-4 border border-forest/8">
                      <Link
                        href={`/neighbourhood/${n.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest hover:text-gold transition-colors"
                      >
                        Full profile →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 text-muted border border-dashed border-forest/20 rounded-sm">
            <p className="text-lg font-medium mb-2">Select at least 2 neighbourhoods to compare</p>
            <p className="text-sm">Use the grid above to choose up to {MAX}.</p>
          </div>
        )}

        {/* Lead form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <LeadForm
            headline="Narrowed It Down? Let's Talk Listings."
            subtext="Tell us your shortlist and we'll pull current listings for each neighbourhood."
            source="compare-page"
          />
        </div>
      </div>
    </>
  )
}
