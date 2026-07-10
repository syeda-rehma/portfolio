import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Folder } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const categories = ["All", "AI/ML", "Web"];

/* ── Add new projects below. Each entry needs:
 *     title, desc, tags[], category, github url, live url.
 *  ── */
const projects = [
  {
    title: "Resume Analyzer",
    desc: "An NLP-powered system that parses resumes, extracts skills and experience, matches against job descriptions, and provides actionable improvement recommendations.",
    tags: ["Python", "NLP"],
    category: "AI/ML",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Recipe Finder",
    desc: "A smart recipe discovery app with ingredient-based search, dietary filters, and favorites management for quick meal inspiration.",
    tags: ["Python", "HTML", "CSS"],
    category: "Web",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Restaurant Ordering System",
    desc: "A full-featured digital ordering platform with menu browsing, cart management, order customization, and real-time order tracking.",
    tags: ["ASP.NET", "SQL", "Bootstrap"],
    category: "Web",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Real Estate Inventory System",
    desc: "A property management platform with advanced search, detailed listings, data visualization dashboards, and client management tools.",
    tags: ["Python", "Django", "PostgreSQL"],
    category: "Web",
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-accent/[0.01] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary/3 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Projects" subtitle="Things I've Built" number="04" />

        <div className="mb-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.08em] transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "border border-white/[0.06] text-text-muted hover:border-white/20 hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.04] bg-card/50 shadow-xl shadow-black/15 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/25 hover:bg-card hover:shadow-2xl hover:shadow-accent/5"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 to-secondary/5">
                  <Folder
                    size={56}
                    className="text-accent/20 transition-all duration-500 group-hover:scale-110 group-hover:text-secondary/30"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-md border border-accent/15 bg-accent/8 px-3 py-1 font-body text-xs font-medium text-accent">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-3 font-heading text-2xl font-bold text-text">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-text-muted">
                    {project.desc}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.04] px-3 py-1 font-body text-xs font-medium text-text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}