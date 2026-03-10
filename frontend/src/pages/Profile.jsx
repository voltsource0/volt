function Profile() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="text-xs text-muted uppercase tracking-wider mb-3">// profile</div>
      <h1 className="text-2xl font-bold text-white mb-2">profile</h1>
      <p className="text-xs text-muted mb-10">your developer profile and wallet information.</p>

      <div className="border border-border">
        <div className="px-4 py-2.5 border-b border-border bg-surface-raised">
          <span className="text-[10px] text-muted uppercase tracking-widest">AUTH REQUIRED</span>
        </div>
        <div className="p-12 text-center">
          <div className="text-xs text-muted mb-6">connect your github and solana wallet to set up your developer profile.</div>
          <button className="px-5 py-2.5 bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors uppercase tracking-wider">
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
