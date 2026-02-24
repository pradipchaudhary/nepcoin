import Container from "../ui/Container";

const faqs = [
  {
    q: "Is NepCoin free to use?",
    a: "Yes. The extension is completely free with no hidden charges.",
  },
  {
    q: "Does it require login?",
    a: "No account or login required. It runs locally in your browser.",
  },
  {
    q: "How often are prices updated?",
    a: "Prices refresh automatically every 30 seconds while open.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 border-t border-neutral-900/80">
      <Container className="max-w-3xl">
        <h2 className="text-2xl text-white font-semibold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-neutral-800 pb-6">
              <h3 className="text-white font-medium mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-neutral-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}