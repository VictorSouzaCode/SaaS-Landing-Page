

const Hero = () => {
  return (
    <section className="w-full py-28 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* LEFT */}
    <div className="space-y-6">
      
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
        Improve your landing page conversion with AI
      </h1>

      <p className="text-lg text-zinc-400 max-w-xl">
        Get clear, actionable suggestions to optimize your headlines, CTAs, and structure — in seconds.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg shadow-blue-600/20 cursor-pointer">
          Analyze my page
        </button>

        <button className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition cursor-pointer">
          View demo
        </button>
      </div>

    </div>

    {/* RIGHT */}
    <div className="relative">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        
        <div className="space-y-4">
          <div className="h-4 w-24 bg-zinc-700 rounded"></div>
          <div className="h-10 bg-zinc-800 rounded-lg"></div>

          <div className="space-y-2">
            <div className="h-3 w-3/4 bg-zinc-700 rounded"></div>
            <div className="h-3 w-2/3 bg-zinc-700 rounded"></div>
          </div>

          <div className="mt-4 h-10 bg-blue-600 rounded-lg"></div>
        </div>

      </div>
    </div>

  </div>
</section>
  )
}

export default Hero