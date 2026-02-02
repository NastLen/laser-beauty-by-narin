import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-block text-center font-semibold rounded-2xl shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:scale-105 active:scale-100";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-gold-500 via-gold-600 to-bronze-500 text-white hover:from-gold-600 hover:via-gold-700 hover:to-bronze-600",
    secondary:
      "bg-white/80 backdrop-blur-sm text-neutral-800 hover:bg-white border border-gold-200",
  };

  const sizeClasses = {
    md: "px-10 py-3.5 text-base",
    lg: "px-12 py-4.5 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
