import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  number?: string;
}

export default function SectionTitle({ title, subtitle, number }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mb-20"
    >
      {number && (
        <span className="pointer-events-none absolute -top-8 left-0 select-none font-heading text-[140px] font-bold leading-none text-white/[0.02] md:-top-14 md:text-[200px]">
          {number}
        </span>
      )}
      <span className="relative mb-2 block font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
        {subtitle}
      </span>
      <h2 className="relative font-heading text-4xl font-bold leading-tight text-text md:text-6xl lg:text-7xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-accent/30" />
    </motion.div>
  );
}