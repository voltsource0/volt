import { Link } from 'react-router-dom'

const FEATURED_REPOS = [
  { id: 'next-js', name: 'next.js', ticker: 'NEXT', owner: 'vercel', price: 0.0847, change: 12.4, volume: '1.2M', mcap: '847K' },
  { id: 'tailwind-css', name: 'tailwindcss', ticker: 'TWND', owner: 'tailwindlabs', price: 0.0623, change: 8.7, volume: '890K', mcap: '623K' },
  { id: 'shadcn-ui', name: 'shadcn/ui', ticker: 'SHAD', owner: 'shadcn', price: 0.0412, change: -3.2, volume: '650K', mcap: '412K' },
  { id: 'drizzle-orm', name: 'drizzle-orm', ticker: 'DRZL', owner: 'drizzle-team', price: 0.0298, change: 24.1, volume: '430K', mcap: '298K' },
  { id: 'bun', name: 'bun', ticker: 'BUN', owner: 'oven-sh', price: 0.0556, change: 5.9, volume: '780K', mcap: '556K' },
  { id: 'hono', name: 'hono', ticker: 'HONO', owner: 'honojs', price: 0.0189, change: 31.2, volume: '320K', mcap: '189K' },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative grid-bg scanlines overflow-hidden border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-16 relative">
          <div className="text-xs text-muted mb-6">
            <span className="text-volt pulse-dot mr-2">*</span>
            live on solana devnet
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            get paid for the<br />
            open source you build<span className="text-volt cursor-blink">_</span>
          </h1>

          <p className="text-sm md:text-base text-muted max-w-lg mb-10 leading-relaxed">
            connect your github repo. get a tradeable token.<br />
            earn 2% creator fees on every trade, forever.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/launch"
              className="px-5 py-2.5 bg-volt text-black text-xs font-semibold hover:bg-volt-dark transition-colors uppercase tracking-wider"
            >
              Launch a Token
            </Link>
            <a
              href="#repos"
              className="px-5 py-2.5 text-xs font-semibold border border-border text-muted hover:text-white hover:border-border-light transition-colors uppercase tracking-wider"
            >
              Browse Repos
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-border bg-surface-raised">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-border">
            <Stat label="REPOS" value="2,847" />
            <Stat label="FEES PAID" value="$4.2M" />
            <Stat label="VOLUME" value="$218M" />
          </div>
        </div>
      </section>

      {/* How It Works — horizontal timeline */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-b border-border">
        <div className="text-xs text-muted uppercase tracking-wider mb-12">How it works</div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-4 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Step
              num="01"
              title="connect your repo"
              desc="sign in with github. select any repo you own. we verify ownership automatically."
            />
            <Step
              num="02"
              title="token is minted"
              desc="an SPL token is created on solana with a bonding curve. anyone can buy or sell."
            />
            <Step
              num="03"
              title="earn 2% forever"
              desc="every trade generates a 2% creator fee sent directly to your wallet. no caps."
            />
          </div>
        </div>
      </section>

      {/* Trending Repos — terminal table */}
      <section id="repos" className="max-w-[1200px] mx-auto px-6 py-16 border-b border-border">
        <div className="flex items-baseline justify-between mb-6">
          <div className="text-xs text-muted uppercase tracking-wider">Trending Repos</div>
          <div className="text-xs text-muted">
            {FEATURED_REPOS.length} results
          </div>
        </div>

        <div className="border border-border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_70px_90px_80px_80px_80px] md:grid-cols-[1fr_100px_100px_100px_100px_100px] gap-0 bg-surface-raised border-b border-border">
            <TH>PROJECT</TH>
            <TH right>TICKER</TH>
            <TH right>PRICE</TH>
            <TH right>24H</TH>
            <TH right>MCAP</TH>
            <TH right>VOL</TH>
          </div>

          {/* Rows */}
          {FEATURED_REPOS.map((repo, i) => (
            <Link
              key={repo.id}
              to={`/repo/${repo.id}`}
              className="grid grid-cols-[1fr_70px_90px_80px_80px_80px] md:grid-cols-[1fr_100px_100px_100px_100px_100px] gap-0 border-b border-border last:border-b-0 hover:bg-white/[0.015] transition-colors group"
            >
              <TD>
                <span className="text-muted mr-3 text-xs">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-white group-hover:text-volt transition-colors">{repo.owner}/{repo.name}</span>
              </TD>
              <TD right><span className="text-volt">${repo.ticker}</span></TD>
              <TD right><span className="text-white">${repo.price.toFixed(4)}</span></TD>
              <TD right>
                <span className={repo.change >= 0 ? 'text-green' : 'text-red'}>
                  {repo.change >= 0 ? '+' : ''}{repo.change}%
                </span>
              </TD>
              <TD right>${repo.mcap}</TD>
              <TD right>${repo.volume}</TD>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-xs text-muted uppercase tracking-wider mb-4">Ready?</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            the highest creator fees in the market<span className="text-volt cursor-blink">_</span>
          </h2>
          <p className="text-sm text-muted mb-8">2% of all trading volume. forever. no paperwork.</p>
          <Link
            to="/launch"
            className="inline-block px-5 py-2.5 bg-volt text-black text-xs font-semibold hover:bg-volt-dark transition-colors uppercase tracking-wider"
          >
            Launch a Token
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs">
              <span className="text-volt font-semibold">volt</span>
              <span className="text-muted ml-2">// open source funding protocol</span>
            </div>
            <div className="flex gap-6 text-xs text-muted">
              <a href="#" className="hover:text-white transition-colors">docs</a>
              <a href="#" className="hover:text-white transition-colors">github</a>
              <a href="#" className="hover:text-white transition-colors">twitter</a>
              <a href="#" className="hover:text-white transition-colors">discord</a>
            </div>
            <div className="text-xs text-border-light">solana mainnet</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="text-[10px] text-muted uppercase tracking-widest mb-1">{label}</div>
      <div className="text-lg md:text-xl font-bold text-white">{value}</div>
    </div>
  )
}

function Step({ num, title, desc }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 border border-volt bg-volt/10 flex items-center justify-center text-volt text-xs font-bold shrink-0 relative z-10">
          {num}
        </div>
        <div className="text-sm font-semibold text-white">{title}</div>
      </div>
      <p className="text-xs text-muted leading-relaxed pl-11">{desc}</p>
    </div>
  )
}

function TH({ children, right }) {
  return (
    <div className={`px-4 py-2.5 text-[10px] text-muted uppercase tracking-widest font-medium ${right ? 'text-right' : ''}`}>
      {children}
    </div>
  )
}

function TD({ children, right }) {
  return (
    <div className={`px-4 py-3 text-xs ${right ? 'text-right' : 'flex items-center'}`}>
      {children}
    </div>
  )
}

export default Home
