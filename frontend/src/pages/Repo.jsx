import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const MOCK_REPOS = {
  'next-js': { name: 'next.js', ticker: 'NEXT', owner: 'vercel', repo: 'vercel/next.js', price: 0.0847, change: 12.4, marketCap: '847K', volume24h: '1.2M', holders: 1284, totalFees: '24,100', feeWallet: '7xKXtR4p...9mPqW2', verified: true, description: 'The React Framework for the Web.' },
  'tailwind-css': { name: 'tailwindcss', ticker: 'TWND', owner: 'tailwindlabs', repo: 'tailwindlabs/tailwindcss', price: 0.0623, change: 8.7, marketCap: '623K', volume24h: '890K', holders: 956, totalFees: '17,800', feeWallet: '3bRxtK7m...4kLmN8', verified: true, description: 'A utility-first CSS framework for rapid UI development.' },
  'shadcn-ui': { name: 'shadcn/ui', ticker: 'SHAD', owner: 'shadcn', repo: 'shadcn-ui/ui', price: 0.0412, change: -3.2, marketCap: '412K', volume24h: '650K', holders: 743, totalFees: '13,000', feeWallet: '9pQxtM3r...2nRsY5', verified: true, description: 'Beautifully designed components built with Radix UI and Tailwind CSS.' },
  'drizzle-orm': { name: 'drizzle-orm', ticker: 'DRZL', owner: 'drizzle-team', repo: 'drizzle-team/drizzle-orm', price: 0.0298, change: 24.1, marketCap: '298K', volume24h: '430K', holders: 512, totalFees: '8,600', feeWallet: '5mKxtP9w...7jWpR3', verified: true, description: 'TypeScript ORM that feels like writing SQL.' },
  'bun': { name: 'bun', ticker: 'BUN', owner: 'oven-sh', repo: 'oven-sh/bun', price: 0.0556, change: 5.9, marketCap: '556K', volume24h: '780K', holders: 891, totalFees: '15,600', feeWallet: '2nLxtQ8k...8hTqV6', verified: true, description: 'Incredibly fast JavaScript runtime, bundler, test runner, and package manager.' },
  'hono': { name: 'hono', ticker: 'HONO', owner: 'honojs', repo: 'honojs/hono', price: 0.0189, change: 31.2, marketCap: '189K', volume24h: '320K', holders: 387, totalFees: '6,400', feeWallet: '8kPxtN2m...3mNrT4', verified: false, description: 'Ultrafast web framework for the Edges.' },
}

