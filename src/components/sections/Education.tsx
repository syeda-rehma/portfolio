import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Iqra University",
  location: "Karachi, Pakistan",
  period: "2022 — 2026",
  description:
    "Focused on Artificial Intelligence, Data Science, and Software Engineering. Developed a strong foundation in algorithms, data structures, and modern software development practices.",
  highlights: [
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Full-Stack Development",
  ],
};

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/[0.01] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Education"
          subtitle="Academic Background"
          number="02"
        />

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.04] bg-card/50 shadow-xl shadow-black/20"
          >
            <div className="pointer-events-none absolute top-0 left-0 h-full w-px bg-gradient-to-b from-accent/40 via-secondary/20 to-accent/5" />
            <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-accent/5 to-transparent" />

            <div className="p-8 md:p-12">
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-5">
                  <div className="mt-1 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-text md:text-3xl">
                      {education.degree}
                    </h3>
                    <p className="mt-1.5 font-body text-base font-medium text-accent">
                      {education.school}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/15 bg-accent/8 px-3 py-1.5 font-body text-xs font-medium text-accent">
                    <Calendar size={12} />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-secondary/15 bg-secondary/8 px-3 py-1.5 font-body text-xs font-medium text-secondary">
                    <MapPin size={12} />
                    {education.location}
                  </span>
                </div>
              </div>

              <p className="mb-8 font-body text-base leading-relaxed text-text-muted">
                {education.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {education.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-lg border border-white/[0.04] bg-white/[0.03] px-4 py-2 font-body text-sm font-medium text-text"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}