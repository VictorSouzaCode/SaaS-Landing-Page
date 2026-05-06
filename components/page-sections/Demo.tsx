

const Demo = () => {
  return (
    <section className="w-full py-28 px-6">
  <div className="max-w-6xl mx-auto text-center space-y-16">

    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        See how it works in seconds
      </h2>
      <p className="text-zinc-400 max-w-2xl mx-auto">
        Paste your landing page and get instant suggestions to improve clarity and conversion.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 text-left">

      {/* INPUT */}
      <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
        <p className="text-sm text-zinc-500">Your current page</p>

        <div className="p-4 rounded-lg bg-zinc-800 text-zinc-400">
          "We provide innovative solutions for modern businesses"
        </div>

        <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium cursor-pointer">
          Analyze
        </button>
      </div>

      {/* OUTPUT */}
      <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
        <p className="text-sm text-zinc-500">Suggested improvement</p>

        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-zinc-800 text-white">
            "Increase your conversions with smarter, faster landing pages"
          </div>

          <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 text-sm">
            Stronger clarity and outcome-focused messaging
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
  )
}

export default Demo