import Container from "../ui/Container";
import { Icon } from "@iconify/react";

const features = [
  {
    title: "Track Major Coins",
    desc: "Monitor Bitcoin, Ethereum, and Solana in real-time.",
    icon: "solar:chart-2-linear",
  },
  {
    title: "Auto Refresh",
    desc: "Automatically updates every 30 seconds.",
    icon: "solar:history-linear",
  },
  {
    title: "Nepali Numerals",
    desc: "Displays all numbers using Nepali digits (०-९).",
    icon: "solar:text-square-linear",
  },
  {
    title: "Reliable Data",
    desc: "Powered by CoinGecko and NRB forex rates.",
    icon: "solar:server-path-linear",
  },
];

export default function Features() {
  return (
    <section className="py-24 border-t border-neutral-900/80">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 hover:bg-neutral-900/60 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center mb-6">
                <Icon icon={feature.icon} width={20} />
              </div>
              <h3 className="text-white font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}