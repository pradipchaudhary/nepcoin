import Container from "../ui/Container";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 text-center overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-transparent blur-3xl opacity-40" />
        <div className="absolute bottom-[-150px] right-0 w-[500px] h-[300px] bg-gradient-to-l from-neutral-800 to-transparent blur-2xl opacity-30" />
      </div>

      <Container className="max-w-5xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur text-xs text-neutral-400">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Real-time Market Updates
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-8 leading-[1.05] tracking-tight">
          Live Crypto Prices in <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 text-transparent bg-clip-text">
            Nepali Numerals.
          </span>
        </h1>

        {/* Description */}
        <p className="text-neutral-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          NepCoin is a lightweight Chrome Extension that automatically converts
          crypto values into Nepali digits (० १ २...) and displays live BTC, ETH,
          and SOL prices in NPR — built for Nepali investors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">

          <Button className="px-8 py-3 text-base shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300">
            <Icon icon="solar:browser-linear" width={20} />
            Add to Chrome — It's Free
          </Button>

          <Button
            variant="secondary"
            className="px-8 py-3 text-base hover:bg-neutral-800 transition"
          >
            <Icon icon="solar:play-circle-linear" width={20} />
            Watch Demo
          </Button>

        </div>

        {/* Trust Row */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-neutral-500 text-sm">
          <div className="flex items-center gap-2">
            <Icon icon="solar:shield-check-linear" width={18} />
            Secure & Lightweight
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="solar:refresh-linear" width={18} />
            Real-time Price Sync
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="solar:globe-linear" width={18} />
            Built for Nepal 🇳🇵
          </div>
        </div>

      </Container>
    </section>
  );
}