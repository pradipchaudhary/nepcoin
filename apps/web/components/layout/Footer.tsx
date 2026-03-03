import Container from "../ui/Container";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950">

      {/* Subtle Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-transparent blur-3xl" />
      </div>

      <Container className="relative py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold shadow-lg shadow-yellow-500/20">
                NC
              </div>

              <div>
                <h3 className="text-neutral-100 font-semibold tracking-tight">
                  NepCoin (नेपकोइन)
                </h3>
                <p className="text-xs text-neutral-500">
                  Real-time Crypto Tracking in NPR
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
              Monitor BTC, ETH, and SOL in Nepali numerals with fast,
              lightweight updates designed for Nepali crypto investors.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Product
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/privacy"
                className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-200 transition"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-yellow-400 transition" />
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-200 transition"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-yellow-400 transition" />
                Terms of Service
              </Link>

              <a
                href="https://github.com/your-repo"
                target="_blank"
                className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-200 transition"
              >
                <Icon icon="mdi:github" width={16} />
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Social + Status */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">
              Connect
            </h4>

            <div className="flex gap-5">
              <a className="text-neutral-500 hover:text-yellow-400 hover:scale-110 transition">
                <Icon icon="mdi:twitter" width={20} />
              </a>
              <a className="text-neutral-500 hover:text-yellow-400 hover:scale-110 transition">
                <Icon icon="mdi:telegram" width={20} />
              </a>
              <a className="text-neutral-500 hover:text-yellow-400 hover:scale-110 transition">
                <Icon icon="mdi:web" width={20} />
              </a>
            </div>

            {/* API Status Indicator */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 pt-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              API Status: Operational
            </div>

            <p className="text-xs text-neutral-600 pt-2 flex items-center gap-1">
              Made with{" "}
              <Icon
                icon="solar:heart-linear"
                width={14}
                className="text-red-400"
              />{" "}
              in Nepal
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <span>
            © {new Date().getFullYear()} NepCoin. All rights reserved.
          </span>

          <span className="text-neutral-700">
            Cryptocurrency data is for informational purposes only.
          </span>
        </div>

      </Container>
    </footer>
  );
}