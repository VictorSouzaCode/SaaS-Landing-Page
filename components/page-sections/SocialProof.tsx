import { Flame, LoaderPinwheel, BringToFront, BicepsFlexed, Gem } from "lucide-react"

const SocialProof = () => {
  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <p className="text-sm text-zinc-500 uppercase tracking-widest">
          Trusted by teams building modern products
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
          <div className="flex flex-col items-center justify-center">
            <LoaderPinwheel className="text-zinc-400" />
            <span className="text-zinc-400 text-lg font-medium">Flowbase</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <BringToFront className="text-zinc-400"/>
            <span className="text-zinc-400 text-lg font-medium">Layer</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <BicepsFlexed className="text-zinc-400"/>
            <span className="text-zinc-400 text-lg font-medium">Metric</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Gem className="text-zinc-400"/>
            <span className="text-zinc-400 text-lg font-medium">Nova</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Flame className="text-zinc-400"/>
            <span className="text-zinc-400 text-lg font-medium">Pulse</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof