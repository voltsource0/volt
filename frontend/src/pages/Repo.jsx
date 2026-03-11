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
  { type: 'Buy', amount: '2,400', price: '$0.0851', wallet: '7xKXt...9mPq', time: '2 min ago' },
  { type: 'Sell', amount: '1,200', price: '$0.0844', wallet: '9pQxt...2nRs', time: '12 min ago' },
  { type: 'Buy', amount: '5,000', price: '$0.0840', wallet: '5mKxt...7jWp', time: '18 min ago' },
  { type: 'Buy', amount: '950', price: '$0.0838', wallet: '2nLxt...8hTq', time: '24 min ago' },
  { type: 'Sell', amount: '3,100', price: '$0.0835', wallet: '8kPxt...3mNr', time: '31 min ago' },
  { type: 'Buy', amount: '1,600', price: '$0.0830', wallet: '4jRxt...6pKm', time: '45 min ago' },
]

function Repo() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const data = MOCK_REPOS[id]

  if (!data) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <h1 className="text-2xl font-semibold text-fg mb-2">Token not found</h1>
        <p className="text-sm text-fg-muted mb-4">This repo token doesn't exist yet.</p>
        <Link to="/" className="text-sm text-accent hover:underline">&larr; Back to home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-8 space-y-6">

      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Left — identity */}
        <div className="border border-border-default rounded-md bg-canvas-subtle p-5">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h1 className="text-2xl font-semibold text-fg">{data.name}</h1>
            <span className="text-base font-semibold text-accent mono">${data.ticker}</span>
            {data.verified ? (
              <span className="px-[7px] py-px text-xs font-medium text-success border border-success/30 rounded-2xl">Verified</span>
            ) : (
              <span className="px-[7px] py-px text-xs font-medium text-fg-subtle border border-border-default rounded-2xl">Unverified</span>
            )}
          </div>
          <a href={`https://github.com/${data.repo}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-fg-muted">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            {data.repo}
          </a>
        </div>

        {/* Right — price & actions */}
        <div className="border border-border-default rounded-md bg-canvas-subtle p-5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-fg-subtle">Current price</span>
            <span className={`text-xs font-medium ${data.change >= 0 ? 'text-success' : 'text-danger'}`}>
              {data.change >= 0 ? '+' : ''}{data.change}% 24h
            </span>
          </div>
          <div className="text-3xl font-semibold text-fg mono mb-5">${data.price.toFixed(4)}</div>
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors mb-2"
          >
            Buy ${data.ticker}
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-[5px] text-sm font-medium text-fg bg-canvas-subtle border border-border-default rounded-md hover:border-fg-subtle transition-colors"
          >
            Sell ${data.ticker}
          </button>
        </div>
      </div>

      {/* Middle — chart & stats */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Chart */}
        <div className="border border-border-default rounded-md bg-canvas-subtle p-5">
          <p className="text-xs text-fg-subtle font-semibold mb-4">Price chart</p>
          <div className="w-full h-48 flex items-end relative">
            <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
              <polyline
                points="0,100 30,95 60,88 90,92 120,70 150,65 180,72 210,55 240,48 270,52 300,35 330,40 360,28 390,20 400,22"
                fill="none"
                stroke="#3fb950"
                strokeWidth="2"
              />
              <polyline
                points="0,100 30,95 60,88 90,92 120,70 150,65 180,72 210,55 240,48 270,52 300,35 330,40 360,28 390,20 400,22 400,120 0,120"
                fill="url(#chartGrad)"
                stroke="none"
              />
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3fb950" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#3fb950" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-border-muted" />
          </div>
        </div>

        {/* Stats */}
        <div className="border border-border-default rounded-md bg-canvas-subtle">
          <p className="text-xs text-fg-subtle font-semibold px-5 pt-4 pb-3">Token stats</p>
          <div className="grid grid-cols-2">
            <StatCell label="Market cap" value={data.marketCap} />
            <StatCell label="Total supply" value={data.totalSupply} border />
          </div>
          <div className="grid grid-cols-2 border-t border-border-muted">
            <StatCell label="Holders" value={data.holders} />
            <StatCell label="24h volume" value={data.volume24h} border />
          </div>
        </div>
      </div>

      {/* Creator fees */}
      <div className="border border-border-default rounded-md bg-canvas-subtle p-5">
        <p className="text-xs text-fg-subtle font-semibold mb-4">Creator fees</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          <div>
            <p className="text-xs text-fg-subtle mb-1">Fee wallet</p>
            <p className="text-sm text-fg mono">{data.feeWallet}</p>
          </div>
          <div>
            <p className="text-xs text-fg-subtle mb-1">Total earned</p>
            <p className="text-xl font-semibold text-success">{data.totalFees}</p>
          </div>
          <div>
            <p className="text-xs text-fg-subtle mb-1">Unclaimed</p>
            <p className="text-xl font-semibold text-fg">{data.unclaimedFees}</p>
          </div>
        </div>

        <button className="px-4 py-[5px] text-sm font-medium text-fg bg-canvas-subtle border border-border-default rounded-md hover:border-fg-subtle transition-colors mb-4">
          Claim fees
        </button>

        {!data.verified && (
          <div className="border border-attention/30 bg-attention/5 rounded-md p-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-fg mb-0.5">Unverified</p>
              <p className="text-xs text-fg-muted">This repo has unclaimed fees. Are you the maintainer?</p>
            </div>
            <button className="px-4 py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors shrink-0">
              Verify ownership
            </button>
          </div>
        )}
      </div>

      {/* Trade history */}
      <div className="border border-border-default rounded-md bg-canvas-subtle overflow-hidden">
        <div className="px-5 py-3 flex items-center justify-between">
          <p className="text-xs text-fg-subtle font-semibold">Trade history</p>
          <p className="text-xs text-fg-subtle">{MOCK_TRADES.length} trades</p>
        </div>

        <div className="border-t border-border-muted">
          <div className="grid grid-cols-[70px_1fr_1fr_1fr_100px] bg-canvas-inset border-b border-border-muted">
            <TH>Type</TH>
            <TH right>Amount</TH>
            <TH right>Price</TH>
            <TH right>Wallet</TH>
            <TH right>Time</TH>
          </div>

          {MOCK_TRADES.map((trade, i) => (
            <div key={i} className="grid grid-cols-[70px_1fr_1fr_1fr_100px] border-b border-border-muted last:border-b-0 hover:bg-white/[0.02] transition-colors">
              <div className="px-5 py-2.5">
                <span className={`text-xs font-medium ${trade.type === 'Buy' ? 'text-success' : 'text-danger'}`}>
                  {trade.type}
                </span>
              </div>
              <div className="px-5 py-2.5 text-sm text-fg text-right mono">{trade.amount}</div>
              <div className="px-5 py-2.5 text-sm text-fg text-right mono">{trade.price}</div>
              <div className="px-5 py-2.5 text-sm text-fg-muted text-right mono">{trade.wallet}</div>
              <div className="px-5 py-2.5 text-xs text-fg-subtle text-right">{trade.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wallet modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-sm border border-border-default rounded-md bg-canvas-overlay shadow-lg">
            <div className="px-5 py-3 border-b border-border-muted flex items-center justify-between">
              <span className="text-sm font-semibold text-fg">Connect wallet</span>
              <button onClick={() => setShowModal(false)} className="text-fg-muted hover:text-fg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
              </button>
            </div>
            <div className="p-5">
              <p className="text-sm text-fg-muted mb-5">Connect a Solana wallet to buy and sell repo tokens.</p>
              <button className="w-full py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors mb-2">
                Connect Phantom
              </button>
              <button onClick={() => setShowModal(false)} className="w-full py-[5px] text-sm font-medium text-fg bg-canvas-subtle border border-border-default rounded-md hover:border-fg-subtle transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function StatCell({ label, value, border }) {
  return (
    <div className={`px-5 py-3 ${border ? 'border-l border-border-muted' : ''}`}>
      <p className="text-xs text-fg-subtle mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-fg">{value}</p>
    </div>
  )
}

function TH({ children, right }) {
  return (
    <div className={`px-5 py-2 text-xs font-medium text-fg-subtle ${right ? 'text-right' : ''}`}>
      {children}
    </div>
  )
}

export default Repo
