import Pricing from "@/components/sections/Pricing";

export const metadata = {
  title: "Цены | Laser Beauty by Narin",
  description: "Прозрачное ценообразование на все наши услуги",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Pricing />
    </main>
  );
}
