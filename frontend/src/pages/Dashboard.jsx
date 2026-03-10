import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-3">Dashboard</h1>
      <p className="text-gray-400 mb-10">Connect your GitHub account to manage your repo tokens and track earnings.</p>

      <div className="border border-border rounded-xl bg-surface-raised p-12 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-border flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-white mb-2">Connect GitHub to get started</h2>
        <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">Sign in with GitHub to see your repos, launch tokens, and track your creator fee earnings.</p>
        <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm">
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}

export default Dashboard
