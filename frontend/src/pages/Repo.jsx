import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const MOCK_REPOS = {
  'next-js': { name: 'Next.js', ticker: 'NEXT', owner: 'vercel', repo: 'vercel/next.js', price: 0.0847, change: 12.4, marketCap: '$847,200', totalSupply: '10,000,000', volume24h: '$1,204,800', holders: '1,284', totalFees: '$24,100', unclaimedFees: '$3,420', feeWallet: '7xKXtR4p...9mPqW2', verified: true },
  'tailwind-css': { name: 'Tailwind CSS', ticker: 'TWND', owner: 'tailwindlabs', repo: 'tailwindlabs/tailwindcss', price: 0.0623, change: 8.7, marketCap: '$623,000', totalSupply: '10,000,000', volume24h: '$890,000', holders: '956', totalFees: '$17,800', unclaimedFees: '$2,150', feeWallet: '3bRxtK7m...4kLmN8', verified: true },
  'shadcn-ui': { name: 'shadcn/ui', ticker: 'SHAD', owner: 'shadcn', repo: 'shadcn-ui/ui', price: 0.0412, change: -3.2, marketCap: '$412,000', totalSupply: '10,000,000', volume24h: '$650,000', holders: '743', totalFees: '$13,000', unclaimedFees: '$1,800', feeWallet: '9pQxtM3r...2nRsY5', verified: true },
  'drizzle-orm': { name: 'Drizzle ORM', ticker: 'DRZL', owner: 'drizzle-team', repo: 'drizzle-team/drizzle-orm', price: 0.0298, change: 24.1, marketCap: '$298,000', totalSupply: '10,000,000', volume24h: '$430,000', holders: '512', totalFees: '$8,600', unclaimedFees: '$940', feeWallet: '5mKxtP9w...7jWpR3', verified: true },
  'bun': { name: 'Bun', ticker: 'BUN', owner: 'oven-sh', repo: 'oven-sh/bun', price: 0.0556, change: 5.9, marketCap: '$556,000', totalSupply: '10,000,000', volume24h: '$780,000', holders: '891', totalFees: '$15,600', unclaimedFees: '$2,080', feeWallet: '2nLxtQ8k...8hTqV6', verified: true },
  'hono': { name: 'Hono', ticker: 'HONO', owner: 'honojs', repo: 'honojs/hono', price: 0.0189, change: 31.2, marketCap: '$189,000', totalSupply: '10,000,000', volume24h: '$320,000', holders: '387', totalFees: '$6,400', unclaimedFees: '$6,400', feeWallet: '8kPxtN2m...3mNrT4', verified: false },
}

const MOCK_TRADES = [
  { type: 'BUY', amount: '2,400 NEXT', price: '$0.0851', wallet: '7xKXt...9mPq', time: '14:32:01' },
  { type: 'SELL', amount: '1,200 NEXT', price: '$0.0844', wallet: '9pQxt...2nRs', time: '14:21:17' },
  { type: 'BUY', amount: '5,000 NEXT', price: '$0.0840', wallet: '5mKxt...7jWp', time: '14:15:03' },
  { type: 'BUY', amount: '950 NEXT', price: '$0.0838', wallet: '2nLxt...8hTq', time: '14:09:22' },
  { type: 'SELL', amount: '3,100 NEXT', price: '$0.0835', wallet: '8kPxt...3mNr', time: '14:01:56' },
  { type: 'BUY', amount: '1,600 NEXT', price: '$0.0830', wallet: '4jRxt...6pKm', time: '13:48:11' },
]

