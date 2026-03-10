import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Repo from './pages/Repo'
import Launch from './pages/Launch'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const NAV_MAP = {
  '/': 'home',
  '/launch': 'launch',
  '/dashboard': 'dashboard',
  '/profile': 'profile',
}

function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const segment = NAV_MAP[location.pathname] || location.pathname.split('/').filter(Boolean).join(' / ')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-0 text-sm">
          <Link to="/" className="text-volt font-semibold hover:text-volt-light transition-colors">
            volt
          </Link>
          <span className="text-muted mx-2">/</span>
          <span className="text-muted">{segment}</span>
        </div>

        <div className="hidden md:flex items-center gap-0 text-xs">
          <NavLink to="/" label="home" current={location.pathname} />
          <span className="text-border-light mx-1">|</span>
          <NavLink to="/launch" label="launch" current={location.pathname} />
          <span className="text-border-light mx-1">|</span>
          <NavLink to="/dashboard" label="dashboard" current={location.pathname} />
          <span className="text-border-light mx-3">|</span>
          <Link
            to="/launch"
            className="px-3 py-1 bg-volt text-black text-xs font-semibold hover:bg-volt-dark transition-colors"
          >
            LAUNCH TOKEN
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted hover:text-white text-xs"
        >
          {mobileOpen ? '[close]' : '[menu]'}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-3 space-y-1">
          <MobileLink to="/" onClick={() => setMobileOpen(false)}>home</MobileLink>
          <MobileLink to="/launch" onClick={() => setMobileOpen(false)}>launch</MobileLink>
          <MobileLink to="/dashboard" onClick={() => setMobileOpen(false)}>dashboard</MobileLink>
          <div className="pt-2">
            <Link
              to="/launch"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 bg-volt text-black text-xs font-semibold text-center"
            >
              LAUNCH TOKEN
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, label, current }) {
  const active = current === to
  return (
    <Link
      to={to}
      className={`px-2 py-1 transition-colors ${active ? 'text-volt' : 'text-muted hover:text-white'}`}
    >
      {label}
    </Link>
  )
}

function MobileLink({ to, onClick, children }) {
  return (
    <Link to={to} onClick={onClick} className="block px-3 py-2 text-xs text-muted hover:text-white hover:bg-white/[0.02]">
      {children}
    </Link>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <main className="pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo/:id" element={<Repo />} />
            <Route path="/launch" element={<Launch />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
