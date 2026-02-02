import Section from "@/components/ui/Section";

const benefits = [
  {
    title: "Long-Lasting Results",
    description:
      "Achieve permanent hair reduction with our advanced laser technology, saving you time and effort in your daily routine.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Precision & Safety",
    description:
      "Our medical-grade lasers target hair follicles with pinpoint accuracy while protecting surrounding skin.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Comfortable Experience",
    description:
      "Advanced cooling technology and expert technique ensure minimal discomfort during your treatment.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "All Skin Tones",
    description:
      "Our versatile laser systems are safe and effective for all skin types and hair colors.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "No Downtime",
    description:
      "Resume your daily activities immediately after treatment—no recovery period needed.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Cost-Effective",
    description:
      "Save money in the long run by eliminating the need for constant waxing, shaving, and depilatory products.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <Section background="white">
      <div className="text-center space-y-6 mb-16">
        <h2 className="text-heading-2 font-serif font-light text-neutral-800">
          Why Choose
          <span className="block font-semibold text-gold-600">
            Laser Hair Removal
          </span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Discover the advantages of choosing professional laser hair removal at
          our studio
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-champagne-100 rounded-2xl flex items-center justify-center text-gold-600">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">
              {benefit.title}
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
