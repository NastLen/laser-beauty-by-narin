import About from "@/components/sections/About";

export const metadata = {
  title: "О нас | Laser Beauty by Narin",
  description: "Узнайте больше о нашей студии премиум лазерной эпиляции",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  );
}
