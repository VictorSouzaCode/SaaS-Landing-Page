import { Type, MousePointerClick, Eye, Layout } from "lucide-react"

const Features = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Everything you need to improve your conversion
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* CARD */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
              <Type />
            </div>
            <h3 className="text-lg font-medium text-white">
              Headline Optimization
            </h3>
            <p className="text-zinc-400">
              Get clearer, more compelling headlines that instantly communicate
              your value.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
              <MousePointerClick />
            </div>
            <h3 className="text-lg font-medium text-white">Stronger CTAs</h3>
            <p className="text-zinc-400">
              Turn weak “learn more” buttons into clear, action-driven CTAs
              people actually click.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
              <Eye />
            </div>
            <h3 className="text-lg font-medium text-white">Instant Clarity</h3>
            <p className="text-zinc-400">
              Make your value obvious in seconds so visitors instantly
              understand what you do.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500">
              <Layout />
            </div>
            <h3 className="text-lg font-medium text-white">Better Structure</h3>
            <p className="text-zinc-400">
              Fix messy layouts with a proven flow that guides users from first
              glance to signup.
            </p>
          </div>

          {/* Repeat for others */}
        </div>
      </div>
    </section>
  );
}

export default Features