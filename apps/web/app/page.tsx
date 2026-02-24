import CTA from "@/components/sections/CTA";
import ExtensionMockup from "@/components/sections/ExtensionMockup";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExtensionMockup />
      <SocialProof />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  );
}
