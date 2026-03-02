import Container from "../ui/Container";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";

export default function CTA() {
  return (
    <section className="py-24 border-t border-neutral-900/80 text-center">
      <Container>
        <h2 className="text-4xl text-white font-semibold mb-6">
          Ready to localize your crypto?
        </h2>

        <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
          Join Nepali users tracking blockchain markets in their own numeral system.
        </p>

        <Button>
          <Icon icon="solar:download-square-linear" />
          Download for Chrome
        </Button>
      </Container>
    </section>
  );
}