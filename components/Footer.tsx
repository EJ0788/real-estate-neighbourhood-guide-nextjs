import Link from 'next/link'
import { config } from '@/config/client'

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-display text-base font-semibold text-cream/80 mb-1">
              Corridor<span className="text-gold">Homes</span>.ca
            </div>
            <div className="text-xs text-cream/40 mb-4">
              {config.agentName} &nbsp;·&nbsp; {config.agentTitle}
            </div>
            <div className="flex flex-col gap-1.5">
              <a href={`tel:${config.agentPhone.replace(/\./g, '')}`} className="text-sm text-cream/50 hover:text-gold transition-colors">
                {config.agentPhone}
              </a>
              <a href={`mailto:${config.agentEmail}`} className="text-sm text-cream/50 hover:text-gold transition-colors">
                {config.agentEmail}
              </a>
              <a href={config.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/50 hover:text-gold transition-colors">
                {config.mainSiteUrl.replace('https://', '')}
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <Link href="/" className="text-sm text-cream/45 hover:text-gold transition-colors">Neighbourhoods</Link>
            <Link href="/market" className="text-sm text-cream/45 hover:text-gold transition-colors">Market Overview</Link>
            <Link href="/relocation" className="text-sm text-cream/45 hover:text-gold transition-colors">Relocation Guide</Link>
            <Link href="/compare" className="text-sm text-cream/45 hover:text-gold transition-colors">Compare</Link>
            <a href={config.schoolGuideUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/45 hover:text-gold transition-colors">School Guide</a>
            <a href={config.mainSiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/45 hover:text-gold transition-colors">Main Site</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.07] text-xs text-cream/25 leading-relaxed">
          © {new Date().getFullYear()} CorridorHomes.ca. {config.agentName} is a licensed REALTOR® with {config.agentTitle.replace('REALTOR® | ', '')} Squamish/Whistler.
          All market data represents Q1 2026 and is subject to change.
          Not intended to solicit buyers or sellers currently under contract.
        </div>
      </div>
    </footer>
  )
}
