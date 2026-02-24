import Container from "../ui/Container";

const steps = [
  {
    title: "Add Extension",
    desc: "Install NepCoin from the Chrome Web Store.",
  },
  {
    title: "Pin to Toolbar",
    desc: "Pin extension for one-click access anytime.",
  },
  {
    title: "Track Live",
    desc: "View live crypto prices in Nepali numerals.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 border-t border-neutral-900/80">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl text-white font-semibold mb-4">
            Start tracking in seconds.
          </h2>
          <p className="text-neutral-400">
            No setup required. Just install and monitor instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {steps.map((step, index) => (
            <div key={step.title}>
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-white font-semibold">
                {index + 1}
              </div>
              <h3 className="text-white font-medium mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}