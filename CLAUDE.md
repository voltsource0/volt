# Volt — CLAUDE.md

## What is Volt?

Volt is an on-chain funding platform for open source developers. Developers connect their GitHub repos, a token is minted per repo on Solana, and backers can buy/sell that token to support the project. Every trade generates fees — 2% goes directly to the repo creator/contributors, and 0.5% auto-buys $VOLT (the protocol token) which is distributed to stakers.

The positioning is **developer-first, not crypto-first**. The landing page and brand should feel like a developer tool. The Solana/token mechanics are the backend advantage, not the headline. Tagline: "Get paid for the open source you build."

---

## The Problem It Solves

Open source powers the internet but maintainers earn almost nothing. GitHub Sponsors is clunky, fiat-only, and low volume. There is no financial signal layer on top of open source — no way to back a project early and benefit if it blows up. Volt fixes this by making every repo a tradeable asset with real creator fees, settled instantly on-chain with no middleman.

---

## Tokenomics

### Repo Tokens (per-repo)
- Each repo that connects to Volt gets its own SPL token minted on Solana
- Token uses a bonding curve (PumpFun-style) — price increases as more people buy
- Every trade generates a **2.5% total fee** split as follows:
  - **2.0%** → repo creator/contributor wallet (best in market, beats all rivals)
  - **0.5%** → protocol auto-buys $VOLT on open market, distributed to $VOLT stakers

### $VOLT (Protocol Token)
- The protocol token — owning and staking $VOLT is owning a piece of ALL repo token activity across the entire platform
- Buy pressure is programmatic and automatic — every trade on every repo token drives it
- More repos onboard → more volume → more $VOLT buy pressure → stakers earn more
- No burn mechanic — $VOLT is bought from open market and distributed to stakers as yield
- This is the key pitch to $VOLT holders: "You're not betting on one project, you're betting on the growth of the entire ecosystem"

### Why 2% creator fee is the moat
PumpFun and Bags pay creators very little. Volt pays 2% of ALL trading volume forever, automatically, on-chain, no paperwork, no invoices. A repo doing $1M volume earns $20K. A repo doing $10M earns $200K. This is the primary acquisition strategy for developers.

---

## Brand

- **Name:** Volt
- **Token:** $VOLT
- **Domain:** volt.dev (or getvolt.dev / volt.so)
- **GitHub:** thedotmack/volt (or volt-protocol)
- **Tagline:** "Get paid for the open source you build"
- **Tone:** Developer tool first. No crypto jargon on the surface. Clean, technical, professional.
- **Colors:** Electric yellow/gold accent on dark background — distinct in the dev tool space
- **Logo concept:** Lightning bolt through a git branch/fork symbol

---

## Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Deployed on Vercel

### Backend
- Supabase (auth, database, user/repo data)
- GitHub OAuth for repo verification

### Blockchain
- Solana
- Anchor framework
- SPL Token Program for repo token minting
- Jupiter or Raydium for $VOLT auto-buy

### Auth
- GitHub OAuth via Supabase (verifies repo ownership)
- Phantom / Solana wallet connect

---

## MVP Scope (V1 — ship fast)

The absolute minimum to launch:

1. **GitHub OAuth** — connect GitHub, verify repo ownership
2. **Repo token mint** — one SPL token minted per repo on connect
3. **Buy/sell interface** — bonding curve, anyone can back a repo with USDC
4. **Fee routing** — 2% to repo wallet, 0.5% auto-buys $VOLT
5. **Repo discovery page** — browse and search listed repos

**Not in V1:**
- Contributor splits (2% goes to repo owner only for now, splits in V2)
- $VOLT staking UI (auto-buy happens on-chain, staking portal is V2)
- Governance
- Mobile app

---

## Build Order

1. UI prototype (get it looking right first — this is the pattern)
2. Supabase setup + GitHub OAuth
3. Solana program (token mint + fee routing)
4. Wire frontend to Solana program
5. Deploy to Vercel

---

## File Structure (target)

```
volt/
├── CLAUDE.md
├── README.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Landing / discovery
│   │   │   ├── Repo.jsx          # Individual repo token page
│   │   │   ├── Dashboard.jsx     # Connected developer dashboard
│   │   │   └── Profile.jsx       # Developer profile
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── program/                       # Anchor Solana program
│   ├── src/
│   │   └── lib.rs
│   ├── tests/
│   └── Anchor.toml
└── supabase/
    └── migrations/
```

---

## Key Decisions Already Made

- **Bonding curve** over fixed price — more exciting, drives speculative demand
- **No burn** on $VOLT — buy pressure + staker yield is more attractive long term than deflation
- **2% to creator** is the acquisition strategy — highest creator fee in the market
- **Developer-first brand** — "Volt" not "VoltProtocol" or "OpenVolt" (openvolt taken on GitHub)
- **V1 ships without $VOLT staking UI** — auto-buy happens on-chain silently, staking portal is V2
- **Contributors split in V2** — V1 just sends 2% to repo owner wallet for simplicity

---

## Competitive Landscape

- **GitHub Sponsors** — fiat, low volume, no trading, no upside for backers
- **Open Collective** — slow, takes large cut, no token mechanics
- **Gitcoin** — grants-based, complicated, not passive income
- **PumpFun / Bags** — creator fees exist but tokens are detached from anything real

Volt is the only platform where the token is anchored to a real, verifiable GitHub project with ongoing activity, and where creator fees are the highest in the market.

---

## Developer (Sean)

- Based in Perth, Western Australia
- Solo builder — prefers fast shipping over perfect architecture
- Familiar with: React, Vite, Supabase, Vercel, Solana/Anchor, React Native
- Preferred pattern: UI prototype first, then backend, then wire together
- Prefers targeted edits over full file rewrites
- Other active projects: Larry (iOS security app), Bangr (decentralised sports betting on Solana), RECUR Protocol (AI security proxy)
