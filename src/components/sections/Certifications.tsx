import { motion } from "framer-motion";
import { Award, ExternalLink, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import certifications from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/[0.01] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Certifications"
          subtitle="Credentials"
          number="05"
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-white/[0.04] bg-card/40 p-7 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/15 hover:bg-card hover:shadow-xl"
            >
              <div className="pointer-events-none absolute top-0 right-0 h-20 w-20 rounded-bl-2xl bg-accent/5 transition-colors group-hover:bg-accent/10" />

              <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent">
                <Award size={22} />
              </div>
              <h3 className="mb-1.5 font-heading text-xl font-bold text-text">
                {cert.title}
              </h3>
              <p className="mb-1 font-body text-sm font-medium text-accent">
                {cert.issuer}
              </p>
              <p className="mb-6 font-body text-sm leading-relaxed text-text-muted">
                {cert.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-white/[0.04] bg-white/[0.03] px-3 py-1 font-body text-xs text-text-dim">
                  {cert.date}
                </span>
                {cert.pdf ? (
                  <Button
                    size="sm"
                    variant="ghost"
                    icon={<ExternalLink size={14} />}
                    href={cert.pdf}
                  >
                    View Certificate
                  </Button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.04] bg-white/[0.02] px-3 py-1.5 font-body text-xs text-text-dim">
                    <Clock size={12} />
                    Certificate Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}