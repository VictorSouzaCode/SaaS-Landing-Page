

const Testimonials = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Loved by founders and small teams
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* CARD */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <p className="text-zinc-300">
              “We pasted our landing page in and instantly saw what was wrong.
              The new version converted way better.”
            </p>
            <p className="text-sm text-zinc-500">
              — Lucas Andrade, SaaS Founder
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <p className="text-zinc-300">
              “I thought our copy was already solid. Turns out it was confusing
              as hell. This cleaned it up in minutes.”
            </p>
            <p className="text-sm text-zinc-500">
              — Daniel Cruz, Product Lead at Orbit
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <p className="text-zinc-300">
              “+34% conversion rate after applying the suggestions. That alone
              paid for it.”
            </p>
            <p className="text-sm text-zinc-500">
              — Sarah Kim, Growth Manager at Flux
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <p className="text-zinc-300">
              “Didn’t expect much honestly. I’ve tried similar tools before.
              This one actually understands positioning.”
            </p>
            <p className="text-sm text-zinc-500">
              — Marcus Silva, Indie Hacker
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <p className="text-zinc-300">
              “We were getting traffic but no signups. After rewriting our hero
              and CTA with this, things finally started moving.”
            </p>
            <p className="text-sm text-zinc-500">
              — Emily Carter, Marketing Lead at NovaCore
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <p className="text-zinc-300">
              “Paste. Improve. Ship. That’s basically the workflow now.”
            </p>
            <p className="text-sm text-zinc-500">
              — Rafael Mendes, Frontend Developer
            </p>
          </div>

          {/* repeat for others */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials