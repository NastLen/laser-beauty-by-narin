import type { Metadata } from "next";
import {
  Playfair_Display,
  DM_Sans,
  Marcellus,
  Great_Vibes,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/app/context/LanguageContext";
import { ConsentProvider } from "@/app/context/ConsentContext";
import ConsentSettings from "@/components/consent/ConsentSettings";

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laser Beauty by Narin | Laser-Haarentfernung in Wiesbaden",
  description:
    "Laser-Haarentfernung mit DEKA Motus AX in Wiesbaden – persönlich, professionell und sanft. Preisliste, Kontakt und Online-Terminbuchung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${dmSans.variable} ${marcellus.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans">
        <LanguageProvider>
          <ConsentProvider>
            <ConsentSettings />
            <Header />
            <div>{children}</div>
            <Footer />
          </ConsentProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
