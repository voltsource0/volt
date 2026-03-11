function Dashboard() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-fg mb-2">Dashboard</h1>
      <p className="text-sm text-fg-muted mb-8">Connect your GitHub account to manage repo tokens and track earnings.</p>

      <div className="border border-border-default rounded-md bg-canvas-subtle p-12 text-center">
        <p className="text-sm text-fg-muted mb-5">Sign in with GitHub to see your repos, launch tokens, and track creator fee earnings.</p>
        <button className="px-4 py-[5px] text-sm font-medium text-white bg-success-emphasis border border-white/10 rounded-md hover:bg-[#2ea043] transition-colors">
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}

export default Dashboard
