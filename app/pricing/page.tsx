import Pricing from "@/components/sections/Pricing";

export const metadata = {
  title: "Preisliste | Laser Beauty by Narin",
  description: "Preise für Laser-Haarentfernung mit DEKA Motus AX pro Sitzung und als Angebotspakete sowie für Wimpern- und Browlifting.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Pricing />
    </main>
  );
}
