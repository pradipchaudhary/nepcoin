import Container from "../ui/Container";
import { Icon } from "@iconify/react";

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "रु ९२,४५,६७८",
    change: "२.५%",
    up: true,
    icon: "solar:bitcoin-linear",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "रु ४,३२,१०९",
    change: "१.२%",
    up: true,
    icon: "solar:ruler-cross-pen-linear",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "रु २३,४५६",
    change: "०.८%",
    up: false,
    icon: "solar:link-circle-linear",
  },
];

export default function ExtensionMockup() {
  return (
    <section className="pb-24 relative">
      <Container className="flex justify-center">
        <div className="w-full max-w-[340px] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-neutral-800 bg-neutral-900/40">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-neutral-100 flex items-center justify-center">
                <span className="text-xs font-semibold text-neutral-950">NC</span>
              </div>
              <span className="text-sm text-neutral-200 font-medium">
                NepCoin
              </span>
            </div>
            <div className="flex gap-3 text-neutral-500">
              <Icon icon="solar:refresh-linear" width={18} />
              <Icon icon="solar:settings-linear" width={18} />
            </div>
          </div>

          {/* Body */}
          <div className="p-3 flex flex-col gap-2">
            {coins.map((coin) => (
              <div
                key={coin.name}
                className="flex justify-between items-center p-3 rounded-xl bg-neutral-900/20 hover:bg-neutral-900/40 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center">
                    <Icon icon={coin.icon} width={18} />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">
                      {coin.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {coin.symbol}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-white font-medium">
                    {coin.price}
                  </p>
                  <p
                    className={`text-xs font-medium ${coin.up ? "text-emerald-400" : "text-rose-400"
                      }`}
                  >
                    {coin.up ? "▲" : "▼"} {coin.change}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-neutral-800 text-xs text-neutral-500 flex justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Live Data
            </span>
            <span>अद्यावधिक: भर्खरै</span>
          </div>
        </div>
      </Container>
    </section>
  );
}