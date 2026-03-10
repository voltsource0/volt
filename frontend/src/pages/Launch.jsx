import { useState } from 'react'
import { Link } from 'react-router-dom'

function Launch() {
  const [repoUrl, setRepoUrl] = useState('')
  const [tokenName, setTokenName] = useState('')
  const [ticker, setTicker] = useState('')
  const [description, setDescription] = useState('')
  const [launched, setLaunched] = useState(false)

  const repoName = repoUrl.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\.git$/, '').replace(/\/$/, '')
  const isValid = repoUrl && tokenName && ticker && ticker.length >= 2

  function handleTickerChange(e) {
    const val = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 6)
    setTicker(val)
  }

  function handleLaunch(e) {
    e.preventDefault()
    if (!isValid) return
    setLaunched(true)
  }

  if (launched) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-volt/10 border border-volt/20 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-volt">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Token launched!</h1>
        <p className="text-gray-400 mb-2">
          <span className="text-white font-medium">${ticker}</span> for <span className="text-white font-medium">{tokenName}</span> is now live.
        </p>
        <p className="text-sm text-gray-500 mb-8">This is a UI preview. Solana integration coming soon.</p>
        <div className="flex gap-4 justify-center">
          <Link to={`/repo/${ticker.toLowerCase()}`} className="px-5 py-2.5 bg-volt text-black font-medium rounded-lg hover:bg-volt-dark transition-colors text-sm">
            View Token Page
          </Link>
          <button onClick={() => setLaunched(false)} className="px-5 py-2.5 bg-white/5 text-white rounded-lg border border-border hover:bg-white/10 transition-colors text-sm">
            Launch Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-xl mb-12">
        <h1 className="text-3xl font-bold text-white mb-3">Launch a token</h1>
        <p className="text-gray-400">Connect a GitHub repo and mint a tradeable token. Earn 2% creator fees on every trade.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Form */}
        <form onSubmit={handleLaunch} className="lg:col-span-3 space-y-6">
          <Field label="GitHub Repository URL" hint="Paste the full URL of your public repo">
            <input
              type="url"
              placeholder="https://github.com/your-name/your-repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full px-4 py-3 bg-surface-raised border border-border rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-volt/50 focus:ring-1 focus:ring-volt/20 transition-colors"
            />
          </Field>

          <Field label="Token Name" hint="The display name for your token">
            <input
              type="text"
              placeholder="e.g. My Awesome Project"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              maxLength={32}
              className="w-full px-4 py-3 bg-surface-raised border border-border rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-volt/50 focus:ring-1 focus:ring-volt/20 transition-colors"
            />
          </Field>

          <Field label="Ticker Symbol" hint="2-6 uppercase letters, e.g. NEXT">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <input
                type="text"
                placeholder="TICKER"
                value={ticker}
                onChange={handleTickerChange}
                className="w-full pl-8 pr-4 py-3 bg-surface-raised border border-border rounded-lg text-white placeholder-gray-600 text-sm font-mono uppercase focus:outline-none focus:border-volt/50 focus:ring-1 focus:ring-volt/20 transition-colors"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-600">{ticker.length}/6</span>
            </div>
          </Field>

          <Field label="Description" hint="Brief description of your project (optional)">
            <textarea
              placeholder="What does your project do?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              maxLength={280}
              className="w-full px-4 py-3 bg-surface-raised border border-border rounded-lg text-white placeholder-gray-600 text-sm focus:outline-none focus:border-volt/50 focus:ring-1 focus:ring-volt/20 transition-colors resize-none"
            />
          </Field>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-3.5 bg-volt text-black font-semibold rounded-lg hover:bg-volt-dark transition-colors text-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Launch Token
            </button>
            <p className="text-xs text-gray-600 mt-3 text-center">
              By launching, you confirm you own this repository. Fees: 2% to creator, 0.5% to $VOLT stakers.
            </p>
          </div>
        </form>

        {/* Live Preview */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            <div className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-3">Preview</div>
            <div className="border border-border rounded-xl bg-surface-raised p-6 space-y-5">
              {/* Token header */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-volt/10 border border-volt/20 flex items-center justify-center text-volt font-bold text-sm shrink-0">
                  {ticker ? ticker.slice(0, 2) : '??'}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-lg truncate">
                    {tokenName || 'Token Name'}
                  </div>
                  <div className="text-sm text-gray-500 font-mono">
                    {ticker ? `$${ticker}` : '$TICKER'}
                  </div>
                </div>
              </div>

              {/* Repo link */}
              {repoName && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-border text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 shrink-0">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="text-gray-400 truncate">{repoName}</span>
                </div>
              )}

              {/* Description */}
              {description && (
                <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
              )}

              {/* Mock price */}
              <div className="border-t border-border pt-4">
                <div className="text-xs text-gray-500 mb-1">Starting Price</div>
                <div className="text-2xl font-bold text-white font-mono">$0.0001</div>
                <div className="text-xs text-gray-500 mt-1">Bonding curve — price increases with demand</div>
              </div>

              {/* Fee info */}
              <div className="flex gap-3">
                <div className="flex-1 px-3 py-2.5 rounded-lg bg-volt/5 border border-volt/10 text-center">
                  <div className="text-volt font-bold text-sm">2.0%</div>
                  <div className="text-[11px] text-gray-500">Creator Fee</div>
                </div>
                <div className="flex-1 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-border text-center">
                  <div className="text-white font-bold text-sm">0.5%</div>
                  <div className="text-[11px] text-gray-500">$VOLT Buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, hint, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1.5">{label}</label>
      {hint && <p className="text-xs text-gray-500 mb-2">{hint}</p>}
      {children}
    </div>
  )
}

export default Launch
