import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const packages = [
  {
    name: "Single Session",
    description:
      "Perfect for trying out our services or targeting a small area",
    features: [
      "One treatment session",
      "Personalized consultation",
      "Aftercare guidance",
    ],
    note: "Starting from",
    cta: "Book Now",
  },
  {
    name: "Package Deal",
    description: "Best value for achieving optimal, long-lasting results",
    features: [
      "6-8 treatment sessions",
      "Comprehensive consultation",
      "Priority scheduling",
      "Aftercare products included",
    ],
    popular: true,
    note: "Most Popular",
    cta: "Get Started",
  },
  {
    name: "Full Body Program",
    description: "Ultimate luxury experience for complete hair removal",
    features: [
      "Unlimited areas included",
      "8-10 sessions",
      "VIP scheduling",
      "Premium aftercare kit",
      "Complimentary touch-ups",
    ],
    note: "Premium",
    cta: "Learn More",
  },
];

export default function Pricing() {
  return (
    <Section background="cream">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-heading-2 font-serif font-light text-neutral-800">
          Treatment
          <span className="block font-semibold text-gold-600">Packages</span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Flexible options designed to fit your goals and budget
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`relative flex flex-col ${pkg.popular ? "ring-2 ring-gold-400 shadow-glow" : ""}`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-medium px-6 py-2 rounded-full shadow-soft">
                {pkg.note}
              </div>
            )}

            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-semibold text-neutral-800">
                  {pkg.name}
                </h3>
                <p className="text-neutral-600 text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-neutral-700"
                  >
                    <svg
                      className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200">
              <Button
                variant={pkg.popular ? "primary" : "secondary"}
                className="w-full"
              >
                {pkg.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center space-y-2">
        <p className="text-neutral-600">
          Pricing varies by treatment area and individual needs
        </p>
        <p className="text-neutral-800 font-medium">
          <a
            href="#contact"
            className="text-gold-600 hover:text-gold-700 underline underline-offset-4"
          >
            Contact us
          </a>{" "}
          for a personalized quote and free consultation
        </p>
      </div>
    </Section>
  );
}
