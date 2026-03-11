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
      <div className="max-w-[540px] mx-auto px-6 py-16">
        <div className="border border-success/30 bg-success/5 rounded-md p-6">
          <h2 className="text-base font-semibold text-fg mb-1">Token launched</h2>
          <p className="text-sm text-fg-muted mb-1">
            <span className="text-fg font-medium">${ticker}</span> for <span className="text-fg font-medium">{tokenName}</span> is now live.
          </p>
          <p className="text-xs text-fg-subtle mb-6">This is a UI preview. Solana integration coming soon.</p>
          <div className="flex gap-3">
            <Link to={`/repo/${ticker.toLowerCase()}`} className="px-4 py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors">
              View token page
            </Link>
            <button onClick={() => setLaunched(false)} className="px-4 py-[5px] text-sm font-medium text-fg bg-canvas-subtle border border-border-default rounded-md hover:border-fg-subtle transition-colors">
              Launch another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-fg mb-2">Launch your repo on GitFunding</h1>
        <p className="text-sm text-fg-muted">Connect a GitHub repo and mint a tradeable token. Earn 2% creator fees on every trade.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[540px_1fr] gap-10">
        {/* Form */}
        <form onSubmit={handleLaunch} className="space-y-5">
          <Field label="Repository URL" hint="Paste the full URL of your public repo">
            <input
              type="url"
              placeholder="https://github.com/owner/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full px-3 py-[5px] bg-canvas border border-border-default rounded-md text-sm text-fg placeholder-fg-subtle focus:outline-none focus:border-[#388bfd] focus:shadow-[0_0_0_3px_rgba(56,139,253,0.3)] transition-colors"
            />
          </Field>

          <Field label="Token name" hint="The display name for your token">
            <input
              type="text"
              placeholder="e.g. My Awesome Project"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              maxLength={32}
              className="w-full px-3 py-[5px] bg-canvas border border-border-default rounded-md text-sm text-fg placeholder-fg-subtle focus:outline-none focus:border-[#388bfd] focus:shadow-[0_0_0_3px_rgba(56,139,253,0.3)] transition-colors"
            />
          </Field>

          <Field label="Ticker symbol" hint="2-6 uppercase letters, e.g. NEXT">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle text-sm">$</span>
              <input
                type="text"
                placeholder="TICKER"
                value={ticker}
                onChange={handleTickerChange}
                className="w-full pl-7 pr-14 py-[5px] bg-canvas border border-border-default rounded-md text-sm text-fg placeholder-fg-subtle uppercase focus:outline-none focus:border-[#388bfd] focus:shadow-[0_0_0_3px_rgba(56,139,253,0.3)] transition-colors mono"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-fg-subtle">{ticker.length}/6</span>
            </div>
          </Field>

          <Field label="Description" hint="Brief description of your project (optional)">
            <textarea
              placeholder="What does your project do?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              maxLength={280}
              className="w-full px-3 py-[5px] bg-canvas border border-border-default rounded-md text-sm text-fg placeholder-fg-subtle focus:outline-none focus:border-[#388bfd] focus:shadow-[0_0_0_3px_rgba(56,139,253,0.3)] transition-colors resize-none"
            />
          </Field>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Launch token
            </button>
            <p className="text-xs text-fg-subtle mt-3">
              By launching, you confirm you own this repository. Fees: 2% to creator, 0.5% to $GITFUND stakers.
            </p>
          </div>
        </form>

        {/* Live Preview */}
        <div>
          <div className="sticky top-[78px]">
            <p className="text-xs text-fg-muted font-semibold mb-3">Preview</p>
            <div className="border border-border-default rounded-md bg-canvas-subtle p-4">
              <div className="mb-3">
                <span className="text-sm font-semibold text-accent">
                  {repoName || 'owner/repo'}
                </span>
              </div>
              <p className="text-sm text-fg-muted mb-3">
                {description || 'Your project description will appear here.'}
              </p>
              <div className="flex items-center gap-3 text-xs text-fg-subtle mb-4">
                {ticker && (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-attention inline-block"></span>
                    Token: ${ticker}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
                  0
                </span>
              </div>

              <div className="border-t border-border-muted pt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-fg-subtle">Token name</span>
                  <span className="text-fg">{tokenName || '---'}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-fg-subtle">Starting price</span>
                  <span className="text-fg mono">$0.0001</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-fg-subtle">Creator fee</span>
                  <span className="text-success">2.0%</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-fg-subtle">Protocol fee</span>
                  <span className="text-fg">0.5%</span>
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
      <label className="block text-sm font-semibold text-fg mb-1.5">{label}</label>
      {hint && <p className="text-xs text-fg-muted mb-1.5">{hint}</p>}
      {children}
    </div>
  )
}

export default Launch
