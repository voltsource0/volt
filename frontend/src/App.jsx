import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Repo from './pages/Repo'
import Launch from './pages/Launch'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-header-bg border-b border-header-border">
      <div className="max-w-[1280px] mx-auto px-6 h-[62px] flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-base font-semibold text-fg hover:text-fg-muted transition-colors">
            GitFunding
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <NavLink to="/" label="Explore" current={location.pathname} />
            <a href="#" className="text-fg hover:text-accent transition-colors">Docs</a>
            <a href="#" className="text-fg hover:text-accent transition-colors">Blog</a>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <button className="px-4 py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors">
            Connect GitHub
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-fg-muted hover:text-fg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {mobileOpen ? (
              <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 101.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.41z"/>
            ) : (
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-header-border bg-header-bg px-6 py-3 space-y-1">
          <MobileLink to="/" onClick={() => setMobileOpen(false)}>Explore</MobileLink>
          <MobileLink to="/launch" onClick={() => setMobileOpen(false)}>Launch</MobileLink>
          <MobileLink to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</MobileLink>
          <div className="pt-2">
            <button
              onClick={() => setMobileOpen(false)}
              className="w-full px-3 py-2 text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md text-center hover:bg-[#2ea043] transition-colors"
            >
              Connect GitHub
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, label, current }) {
  const active = current === to || (to !== '/' && current.startsWith(to))
  return (
    <Link
      to={to}
      className={`transition-colors ${active ? 'text-fg font-semibold' : 'text-fg hover:text-accent'}`}
    >
      {label}
    </Link>
  )
}

function MobileLink({ to, onClick, children }) {
  return (
    <Link to={to} onClick={onClick} className="block px-3 py-2 text-sm text-fg-muted hover:text-fg rounded-md hover:bg-white/[0.04]">
      {children}
    </Link>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-canvas">
        <Navbar />
        <main className="pt-[62px]">
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
