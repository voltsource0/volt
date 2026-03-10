import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const MOCK_REPOS = {
  'next-js': { name: 'Next.js', ticker: 'NEXT', owner: 'vercel', repo: 'vercel/next.js', price: 0.0847, change: 12.4, marketCap: '847K', volume24h: '1.2M', holders: 1284, totalFees: '24,100', feeWallet: '7xKXt...9mPq', verified: true, description: 'The React Framework for the Web. Used by some of the world\'s largest companies.' },
  'tailwind-css': { name: 'Tailwind CSS', ticker: 'TWND', owner: 'tailwindlabs', repo: 'tailwindlabs/tailwindcss', price: 0.0623, change: 8.7, marketCap: '623K', volume24h: '890K', holders: 956, totalFees: '17,800', feeWallet: '3bRxt...4kLm', verified: true, description: 'A utility-first CSS framework for rapid UI development.' },
  'shadcn-ui': { name: 'shadcn/ui', ticker: 'SHAD', owner: 'shadcn', repo: 'shadcn-ui/ui', price: 0.0412, change: -3.2, marketCap: '412K', volume24h: '650K', holders: 743, totalFees: '13,000', feeWallet: '9pQxt...2nRs', verified: true, description: 'Beautifully designed components built with Radix UI and Tailwind CSS.' },
  'drizzle-orm': { name: 'Drizzle ORM', ticker: 'DRZL', owner: 'drizzle-team', repo: 'drizzle-team/drizzle-orm', price: 0.0298, change: 24.1, marketCap: '298K', volume24h: '430K', holders: 512, totalFees: '8,600', feeWallet: '5mKxt...7jWp', verified: true, description: 'TypeScript ORM that feels like writing SQL.' },
  'bun': { name: 'Bun', ticker: 'BUN', owner: 'oven-sh', repo: 'oven-sh/bun', price: 0.0556, change: 5.9, marketCap: '556K', volume24h: '780K', holders: 891, totalFees: '15,600', feeWallet: '2nLxt...8hTq', verified: true, description: 'Incredibly fast JavaScript runtime, bundler, test runner, and package manager.' },
  'hono': { name: 'Hono', ticker: 'HONO', owner: 'honojs', repo: 'honojs/hono', price: 0.0189, change: 31.2, marketCap: '189K', volume24h: '320K', holders: 387, totalFees: '6,400', feeWallet: '8kPxt...3mNr', verified: false, description: 'Ultrafast web framework for the Edges.' },
}

const MOCK_TRADES = [
  { type: 'buy', amount: '2,400', price: 0.0851, time: '2 min ago', wallet: '7xK...9mP' },
  { type: 'buy', amount: '800', price: 0.0849, time: '5 min ago', wallet: '3bR...4kL' },
  { type: 'sell', amount: '1,200', price: 0.0844, time: '12 min ago', wallet: '9pQ...2nR' },
  { type: 'buy', amount: '5,000', price: 0.0840, time: '18 min ago', wallet: '5mK...7jW' },
  { type: 'buy', amount: '950', price: 0.0838, time: '24 min ago', wallet: '2nL...8hT' },
  { type: 'sell', amount: '3,100', price: 0.0835, time: '31 min ago', wallet: '8kP...3mN' },
  { type: 'buy', amount: '1,600', price: 0.0830, time: '45 min ago', wallet: '4jR...6pK' },
  { type: 'buy', amount: '420', price: 0.0828, time: '1 hr ago', wallet: '6mT...1nQ' },
]

