import Link from 'next/link'
import type { Neighbourhood } from '@/data/neighbourhoods'

export default function NeighbourhoodCard({ n }: { n: Neighbourhood }) {
  return (
    <Link
      href={`/neighbourhood/${n.slug}`}
      className="group bg-white rounded-sm border border-forest/10 hover:border-gold/40 hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden"
    >
      {/* Colour band */}
      <div className="h-1 bg-gold w-full" />

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Name + price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-forest leading-snug group-hover:text-forest transition-colors">
            {n.name}
          </h3>
          <span className="text-xs font-bold text-gold bg-gold/10 px-2.5 py-1 rounded-sm whitespace-nowrap shrink-0 mt-0.5">
            {n.priceRange}
          </span>
        </div>

        {/* Vibe */}
        <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1">
          {n.vibe}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <Stat label="Vancouver" value={n.commute.vancouver} />
          <Stat label="Walk score" value={String(n.walkScore)} />
          {n.dom !== undefined ? (
            <Stat label="Avg DOM" value={`${n.dom}d`} />
          ) : (
            <Stat label="Listings" value="New" />
          )}
        </div>

        {/* Best for tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {n.bestFor.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-forest/70 bg-forest/6 border border-forest/10 px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-forest/60 group-hover:text-gold transition-colors mt-auto pt-2">
          Explore neighbourhood
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] font-semibold text-muted/60 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-semibold text-forest">{value}</span>
    </div>
  )
}
