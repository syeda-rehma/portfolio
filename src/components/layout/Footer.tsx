import { Code2, Globe, Mail, Heart } from "lucide-react";

const socials = [
  { label: "GitHub", icon: Code2, href: "https://github.com/syeda-rehma" },
  { label: "LinkedIn", icon: Globe, href: "https://linkedin.com" },
  { label: "Email", icon: Mail, href: "mailto:syedarehma340@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.03] bg-dark text-text-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <span className="font-heading text-2xl font-semibold text-text">
              Rehma Muskan
            </span>
            <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-text-dim">
              Exploring technology, building things, and sharing what I learn
              along the way.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-text-dim">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 rounded-lg border border-white/[0.06] px-4 py-2 font-body text-sm text-text-muted transition-all hover:border-accent/30 hover:text-accent"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.03] pt-8 md:flex-row">
          <p className="font-body text-xs text-text-dim">
            &copy; {new Date().getFullYear()} Rehma Muskan
          </p>
          <p className="inline-flex items-center gap-1.5 font-body text-xs text-text-dim">
            Made with <Heart size={11} className="text-accent" /> and late-night
            coffee
          </p>
        </div>
      </div>
    </footer>
  );
}