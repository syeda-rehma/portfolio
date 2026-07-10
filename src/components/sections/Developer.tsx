import { motion } from "framer-motion";
import {
  Download,
  GraduationCap,
  Code2,
  Layout,
  Braces,
  GitBranch,
  Brain,
  ExternalLink,
  Folder,
  Award,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { WavyLine } from "@/components/effects/EditorialShapes";

const education = [
  {
    icon: GraduationCap,
    degree: "BS Computer Science",
    school: "Iqra University",
    period: "2022 \u2013 2026",
  },
];

const skillCategories = [
  {
    icon: Braces,
    title: "Programming",
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Layout,
    title: "Web Development",
    skills: ["React", "Tailwind CSS", "ASP.NET MVC"],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    skills: ["Python", "NLP", "Machine Learning"],
  },
  {
    icon: GitBranch,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
  {
    icon: Award,
    title: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Creativity", "Communication"],
  },
];

const projects = [
  {
    title: "Resume Analyzer",
    desc: "AI + NLP based resume analysis system that extracts skills, matches job descriptions, and provides actionable suggestions.",
    tags: ["Python", "NLP", "AI"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Recipe Finder",
    desc: "Recipe search application that helps users discover dishes based on available ingredients with smart filtering.",
    tags: ["Python", "HTML", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Restaurant Ordering System",
    desc: "Digital ordering platform with menu management, cart system, and order tracking.",
    tags: ["ASP.NET", "SQL", "Bootstrap"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Real Estate Inventory System",
    desc: "Property management system with listing search, filtering, and data visualization for real estate agents.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "2D Adventure Game",
    desc: "Classic 2D adventure game with level navigation, enemy AI, and interactive environments built from scratch.",
    tags: ["Python", "Pygame", "OOP"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function Developer() {
  return (
    <section id="developer" className="relative px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-forest/[0.02] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Developer"
          subtitle="About Me"
          number="01"
        />

        <div className="mb-24 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto w-56 md:mx-0">
              <div className="aspect-square overflow-hidden rounded-3xl border-2 border-forest/15 shadow-xl shadow-forest/10">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face"
                  alt="Rehma Muskan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-xl border border-orange/20 bg-white px-4 py-2 shadow-md">
                <p className="font-body text-xs font-semibold text-orange">
                  CS Student
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="font-body text-sm leading-relaxed text-muted md:text-base">
              I am a BS Computer Science student at{" "}
              <span className="font-semibold text-forest">Iqra University</span>{" "}
              with a deep passion for Artificial Intelligence, Data Science,
              Computer Vision, and Web Development.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted md:text-base">
              I enjoy building meaningful digital experiences while also
              expressing creativity through photography. My goal is to combine
              technology and creativity to create impactful solutions and
              memorable experiences.
            </p>
            <div className="pt-2">
              <Button
                icon={<Download size={16} />}
                href="/resume.pdf"
                download="Rehma_Muskan_Resume.pdf"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <h3 className="mb-10 font-heading text-3xl font-semibold text-forest md:text-4xl">
            Education
          </h3>
          <div className="relative border-l-2 border-forest/20 pl-8">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mb-10 last:mb-0"
              >
                <div className="absolute -left-[41px] rounded-full border-2 border-forest bg-beige p-1.5">
                  <item.icon size={16} className="text-forest" />
                </div>
                <span className="mb-1 block font-body text-xs font-semibold uppercase tracking-[0.15em] text-orange">
                  {item.period}
                </span>
                <h4 className="font-heading text-xl font-semibold text-forest">
                  {item.degree}
                </h4>
                <p className="font-body text-sm text-muted">{item.school}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h3 className="mb-10 font-heading text-3xl font-semibold text-forest md:text-4xl">
            Skills
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-forest/10 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:border-forest/30 hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-xl bg-forest/10 p-2.5 text-forest">
                  <cat.icon size={20} />
                </div>
                <h4 className="mb-3 font-heading text-lg font-semibold text-forest">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-forest/10 bg-white/60 px-3 py-1 font-body text-xs text-muted shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-10 flex items-end justify-between">
            <h3 className="font-heading text-3xl font-semibold text-forest md:text-4xl">
              Projects
            </h3>
            <WavyLine className="hidden text-forest/20 md:block" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col rounded-2xl border border-forest/10 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:border-orange/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-28 items-center justify-center rounded-xl bg-beige/60 text-forest/20">
                  <Folder size={40} />
                </div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-forest">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 font-body text-sm leading-relaxed text-muted">
                  {project.desc}
                </p>
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/70 px-2.5 py-0.5 font-body text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    icon={<Code2 size={14} />}
                    href={project.github}
                  >
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="primary"
                    icon={<ExternalLink size={14} />}
                    href={project.live}
                  >
                    Live Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
