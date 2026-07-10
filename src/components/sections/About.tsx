import { motion } from "framer-motion";
import { Brain, BarChart3, Eye, Globe, Code2, Sparkles } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ImageLoader from "@/components/ui/ImageLoader";
import images from "@/data/images";

const interests = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Exploring how machines can learn, reason, and assist in solving complex problems.",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    desc: "Finding patterns and stories hidden in data using analysis and machine learning.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    desc: "Teaching computers to see and interpret visual information from the world.",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building responsive, accessible web experiences with modern frameworks.",
  },
  {
    icon: Code2,
    title: "Software Development",
    desc: "Writing clean, maintainable code that solves real problems.",
  },
  {
    icon: Sparkles,
    title: "Emerging Tech",
    desc: "Always curious about what&apos;s next&mdash;from new frameworks to cutting-edge research.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.015] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/3 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle title="About Me" subtitle="Who I Am" number="01" />

        <div className="mb-24 grid items-start gap-16 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="group relative mx-auto w-56 md:mx-0">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/30 transition-all duration-500 group-hover:shadow-accent/10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent z-10" />
                <ImageLoader
                  src={images.profile}
                  alt="Rehma Muskan"
                  className="h-full w-full"
                  wrapperClassName="h-full w-full"
                  fallback={
                    <span className="font-heading text-5xl font-bold text-accent/20">
                      RM
                    </span>
                  }
                />
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-xl border border-white/[0.04] bg-card px-4 py-2.5 shadow-xl transition-all duration-300 group-hover:border-accent/15">
                <p className="font-body text-xs font-medium text-accent">
                  Lifelong Learner
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:col-span-3"
          >
            <p className="font-body text-base leading-relaxed text-text-muted md:text-lg">
              I&apos;m <span className="font-semibold text-text">Rehma Muskan</span>.
              I studied Computer Science at{" "}
              <span className="font-semibold text-accent">Iqra University</span>,
              but my real education has been a mix of curiosity, late-night
              debugging, and the joy of making things work.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted md:text-lg">
              I&apos;m interested in{" "}
              <span className="text-text">Artificial Intelligence</span>,{" "}
              <span className="text-text">Data Science</span>,{" "}
              <span className="text-text">Computer Vision</span>,{" "}
              <span className="text-text">Web Development</span>, and{" "}
              <span className="text-text">Software Development</span>.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted md:text-lg">
              I love learning emerging technologies, building practical projects,
              and continuously improving my skills. Every project teaches me
              something new&mdash;and that&apos;s what keeps me going.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-xl border border-white/[0.04] bg-card/40 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/15 hover:bg-card hover:shadow-xl"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent/15">
                <item.icon size={18} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-text">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-muted">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}