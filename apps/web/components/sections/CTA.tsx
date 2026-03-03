import Container from "../ui/Container";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";

export default function CTA() {
  return (
    <section className="relative py-28 border-t border-neutral-800 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-transparent blur-3xl opacity-50" />
      </div>

      <Container>
        <div className="relative max-w-3xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
            Ready to localize your crypto?
          </h2>

          {/* Description */}
          <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            Join Nepali investors tracking blockchain markets in their own
            numeral system — real-time prices, converted to NPR instantly.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button className="group px-8 py-3 text-base shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300">
              <Icon
                icon="solar:download-square-linear"
                width={20}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              Download for Chrome — It’s Free
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex justify-center gap-8 text-neutral-500 text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <Icon icon="solar:shield-check-linear" width={18} />
              No wallet access
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:lightning-linear" width={18} />
              Lightweight Extension
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="solar:refresh-linear" width={18} />
              Real-time Updates
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}