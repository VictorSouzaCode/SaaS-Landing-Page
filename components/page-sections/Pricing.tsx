

const Pricing = () => {
  return (
    <section className="w-full py-28 px-6">
  <div className="max-w-5xl mx-auto text-center space-y-16">

    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      Simple, transparent pricing
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* FREE */}
      <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-6 text-left flex flex-col justify-around">
        <h3 className="text-xl font-medium text-white">Free</h3>
        <p className="text-3xl font-semibold text-white">$0<span className="text-sm text-zinc-400">/month</span></p>

        <ul className="space-y-2 text-zinc-400 text-sm">
          <li>Analyze basic landing pages</li>
          <li>Limited suggestions</li>
          <li>1 project</li>
        </ul>

        <button className="w-full py-3 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition cursor-pointer">
          Get started
        </button>
      </div>

      {/* PRO */}
      <div className="p-8 rounded-2xl border border-blue-600 bg-zinc-900 space-y-6 text-left shadow-lg shadow-blue-600/10 flex flex-col justify-around">
        <h3 className="text-xl font-medium text-white">Pro</h3>
        <p className="text-3xl font-semibold text-white">$12<span className="text-sm text-zinc-400">/month</span></p>

        <ul className="space-y-2 text-zinc-400 text-sm">
          <li>Unlimited analyses</li>
          <li>Advanced suggestions</li>
          <li>Full page optimization</li>
          <li>Priority updates</li>
        </ul>

        <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition cursor-pointer">
          Start Pro
        </button>
      </div>

    </div>

  </div>
</section>
  )
}

export default Pricing