import type { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  icon?: ElementType;
  title?: string;
  desc?: string;
}

export default function Card({
  children,
  className = "",
  delay = 0,
  icon: Icon,
  title,
  desc,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group rounded-2xl border border-white/[0.04] bg-card/60 p-7 shadow-xl shadow-black/15 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.08] hover:bg-card hover:shadow-2xl ${className}`}
    >
      {Icon && (
        <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent/15">
          <Icon size={22} />
        </div>
      )}
      {title && (
        <h3 className="mb-2 font-heading text-xl font-semibold text-text">
          {title}
        </h3>
      )}
      {desc && (
        <p className="font-body text-sm leading-relaxed text-text-muted">
          {desc}
        </p>
      )}
      {children}
    </motion.div>
  );
}