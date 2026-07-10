import { motion } from "framer-motion";
import { Braces, Layout, Database, GitBranch } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

type Proficiency = "Familiar" | "Intermediate" | "Proficient";

interface Skill {
  name: string;
  level: Proficiency;
}

interface Category {
  icon: typeof Braces;
  title: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    icon: Braces,
    title: "Programming",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML", level: "Proficient" },
      { name: "CSS", level: "Proficient" },
    ],
  },
  {
    icon: Layout,
    title: "Web Development",
    skills: [
      { name: "HTML", level: "Proficient" },
      { name: "CSS", level: "Proficient" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Intermediate" },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "SQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
    ],
  },
  {
    icon: GitBranch,
    title: "Tools",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Proficient" },
      { name: "Android Studio", level: "Familiar" },
    ],
  },
];

function SkillTag({ name, level }: Skill) {
  const colors: Record<Proficiency, string> = {
    Proficient: "bg-accent/15 text-accent border-accent/15",
    Intermediate: "bg-secondary/15 text-secondary border-secondary/15",
    Familiar: "bg-white/5 text-text-dim border-white/[0.04]",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-body text-xs font-medium transition-all hover:border-white/10 ${colors[level]}`}
    >
      {name}
      <span className="rounded bg-inherit px-1.5 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wider opacity-80">
        {level}
      </span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-accent/[0.01] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Skills"
          subtitle="What I Work With"
          number="03"
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-xl border border-white/[0.04] bg-card/40 p-7 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/15 hover:bg-card hover:shadow-xl"
            >
              <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent/15">
                <cat.icon size={20} />
              </div>
              <h3 className="mb-5 font-heading text-lg font-semibold text-text">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillTag key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}