function Profile() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-3">Profile</h1>
      <p className="text-gray-400 mb-10">Your developer profile and wallet information.</p>

      <div className="border border-border rounded-xl bg-surface-raised p-12 text-center">
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-border flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-white mb-2">Sign in to view your profile</h2>
        <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">Connect your GitHub and Solana wallet to set up your developer profile.</p>
        <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm">
          Sign in with GitHub
        </button>
      </div>
    </div>
  )
}

export default Profile
