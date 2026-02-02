import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "nude";
  id?: string;
}

export default function Section({
  children,
  className = "",
  background = "white",
  id,
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    cream: "bg-gradient-to-b from-cream-50 to-white",
    nude: "bg-gradient-to-b from-champagne-50 to-white",
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgClasses[background]} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
