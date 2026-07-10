import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Code2,
  Globe,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Please enter a valid email address.";
  if (!form.message.trim() || form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback(
    (field: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const next = { ...form, [field]: e.target.value };
        setForm(next);
        if (touched.has(field)) {
          const errs = validate(next);
          setErrors((prev) => ({
            ...prev,
            [field]: errs[field as keyof FormErrors],
          }));
        }
      },
    [form, touched],
  );

  const handleBlur = useCallback(
    (field: keyof FormState) => () => {
      setTouched((prev) => new Set(prev).add(field));
      const errs = validate(form);
      setErrors((prev) => ({
        ...prev,
        [field]: errs[field as keyof FormErrors],
      }));
    },
    [form],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched(new Set(["name", "email", "message"]));
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-accent/[0.01] to-transparent" />
      <div className="pointer-events-none absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-secondary/3 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Contact" subtitle="Get In Touch" number="07" />

        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 font-heading text-3xl font-bold text-text">
              Let&apos;s connect
            </h3>
            <p className="mb-10 font-body text-base leading-relaxed text-text-muted">
              Whether you have a project idea, an opportunity, or just want to
              say hi&mdash;I&apos;d love to hear from you.
            </p>

            <div className="mb-8 space-y-4">
              <a
                href="mailto:syedarehma340@gmail.com"
                className="group flex items-center gap-4 font-body text-sm text-text-muted transition-colors hover:text-text"
              >
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent transition-all duration-300 group-hover:bg-accent/15 group-hover:-translate-y-0.5">
                  <Mail size={18} />
                </div>
                syedarehma340@gmail.com
              </a>
              <a
                href="https://github.com/syeda-rehma"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 font-body text-sm text-text-muted transition-colors hover:text-text"
              >
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent transition-all duration-300 group-hover:bg-accent/15 group-hover:-translate-y-0.5">
                  <Code2 size={18} />
                </div>
                github.com/syeda-rehma
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 font-body text-sm text-text-muted transition-colors hover:text-text"
              >
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent transition-all duration-300 group-hover:bg-accent/15 group-hover:-translate-y-0.5">
                  <Globe size={18} />
                </div>
                linkedin.com/in/rehmamuskan
              </a>
            </div>

            <Button
              variant="outline"
              icon={<ArrowUpRight size={16} />}
              href="https://github.com/syeda-rehma"
            >
              GitHub Profile
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-xl border border-white/[0.04] bg-card/60 py-24 text-center shadow-lg"
              >
                <CheckCircle size={48} className="mb-4 text-accent" />
                <h4 className="font-heading text-2xl font-bold text-text">
                  Message Sent!
                </h4>
                <p className="mt-2 font-body text-sm text-text-muted">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-body text-xs font-medium text-text-muted"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    onBlur={handleBlur("name")}
                    className={`w-full rounded-lg border bg-card/40 px-4 py-3 font-body text-sm text-text outline-none transition-all placeholder:text-text-dim/30 focus:border-accent/50 focus:shadow-lg focus:shadow-accent/5 ${
                      errors.name && touched.has("name")
                        ? "border-red-500/40"
                        : "border-white/[0.06]"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && touched.has("name") && (
                    <p className="mt-1 flex items-center gap-1 font-body text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-body text-xs font-medium text-text-muted"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    onBlur={handleBlur("email")}
                    className={`w-full rounded-lg border bg-card/40 px-4 py-3 font-body text-sm text-text outline-none transition-all placeholder:text-text-dim/30 focus:border-accent/50 focus:shadow-lg focus:shadow-accent/5 ${
                      errors.email && touched.has("email")
                        ? "border-red-500/40"
                        : "border-white/[0.06]"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && touched.has("email") && (
                    <p className="mt-1 flex items-center gap-1 font-body text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-body text-xs font-medium text-text-muted"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    onBlur={handleBlur("message")}
                    className={`w-full resize-none rounded-lg border bg-card/40 px-4 py-3 font-body text-sm text-text outline-none transition-all placeholder:text-text-dim/30 focus:border-accent/50 focus:shadow-lg focus:shadow-accent/5 ${
                      errors.message && touched.has("message")
                        ? "border-red-500/40"
                        : "border-white/[0.06]"
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && touched.has("message") && (
                    <p className="mt-1 flex items-center gap-1 font-body text-xs text-red-400">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  icon={<Send size={16} />}
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}