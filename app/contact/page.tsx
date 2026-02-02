import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Контакты | Laser Beauty by Narin",
  description: "Свяжитесь с нами для записи на процедуру",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
}
