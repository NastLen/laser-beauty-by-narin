import About from "@/components/sections/About";

export const metadata = {
  title: "Über mich | Laser Beauty by Narin",
  description: "Laser Beauty by Narin in Wiesbaden: moderne Laser-Haarentfernung mit persönlicher Betreuung.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  );
}
