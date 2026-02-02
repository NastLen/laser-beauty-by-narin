import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const services = [
  {
    name: "Full Body",
    description: "Complete hair removal for silky smooth skin from head to toe",
    popular: true,
  },
  {
    name: "Face",
    description: "Gentle treatment for upper lip, chin, cheeks, and full face",
    popular: false,
  },
  {
    name: "Underarms",
    description: "Quick and effective solution for smooth, confident underarms",
    popular: true,
  },
  {
    name: "Bikini & Brazilian",
    description: "Discreet, comfortable treatment in a private setting",
    popular: true,
  },
  {
    name: "Legs",
    description: "Full or half leg treatments for long-lasting smoothness",
    popular: false,
  },
  {
    name: "Arms",
    description: "Upper arms, lower arms, or full arm hair removal",
    popular: false,
  },
  {
    name: "Back & Chest",
    description: "Comprehensive treatment for larger body areas",
    popular: false,
  },
  {
    name: "Custom Areas",
    description: "Tailored treatments for any specific area of concern",
    popular: false,
  },
];

export default function Services() {
  return (
    <Section background="cream">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-heading-2 font-serif font-light text-neutral-800">
          Our
          <span className="block font-semibold text-gold-600">Services</span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Professional laser hair removal treatments for every area, customized
          to your needs
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Card key={service.name} className="relative">
            {service.popular && (
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-soft">
                Popular
              </div>
            )}
            <div className="space-y-3">
              <h3 className="text-xl font-serif font-semibold text-neutral-800">
                {service.name}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-neutral-600">
          Not sure which treatment is right for you?{" "}
          <a
            href="#contact"
            className="text-gold-600 font-medium hover:text-gold-700 underline underline-offset-4"
          >
            Book a free consultation
          </a>
        </p>
      </div>
    </Section>
  );
}
