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
      <div className="max-w-[600px] mx-auto px-6 py-24">
        <div className="border border-volt bg-volt/5 p-8">
          <div className="text-xs text-volt uppercase tracking-wider mb-4">// token launched</div>
          <div className="text-xl font-bold text-white mb-2">
            ${ticker} <span className="text-muted font-normal text-sm">for</span> {tokenName}
          </div>
          <p className="text-xs text-muted mb-8">UI preview. solana integration coming soon.</p>
          <div className="flex gap-3">
            <Link to={`/repo/${ticker.toLowerCase()}`} className="px-4 py-2 bg-volt text-black text-xs font-semibold hover:bg-volt-dark transition-colors uppercase tracking-wider">
              View Token
            </Link>
            <button onClick={() => setLaunched(false)} className="px-4 py-2 border border-border text-xs text-muted hover:text-white hover:border-border-light transition-colors uppercase tracking-wider">
              Launch Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="text-xs text-muted uppercase tracking-wider mb-3">// new token</div>
        <h1 className="text-2xl font-bold text-white mb-2">launch a token</h1>
        <p className="text-xs text-muted">connect a github repo. mint a tradeable token. earn 2% creator fees on every trade.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <form onSubmit={handleLaunch} className="lg:col-span-3 space-y-5">
          <Field label="REPO_URL" hint="full url of your public repo">
            <input
              type="url"
              placeholder="https://github.com/owner/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full px-3 py-2.5 bg-surface-raised border border-border text-white placeholder-border-light text-xs focus:outline-none focus:border-volt transition-colors"
            />
          </Field>

          <Field label="TOKEN_NAME" hint="display name for your token">
            <input
              type="text"
              placeholder="My Project"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              maxLength={32}
              className="w-full px-3 py-2.5 bg-surface-raised border border-border text-white placeholder-border-light text-xs focus:outline-none focus:border-volt transition-colors"
            />
          </Field>

          <Field label="TICKER" hint="2-6 uppercase letters">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-volt text-xs">$</span>
              <input
                type="text"
                placeholder="TICKER"
                value={ticker}
                onChange={handleTickerChange}
                className="w-full pl-7 pr-12 py-2.5 bg-surface-raised border border-border text-white placeholder-border-light text-xs uppercase focus:outline-none focus:border-volt transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted">{ticker.length}/6</span>
            </div>
          </Field>

          <Field label="DESCRIPTION" hint="optional — what does your project do">
            <textarea
              placeholder="brief description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              maxLength={280}
              className="w-full px-3 py-2.5 bg-surface-raised border border-border text-white placeholder-border-light text-xs focus:outline-none focus:border-volt transition-colors resize-none"
            />
          </Field>

          <div className="pt-3">
            <button
              type="submit"
              disabled={!isValid}
              className="w-full py-3 bg-volt text-black text-xs font-bold hover:bg-volt-dark transition-colors uppercase tracking-wider disabled:opacity-20 disabled:cursor-not-allowed"
            >
              Launch Token
            </button>
            <p className="text-[10px] text-muted mt-3">
              by launching you confirm repo ownership. fees: 2% creator, 0.5% $VOLT stakers.
            </p>
          </div>
        </form>

        {/* Live Preview */}
        <div className="lg:col-span-2">
          <div className="sticky top-16">
            <div className="text-[10px] text-muted uppercase tracking-widest mb-3">PREVIEW</div>
            <div className="border border-border bg-surface-raised">
              {/* Preview header bar */}
              <div className="px-4 py-2 border-b border-border flex items-center justify-between">
                <span className="text-volt text-xs font-semibold">
                  {ticker ? `$${ticker}` : '$---'}
                </span>
                <span className="text-[10px] text-muted">SPL TOKEN</span>
              </div>

              <div className="p-4 space-y-4">
                <div>
                  <div className="text-sm font-bold text-white">
                    {tokenName || '---'}
                  </div>
                  {repoName && (
                    <div className="text-[11px] text-muted mt-1">
                      github.com/{repoName}
                    </div>
                  )}
                </div>

                {description && (
                  <p className="text-[11px] text-muted leading-relaxed border-t border-border pt-3">{description}</p>
                )}

                <div className="border-t border-border pt-3">
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-1">STARTING PRICE</div>
                  <div className="text-lg font-bold text-white">$0.0001</div>
                  <div className="text-[10px] text-muted mt-0.5">bonding curve</div>
                </div>

                <div className="grid grid-cols-2 gap-0 border-t border-border">
                  <div className="py-3 pr-3 border-r border-border">
                    <div className="text-volt font-bold text-sm">2.0%</div>
                    <div className="text-[10px] text-muted">CREATOR FEE</div>
                  </div>
                  <div className="py-3 pl-3">
                    <div className="text-white font-bold text-sm">0.5%</div>
                    <div className="text-[10px] text-muted">$VOLT BUY</div>
                  </div>
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
      <label className="block text-[10px] text-volt uppercase tracking-widest mb-1">{label}</label>
      {hint && <p className="text-[10px] text-muted mb-1.5">{hint}</p>}
      {children}
    </div>
  )
}

export default Launch
