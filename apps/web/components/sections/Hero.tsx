import Container from "../ui/Container";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 text-center">
      <Container className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
          Live Crypto Prices in <br />
          <span className="bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-600 text-transparent bg-clip-text">
            Nepali Numerals.
          </span>
        </h1>

        <p className="text-neutral-400 mb-10 max-w-2xl mx-auto">
          NepCoin is a simple, powerful, and localized Chrome Extension that automatically converts crypto values into Nepali numerals (०, १, २...) and shows the latest market prices in Nepali Rupees (NPR).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>
            <Icon icon="solar:browser-linear" />
            Add to Chrome — It's Free
          </Button>

          <Button variant="secondary">
            <Icon icon="solar:play-circle-linear" />
            Watch Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}