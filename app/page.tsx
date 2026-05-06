import Hero from "@/components/page-sections/Hero";
import SocialProof from "@/components/page-sections/SocialProof";
import Features from "@/components/page-sections/Features";
import Demo from "@/components/page-sections/Demo";
import Testimonials from "@/components/page-sections/Testimonials";
import Pricing from "@/components/page-sections/Pricing";
import CTA from "@/components/page-sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-800 font-sans dark:bg-black">
      <Hero/>
      <SocialProof/>
      <Features/>
      <Demo/>
      <Testimonials/>
      <Pricing/>
      <CTA/>
    </div>
  );
}
