// The booking page is a client component and can't export metadata itself.
export const metadata = {
  title: "Termin buchen | Laser Beauty by Narin",
  description: "Termin bei Laser Beauty by Narin in Wiesbaden per WhatsApp oder telefonisch vereinbaren.",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
