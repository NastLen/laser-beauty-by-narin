import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section background="white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-heading-2 font-serif font-light text-neutral-800">
          Where Comfort Meets
          <span className="block font-semibold text-gold-600">Excellence</span>
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full"></div>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          At Laser Beauty by Narin, we believe that beauty treatments should be
          more than just effective—they should be an experience. Our boutique
          studio combines state-of-the-art laser technology with a serene,
          luxurious atmosphere designed to make you feel pampered and at ease.
        </p>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          Founded on the principles of quality, safety, and personalized care,
          we're dedicated to helping you achieve smooth, radiant skin with
          treatments tailored to your unique needs.
        </p>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 pt-12">
          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gold-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">
              Premium Technology
            </h3>
            <p className="text-neutral-600">
              Advanced laser systems for safe, effective, and virtually painless
              treatments
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gold-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">
              Personalized Care
            </h3>
            <p className="text-neutral-600">
              Every treatment is customized to your skin type, hair color, and
              comfort level
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gold-600"
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
            </div>
            <h3 className="text-xl font-serif font-semibold text-neutral-800">
              Safety First
            </h3>
            <p className="text-neutral-600">
              Certified specialists and medical-grade equipment in a hygienic
              environment
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
