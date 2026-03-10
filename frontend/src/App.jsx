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
  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${isHome ? 'bg-surface/80 backdrop-blur-xl' : 'bg-surface-raised/90 backdrop-blur-xl'} border-b border-border`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-volt/10 border border-volt/20 flex items-center justify-center group-hover:bg-volt/20 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-volt">
              <path d="M9 1L3 9H8L7 15L13 7H8L9 1Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-white">Volt</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" current={location.pathname}>Home</NavLink>
          <NavLink to="/launch" current={location.pathname}>Launch Token</NavLink>
          <NavLink to="/dashboard" current={location.pathname}>Dashboard</NavLink>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/launch"
            className="px-4 py-2 text-sm font-medium bg-volt text-black rounded-lg hover:bg-volt-dark transition-colors"
          >
            Launch a Token
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-400 hover:text-white p-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {mobileOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface-raised px-6 py-4 space-y-2">
          <MobileNavLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/launch" onClick={() => setMobileOpen(false)}>Launch Token</MobileNavLink>
          <MobileNavLink to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</MobileNavLink>
          <Link
            to="/launch"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 px-4 py-2 text-sm font-medium bg-volt text-black rounded-lg text-center"
          >
            Launch a Token
          </Link>
        </div>
      )}
    </nav>
  )
}

function NavLink({ to, current, children }) {
  const active = current === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 text-sm rounded-md transition-colors ${active ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, onClick, children }) {
  return (
    <Link to={to} onClick={onClick} className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md hover:bg-white/5">
      {children}
    </Link>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-gray-200">
        <Navbar />
        <main className="pt-16">
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
