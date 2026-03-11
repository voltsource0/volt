import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border-muted">
        <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-14">
          <h1 className="text-[40px] font-semibold text-fg leading-tight mb-4">
            Get paid for the open source you build
          </h1>
          <p className="text-xl text-fg-muted max-w-2xl mb-8 leading-relaxed">
            GitFunding connects your GitHub repos to on-chain funding. Every trade earns you fees. No gatekeepers.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/launch"
              className="px-4 py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors"
            >
              Launch your repo
            </Link>
            <Link to="/dashboard" className="text-sm text-accent hover:underline">
              Browse funded repos &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-[1280px] mx-auto px-6 py-16 border-b border-border-muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step
            num="1"
            title="Connect your repo"
            desc="Sign in with GitHub and select any repo you own. We verify ownership automatically."
          />
          <Step
            num="2"
            title="Token is minted"
            desc="An SPL token is created on Solana with a bonding curve. Anyone can buy or sell it."
          />
          <Step
            num="3"
            title="Earn 2% forever"
            desc="Every trade generates a 2% creator fee sent directly to your wallet. No caps, no limits."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-muted">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-xs text-fg-muted">
              &copy; 2025 GitFunding
            </div>
            <div className="flex gap-6 text-xs text-fg-muted">
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Step({ num, title, desc }) {
  return (
    <div className="p-4 bg-canvas-subtle border border-border-default rounded-md">
      <div className="mono text-fg-muted text-xs mb-3">{num}</div>
      <h3 className="text-base font-semibold text-fg mb-2">{title}</h3>
      <p className="text-sm text-fg-muted leading-relaxed">{desc}</p>
    </div>
  )
}

export default Home
