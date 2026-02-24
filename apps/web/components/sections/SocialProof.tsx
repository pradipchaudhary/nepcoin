import Container from "../ui/Container";
import { Icon } from "@iconify/react";

const providers = [
  { name: "CoinGecko", icon: "solar:database-linear" },
  { name: "Chrome Store", icon: "solar:shop-linear" },
  { name: "NRB Forex", icon: "solar:server-square-linear" },
];

export default function SocialProof() {
  return (
    <section className="border-t border-neutral-900/80 py-12 bg-neutral-950/30">
      <Container className="text-center">
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8">
          Powered by reliable APIs
        </p>

        <div className="flex flex-wrap justify-center gap-10 opacity-60">
          {providers.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-white font-semibold"
            >
              <Icon icon={item.icon} width={20} />
              {item.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}