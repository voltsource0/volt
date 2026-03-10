import { Link } from 'react-router-dom'

const FEATURED_REPOS = [
  { id: 'next-js', name: 'Next.js', ticker: 'NEXT', owner: 'vercel', price: 0.0847, change: 12.4, volume: '1.2M' },
  { id: 'tailwind-css', name: 'Tailwind CSS', ticker: 'TWND', owner: 'tailwindlabs', price: 0.0623, change: 8.7, volume: '890K' },
  { id: 'shadcn-ui', name: 'shadcn/ui', ticker: 'SHAD', owner: 'shadcn', price: 0.0412, change: -3.2, volume: '650K' },
  { id: 'drizzle-orm', name: 'Drizzle ORM', ticker: 'DRZL', owner: 'drizzle-team', price: 0.0298, change: 24.1, volume: '430K' },
  { id: 'bun', name: 'Bun', ticker: 'BUN', owner: 'oven-sh', price: 0.0556, change: 5.9, volume: '780K' },
  { id: 'hono', name: 'Hono', ticker: 'HONO', owner: 'honojs', price: 0.0189, change: 31.2, volume: '320K' },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,197,66,0.08)_0%,_transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-volt/10 border border-volt/20 text-volt text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-volt animate-pulse" />
              Now live on Solana Devnet
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Get paid for the<br />
              open source<br />
              <span className="text-volt">you build.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
              Connect your GitHub repo. Get a tradeable token. Earn 2% creator fees on every trade, forever — settled instantly on-chain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/launch"
                className="px-6 py-3 bg-volt text-black font-semibold rounded-lg hover:bg-volt-dark transition-colors text-sm"
              >
                Launch a Token
              </Link>
              <a
                href="#repos"
                className="px-6 py-3 bg-white/5 text-white font-medium rounded-lg border border-border hover:border-border-light hover:bg-white/10 transition-colors text-sm"
              >
                Browse Repos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-surface-raised/50">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem label="Repos Funded" value="2,847" />
          <StatItem label="Creator Fees Paid" value="$4.2M" />
          <StatItem label="Total Volume" value="$218M" />
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-gray-400 max-w-lg mx-auto">Three steps from open source project to funded project. No paperwork, no invoices, no middleman.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            step="01"
            title="Connect your GitHub repo"
            description="Sign in with GitHub and select any repo you own. We verify ownership automatically."
            icon={<GitHubIcon />}
          />
          <StepCard
            step="02"
            title="Your repo gets its own token"
            description="An SPL token is minted on Solana with a bonding curve. Anyone can buy or sell it."
            icon={<TokenIcon />}
          />
          <StepCard
            step="03"
            title="Earn 2% of every trade, forever"
            description="Every buy and sell generates a 2% creator fee sent directly to your wallet. No caps, no limits."
            icon={<FeesIcon />}
          />
        </div>
      </section>

      {/* Featured Repos */}
      <section id="repos" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">Trending repos</h2>
            <p className="text-sm text-gray-400">Discover projects backed by the community</p>
          </div>
        </div>
        <div className="border border-border rounded-xl overflow-hidden bg-surface-raised/30">
          <div className="grid grid-cols-[1fr_80px_100px_80px_100px] md:grid-cols-[1fr_100px_120px_100px_120px] gap-4 px-6 py-3 text-xs text-gray-500 uppercase tracking-wider border-b border-border font-medium">
            <span>Project</span>
            <span className="text-right">Ticker</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h</span>
            <span className="text-right">Volume</span>
          </div>
          {FEATURED_REPOS.map((repo) => (
            <Link
              key={repo.id}
              to={`/repo/${repo.id}`}
              className="grid grid-cols-[1fr_80px_100px_80px_100px] md:grid-cols-[1fr_100px_120px_100px_120px] gap-4 px-6 py-4 border-b border-border last:border-b-0 hover:bg-white/[0.02] transition-colors items-center group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-volt/10 border border-volt/20 flex items-center justify-center shrink-0 text-volt text-xs font-bold">
                  {repo.ticker.slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-white group-hover:text-volt transition-colors truncate">{repo.name}</div>
                  <div className="text-xs text-gray-500">{repo.owner}</div>
                </div>
              </div>
              <div className="text-right text-sm text-gray-300 font-mono">${repo.ticker}</div>
              <div className="text-right text-sm text-white font-mono">${repo.price.toFixed(4)}</div>
              <div className={`text-right text-sm font-mono ${repo.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {repo.change >= 0 ? '+' : ''}{repo.change}%
              </div>
              <div className="text-right text-sm text-gray-400 font-mono">${repo.volume}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to fund your project?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">The highest creator fees in the market. 2% of all trading volume, forever.</p>
          <Link
            to="/launch"
            className="inline-flex px-6 py-3 bg-volt text-black font-semibold rounded-lg hover:bg-volt-dark transition-colors text-sm"
          >
            Launch a Token
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-volt/10 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-volt">
                  <path d="M9 1L3 9H8L7 15L13 7H8L9 1Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">Volt</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Docs</a>
              <a href="#" className="hover:text-gray-300 transition-colors">GitHub</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Discord</a>
            </div>
            <div className="text-xs text-gray-600">Built on Solana</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function StatItem({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white font-mono">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  )
}

function StepCard({ step, title, description, icon }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-surface-raised/50 hover:border-border-light transition-colors group">
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-lg bg-volt/10 border border-volt/20 flex items-center justify-center text-volt group-hover:bg-volt/20 transition-colors">
          {icon}
        </div>
        <span className="text-xs font-mono text-gray-600">{step}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function TokenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v12M6 12h12"/>
    </svg>
  )
}

function FeesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  )
}

export default Home
