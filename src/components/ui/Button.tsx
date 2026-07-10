import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  href?: string;
  download?: string;
}

const variants = {
  primary:
    "bg-accent hover:bg-accent-light text-white shadow-lg shadow-accent/25 hover:shadow-accent/35",
  outline:
    "border border-white/15 text-text hover:bg-white/5 hover:border-white/30",
  ghost:
    "text-text-muted hover:text-text",
};

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  download,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 font-body tracking-wide";

  const content = (
    <motion.span
      className={`${base} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      whileHover={disabled ? {} : { scale: 1.05, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
    >
      {icon && <span className="size-4">{icon}</span>}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled} {...props}>
      {content}
    </button>
  );
}