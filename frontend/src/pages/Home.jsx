import { Link } from 'react-router-dom'

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
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-b border-border">
        <div className="relative">
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

      {/* Footer */}
      <footer>
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

export default Home
