import Hero from "@/components/page-sections/Hero";
import SocialProof from "@/components/page-sections/SocialProof";
import Features from "@/components/page-sections/Features";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-800 font-sans dark:bg-black">
      <Hero/>
      <SocialProof/>
      <Features/>
    </div>
  );
}