const MOCK_TRADES = [
  { type: 'BUY', amount: '2,400', price: 0.0851, time: '14:32:01', wallet: '7xKXt...9mPq' },
  { type: 'BUY', amount: '800', price: 0.0849, time: '14:28:44', wallet: '3bRxt...4kLm' },
  { type: 'SELL', amount: '1,200', price: 0.0844, time: '14:21:17', wallet: '9pQxt...2nRs' },
  { type: 'BUY', amount: '5,000', price: 0.0840, time: '14:15:03', wallet: '5mKxt...7jWp' },
  { type: 'BUY', amount: '950', price: 0.0838, time: '14:09:22', wallet: '2nLxt...8hTq' },
  { type: 'SELL', amount: '3,100', price: 0.0835, time: '14:01:56', wallet: '8kPxt...3mNr' },
  { type: 'BUY', amount: '1,600', price: 0.0830, time: '13:48:11', wallet: '4jRxt...6pKm' },
  { type: 'BUY', amount: '420', price: 0.0828, time: '13:32:08', wallet: '6mTxt...1nQr' },
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
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Header */}
      <div className="border-b border-border pb-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-xl font-bold text-white">{data.name}</h1>
          <span className="text-volt text-sm">${data.ticker}</span>
          {data.verified ? (
            <span className="px-2 py-0.5 border border-green/30 bg-green/5 text-green text-[10px] uppercase tracking-wider">
              verified
            </span>
          ) : (
            <span className="px-2 py-0.5 border border-volt/30 bg-volt/5 text-volt text-[10px] uppercase tracking-wider">
              unverified
            </span>
          )}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted">
          <a href={`https://github.com/${data.repo}`} target="_blank" rel="noopener noreferrer" className="hover:text-volt transition-colors">
            github.com/{data.repo}
          </a>
          <span className="text-border-light">|</span>
          <span>{data.description}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — price & trades */}
        <div className="lg:col-span-2 space-y-6">
          {/* Price */}
          <div className="border border-border bg-surface-raised">
            <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
              <span className="text-[10px] text-muted uppercase tracking-widest">PRICE</span>
              <span className="text-[10px] text-muted">24H</span>
            </div>
            <div className="p-4">
              <div className="flex items-end gap-4 mb-6">
                <div className="text-3xl font-bold text-white">${data.price.toFixed(4)}</div>
                <div className={`text-sm font-semibold ${data.change >= 0 ? 'text-green' : 'text-red'} mb-0.5`}>
                  {data.change >= 0 ? '+' : ''}{data.change}%
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="w-full h-40 border border-border bg-surface flex items-center justify-center mb-6">
                <span className="text-xs text-muted">// chart coming soon</span>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full py-3 bg-volt text-black text-xs font-bold hover:bg-volt-dark transition-colors uppercase tracking-wider"
              >
                BUY ${data.ticker}
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-0 border border-border">
            <MiniStat label="MCAP" value={`$${data.marketCap}`} />
            <MiniStat label="24H VOL" value={`$${data.volume24h}`} border />
            <MiniStat label="HOLDERS" value={data.holders.toLocaleString()} border />
            <MiniStat label="24H" value={`${data.change >= 0 ? '+' : ''}${data.change}%`} border color={data.change >= 0 ? 'text-green' : 'text-red'} />
          </div>

          {/* Trade History */}
          <div className="border border-border">
            <div className="px-4 py-2.5 border-b border-border flex items-center justify-between bg-surface-raised">
              <span className="text-[10px] text-muted uppercase tracking-widest">RECENT TRADES</span>
              <span className="text-[10px] text-muted">{MOCK_TRADES.length} trades</span>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-[60px_1fr_1fr_1fr_80px] gap-0 bg-surface-raised border-b border-border">
              <div className="px-4 py-2 text-[10px] text-muted uppercase tracking-widest">SIDE</div>
              <div className="px-4 py-2 text-[10px] text-muted uppercase tracking-widest text-right">QTY</div>
              <div className="px-4 py-2 text-[10px] text-muted uppercase tracking-widest text-right">PRICE</div>
              <div className="px-4 py-2 text-[10px] text-muted uppercase tracking-widest text-right">WALLET</div>
              <div className="px-4 py-2 text-[10px] text-muted uppercase tracking-widest text-right">TIME</div>
            </div>

            {MOCK_TRADES.map((trade, i) => (
              <div key={i} className="grid grid-cols-[60px_1fr_1fr_1fr_80px] gap-0 border-b border-border last:border-b-0 hover:bg-white/[0.01]">
                <div className="px-4 py-2.5">
                  <span className={`text-[10px] font-bold uppercase ${trade.type === 'BUY' ? 'text-green' : 'text-red'}`}>
                    {trade.type}
                  </span>
                </div>
                <div className="px-4 py-2.5 text-xs text-right text-white">{trade.amount}</div>
                <div className="px-4 py-2.5 text-xs text-right text-white">${trade.price.toFixed(4)}</div>
                <div className="px-4 py-2.5 text-xs text-right text-muted">{trade.wallet}</div>
                <div className="px-4 py-2.5 text-xs text-right text-muted">{trade.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — fees & info */}
        <div className="space-y-6">
          {/* Creator Fees */}
          <div className="border border-border">
            <div className="px-4 py-2.5 border-b border-border bg-surface-raised">
              <span className="text-[10px] text-muted uppercase tracking-widest">CREATOR FEES</span>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="text-[10px] text-muted uppercase tracking-wider mb-1">TOTAL EARNED</div>
                <div className="text-xl font-bold text-volt">${data.totalFees}</div>
              </div>
              <div className="border-t border-border pt-3">
                <div className="text-[10px] text-muted uppercase tracking-wider mb-1">FEE RATE</div>
                <div className="text-xs text-white">2.0% of all trades</div>
              </div>
              <div className="border-t border-border pt-3">
                <div className="text-[10px] text-muted uppercase tracking-wider mb-1">FEE WALLET</div>
                <div className="text-xs text-muted break-all">{data.feeWallet}</div>
              </div>
              <button className="w-full py-2.5 border border-volt text-volt text-xs font-semibold hover:bg-volt hover:text-black transition-colors uppercase tracking-wider">
                Claim Fees
              </button>
            </div>
          </div>

          {/* Token Info */}
          <div className="border border-border">
            <div className="px-4 py-2.5 border-b border-border bg-surface-raised">
              <span className="text-[10px] text-muted uppercase tracking-widest">TOKEN INFO</span>
            </div>
            <div className="divide-y divide-border">
              <InfoRow label="NETWORK" value="Solana" />
              <InfoRow label="TYPE" value="SPL Token" />
              <InfoRow label="CURVE" value="Bonding" />
              <InfoRow label="CREATOR FEE" value="2.0%" highlight />
              <InfoRow label="PROTOCOL FEE" value="0.5%" />
            </div>
          </div>

          {/* $VOLT */}
          <div className="border border-volt/20 bg-volt/[0.02]">
            <div className="px-4 py-2.5 border-b border-volt/20">
              <span className="text-[10px] text-volt uppercase tracking-widest font-semibold">$VOLT PROTOCOL</span>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-muted leading-relaxed">
                0.5% of every trade auto-buys $VOLT from the open market and distributes to stakers. every trade on every repo token fuels the protocol.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          <div className="relative w-full max-w-sm border border-border bg-surface-raised">
            <div className="px-4 py-2.5 border-b border-border flex items-center justify-between">
              <span className="text-[10px] text-muted uppercase tracking-widest">CONNECT WALLET</span>
              <button onClick={() => setShowModal(false)} className="text-muted hover:text-white text-xs">[x]</button>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted mb-6">connect a solana wallet to buy and sell repo tokens.</p>
              <button className="w-full py-3 bg-volt text-black text-xs font-bold hover:bg-volt-dark transition-colors uppercase tracking-wider mb-3">
                Connect Phantom
              </button>
              <button onClick={() => setShowModal(false)} className="w-full py-3 border border-border text-xs text-muted hover:text-white hover:border-border-light transition-colors uppercase tracking-wider">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function MiniStat({ label, value, border, color }) {
  return (
    <div className={`p-3 ${border ? 'border-l border-border' : ''} bg-surface-raised`}>
      <div className="text-[10px] text-muted uppercase tracking-wider mb-1">{label}</div>
      <div className={`text-sm font-bold ${color || 'text-white'}`}>{value}</div>
    </div>
  )
}

function InfoRow({ label, value, highlight }) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5">
      <span className="text-[10px] text-muted uppercase tracking-wider">{label}</span>
      <span className={`text-xs ${highlight ? 'text-volt' : 'text-white'}`}>{value}</span>
    </div>
  )
}

export default Repo