function Repo() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const data = MOCK_REPOS[id]

  if (!data) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-xs text-muted uppercase tracking-wider mb-3">// error</div>
        <h1 className="text-xl font-bold text-white mb-2">token not found</h1>
        <p className="text-xs text-muted mb-6">this repo token doesn't exist yet.</p>
        <Link to="/" className="text-volt text-xs hover:text-volt-light transition-colors">&lt;- back to home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8 space-y-6">

      {/* TOP SECTION — two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

        {/* Left — token identity */}
        <div className="border border-[#2A2A35]">
          <div className="px-5 py-3 border-b border-[#2A2A35] bg-surface-raised">
            <span className="text-[10px] text-muted uppercase tracking-widest">TOKEN</span>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-2xl font-bold text-white">{data.name}</h1>
              <span className="text-xl font-bold text-volt">${data.ticker}</span>
              {data.verified ? (
                <span className="px-2 py-0.5 border border-green/30 bg-green/5 text-green text-[10px] font-semibold uppercase tracking-wider">
                  VERIFIED
                </span>
              ) : (
                <span className="px-2 py-0.5 border border-muted/30 bg-muted/5 text-muted text-[10px] font-semibold uppercase tracking-wider">
                  UNVERIFIED
                </span>
              )}
            </div>
            <a
              href={`https://github.com/${data.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted hover:text-volt transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              {data.repo}
            </a>
          </div>
        </div>

        {/* Right — price & buy/sell */}
        <div className="border border-[#2A2A35]">
          <div className="px-5 py-3 border-b border-[#2A2A35] bg-surface-raised flex items-center justify-between">
            <span className="text-[10px] text-muted uppercase tracking-widest">PRICE</span>
            <span className={`text-xs font-semibold ${data.change >= 0 ? 'text-green' : 'text-red'}`}>
              {data.change >= 0 ? '+' : ''}{data.change}% 24H
            </span>
          </div>
          <div className="p-5">
            <div className="text-3xl font-bold text-volt mb-6">${data.price.toFixed(4)}</div>
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3 bg-volt text-black text-xs font-bold hover:bg-volt-dark transition-colors uppercase tracking-wider mb-2"
            >
              BUY ${data.ticker}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3 border border-[#2A2A35] text-muted text-xs font-semibold hover:text-white hover:border-border-light transition-colors uppercase tracking-wider"
            >
              SELL ${data.ticker}
            </button>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION — chart & stats */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

        {/* Left — price chart placeholder */}
        <div className="border border-[#2A2A35]">
          <div className="px-5 py-3 border-b border-[#2A2A35] bg-surface-raised">
            <span className="text-[10px] text-muted uppercase tracking-widest">PRICE CHART</span>
          </div>
          <div className="p-5">
            <div className="w-full h-48 flex items-end justify-center relative">
              {/* Mock SVG chart line */}
              <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
                <polyline
                  points="0,100 30,95 60,88 90,92 120,70 150,65 180,72 210,55 240,48 270,52 300,35 330,40 360,28 390,20 400,22"
                  fill="none"
                  stroke="#F5C542"
                  strokeWidth="2"
                />
                <polyline
                  points="0,100 30,95 60,88 90,92 120,70 150,65 180,72 210,55 240,48 270,52 300,35 330,40 360,28 390,20 400,22 400,120 0,120"
                  fill="url(#chartGrad)"
                  stroke="none"
                />
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F5C542" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#F5C542" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2A2A35]" />
            </div>
          </div>
        </div>

        {/* Right — token stats grid */}
        <div className="border border-[#2A2A35]">
          <div className="px-5 py-3 border-b border-[#2A2A35] bg-surface-raised">
            <span className="text-[10px] text-muted uppercase tracking-widest">TOKEN STATS</span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#2A2A35]">
            <StatCell label="MARKET CAP" value={data.marketCap} />
            <StatCell label="TOTAL SUPPLY" value={data.totalSupply} />
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#2A2A35] border-t border-[#2A2A35]">
            <StatCell label="HOLDERS" value={data.holders} />
            <StatCell label="24H VOLUME" value={data.volume24h} />
          </div>
        </div>
      </div>

      {/* CREATOR FEES — full width */}
      <div className="border border-[#2A2A35]">
        <div className="px-5 py-3 border-b border-[#2A2A35] bg-surface-raised">
          <span className="text-[10px] text-muted uppercase tracking-widest">CREATOR FEES</span>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-[10px] text-muted uppercase tracking-widest mb-1">FEE WALLET</div>
              <div className="text-xs text-white">{data.feeWallet}</div>
            </div>
            <div>
              <div className="text-[10px] text-muted uppercase tracking-widest mb-1">TOTAL EARNED</div>
              <div className="text-xl font-bold text-volt">{data.totalFees}</div>
            </div>
            <div>
              <div className="text-[10px] text-muted uppercase tracking-widest mb-1">UNCLAIMED</div>
              <div className="text-xl font-bold text-white">{data.unclaimedFees}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-5 py-2.5 border border-volt text-volt text-xs font-semibold hover:bg-volt hover:text-black transition-colors uppercase tracking-wider">
              CLAIM FEES
            </button>
          </div>

          {!data.verified && (
            <div className="border border-[#2A2A35] bg-surface-raised p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-white font-semibold mb-1">UNVERIFIED</div>
                <div className="text-[11px] text-muted">This repo has unclaimed fees. Are you the maintainer?</div>
              </div>
              <button className="px-5 py-2.5 bg-volt text-black text-xs font-bold hover:bg-volt-dark transition-colors uppercase tracking-wider shrink-0">
                VERIFY OWNERSHIP
              </button>
            </div>
          )}
        </div>
      </div>

      {/* TRADE HISTORY — full width */}
      <div className="border border-[#2A2A35]">
        <div className="px-5 py-3 border-b border-[#2A2A35] bg-surface-raised flex items-center justify-between">
          <span className="text-[10px] text-muted uppercase tracking-widest">TRADE HISTORY</span>
          <span className="text-[10px] text-muted">{MOCK_TRADES.length} trades</span>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[70px_1fr_1fr_1fr_90px] bg-surface-raised border-b border-[#2A2A35]">
          <div className="px-5 py-2.5 text-[10px] text-muted uppercase tracking-widest">TYPE</div>
          <div className="px-5 py-2.5 text-[10px] text-muted uppercase tracking-widest text-right">AMOUNT</div>
          <div className="px-5 py-2.5 text-[10px] text-muted uppercase tracking-widest text-right">PRICE</div>
          <div className="px-5 py-2.5 text-[10px] text-muted uppercase tracking-widest text-right">WALLET</div>
          <div className="px-5 py-2.5 text-[10px] text-muted uppercase tracking-widest text-right">TIME</div>
        </div>

        {/* Rows */}
        {MOCK_TRADES.map((trade, i) => (
          <div key={i} className="grid grid-cols-[70px_1fr_1fr_1fr_90px] border-b border-[#2A2A35] last:border-b-0 hover:bg-white/[0.01] transition-colors">
            <div className="px-5 py-3">
              <span className={`text-[11px] font-bold ${trade.type === 'BUY' ? 'text-green' : 'text-red'}`}>
                {trade.type}
              </span>
            </div>
            <div className="px-5 py-3 text-xs text-white text-right">{trade.amount}</div>
            <div className="px-5 py-3 text-xs text-white text-right">{trade.price}</div>
            <div className="px-5 py-3 text-xs text-muted text-right">{trade.wallet}</div>
            <div className="px-5 py-3 text-xs text-muted text-right">{trade.time}</div>
          </div>
        ))}
      </div>

      {/* Wallet Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-sm border border-[#2A2A35] bg-surface-raised">
            <div className="px-5 py-3 border-b border-[#2A2A35] flex items-center justify-between">
              <span className="text-[10px] text-muted uppercase tracking-widest">CONNECT WALLET</span>
              <button onClick={() => setShowModal(false)} className="text-muted hover:text-white text-xs">[x]</button>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted mb-6">connect a solana wallet to buy and sell repo tokens.</p>
              <button className="w-full py-3 bg-volt text-black text-xs font-bold hover:bg-volt-dark transition-colors uppercase tracking-wider mb-2">
                CONNECT PHANTOM
              </button>
              <button onClick={() => setShowModal(false)} className="w-full py-3 border border-[#2A2A35] text-xs text-muted hover:text-white hover:border-border-light transition-colors uppercase tracking-wider">
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCell({ label, value }) {
  return (
    <div className="px-5 py-4">
      <div className="text-[10px] text-muted uppercase tracking-widest mb-1">{label}</div>
      <div className="text-sm font-bold text-white">{value}</div>
    </div>
  )
}

export default Repo