function Repo() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const data = MOCK_REPOS[id]

  if (!data) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-white mb-3">Token not found</h1>
        <p className="text-gray-400 mb-6">This repo token doesn't exist yet.</p>
        <Link to="/" className="text-volt hover:underline text-sm">Back to Home</Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="w-14 h-14 rounded-xl bg-volt/10 border border-volt/20 flex items-center justify-center text-volt font-bold text-lg shrink-0">
            {data.ticker.slice(0, 2)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-white">{data.name}</h1>
              {data.verified ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Verified
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                  Unverified
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-400 font-mono">${data.ticker}</span>
              <span className="text-gray-600">|</span>
              <a href={`https://github.com/${data.repo}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-volt transition-colors flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                {data.repo}
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3 max-w-xl">{data.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column — price & trading */}
        <div className="lg:col-span-2 space-y-6">
          {/* Price Card */}
          <div className="border border-border rounded-xl bg-surface-raised p-6">
            <div className="flex items-end gap-4 mb-6">
              <div>
                <div className="text-xs text-gray-500 mb-1">Current Price</div>
                <div className="text-4xl font-bold text-white font-mono">${data.price.toFixed(4)}</div>
              </div>
              <div className={`text-lg font-mono font-semibold ${data.change >= 0 ? 'text-green-400' : 'text-red-400'} mb-1`}>
                {data.change >= 0 ? '+' : ''}{data.change}%
              </div>
            </div>

            {/* Price chart placeholder */}
            <div className="w-full h-48 rounded-lg bg-white/[0.02] border border-border flex items-center justify-center mb-6">
              <div className="text-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-600 mx-auto mb-2">
                  <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16l4-8 4 4 4-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs text-gray-600">Price chart coming soon</p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3.5 bg-volt text-black font-semibold rounded-lg hover:bg-volt-dark transition-colors text-sm"
            >
              Buy ${data.ticker}
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MiniStat label="Market Cap" value={`$${data.marketCap}`} />
            <MiniStat label="24h Volume" value={`$${data.volume24h}`} />
            <MiniStat label="Holders" value={data.holders.toLocaleString()} />
            <MiniStat label="24h Change" value={`${data.change >= 0 ? '+' : ''}${data.change}%`} positive={data.change >= 0} />
          </div>

          {/* Trade History */}
          <div className="border border-border rounded-xl bg-surface-raised overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="text-sm font-semibold text-white">Recent Trades</h2>
            </div>
            <div className="divide-y divide-border">
              <div className="grid grid-cols-[70px_1fr_1fr_1fr_90px] gap-4 px-6 py-2.5 text-xs text-gray-500 uppercase tracking-wider font-medium">
                <span>Type</span>
                <span className="text-right">Amount</span>
                <span className="text-right">Price</span>
                <span className="text-right">Wallet</span>
                <span className="text-right">Time</span>
              </div>
              {MOCK_TRADES.map((trade, i) => (
                <div key={i} className="grid grid-cols-[70px_1fr_1fr_1fr_90px] gap-4 px-6 py-3 text-sm items-center hover:bg-white/[0.01]">
                  <span className={`inline-flex items-center justify-center w-12 py-0.5 rounded text-xs font-medium ${trade.type === 'buy' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    {trade.type === 'buy' ? 'BUY' : 'SELL'}
                  </span>
                  <span className="text-right text-gray-300 font-mono">{trade.amount}</span>
                  <span className="text-right text-gray-300 font-mono">${trade.price.toFixed(4)}</span>
                  <span className="text-right text-gray-500 font-mono text-xs">{trade.wallet}</span>
                  <span className="text-right text-gray-500 text-xs">{trade.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — creator fees */}
        <div className="space-y-6">
          {/* Creator Fees */}
          <div className="border border-border rounded-xl bg-surface-raised p-6">
            <h2 className="text-sm font-semibold text-white mb-4">Creator Fees</h2>
            <div className="space-y-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">Total Fees Earned</div>
                <div className="text-2xl font-bold text-volt font-mono">${data.totalFees}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Fee Rate</div>
                <div className="text-sm text-white">2.0% of all trades</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1">Fee Wallet</div>
                <div className="text-sm text-gray-400 font-mono break-all">{data.feeWallet}</div>
              </div>
              <button className="w-full py-2.5 bg-volt/10 text-volt border border-volt/20 rounded-lg hover:bg-volt/20 transition-colors text-sm font-medium">
                Claim Fees
              </button>
            </div>
          </div>

          {/* Token Info */}
          <div className="border border-border rounded-xl bg-surface-raised p-6">
            <h2 className="text-sm font-semibold text-white mb-4">Token Info</h2>
            <div className="space-y-3 text-sm">
              <InfoRow label="Network" value="Solana" />
              <InfoRow label="Type" value="SPL Token" />
              <InfoRow label="Curve" value="Bonding Curve" />
              <InfoRow label="Creator Fee" value="2.0%" />
              <InfoRow label="Protocol Fee" value="0.5%" />
            </div>
          </div>

          {/* $VOLT Info */}
          <div className="border border-volt/10 rounded-xl bg-volt/[0.03] p-6">
            <div className="flex items-center gap-2 mb-3">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-volt">
                <path d="M9 1L3 9H8L7 15L13 7H8L9 1Z" fill="currentColor"/>
              </svg>
              <h2 className="text-sm font-semibold text-volt">$VOLT Protocol</h2>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              0.5% of every trade auto-buys $VOLT from the open market and distributes to stakers. Every repo token trade fuels the protocol.
            </p>
          </div>
        </div>
      </div>

      {/* Wallet Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-sm border border-border rounded-2xl bg-surface-raised p-8 text-center">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/></svg>
            </button>
            <div className="w-14 h-14 rounded-2xl bg-volt/10 border border-volt/20 flex items-center justify-center mx-auto mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-volt">
                <rect x="2" y="6" width="20" height="14" rx="3"/>
                <path d="M16 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" stroke="none"/>
                <path d="M2 10h20"/>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Connect wallet to buy</h3>
            <p className="text-sm text-gray-400 mb-6">Connect a Solana wallet to buy and sell repo tokens.</p>
            <button className="w-full py-3 bg-volt text-black font-semibold rounded-lg hover:bg-volt-dark transition-colors text-sm mb-3">
              Connect Phantom
            </button>
            <button onClick={() => setShowModal(false)} className="w-full py-3 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 transition-colors text-sm">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function MiniStat({ label, value, positive }) {
  return (
    <div className="border border-border rounded-xl bg-surface-raised p-4">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className={`text-lg font-bold font-mono ${positive === true ? 'text-green-400' : positive === false ? 'text-red-400' : 'text-white'}`}>
        {value}
      </div>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-300">{value}</span>
    </div>
  )
}

export default Repo
