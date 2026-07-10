import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import ImageLoader from "@/components/ui/ImageLoader";
import images from "@/data/images";
import resumePath from "@/data/resume";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const childT = { duration: 0.6, ease: "easeOut" as const };

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-dark to-dark" />

      <div className="pointer-events-none absolute top-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-accent/4 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-secondary/4 blur-[140px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20"
      >
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span
              variants={child}
              transition={childT}
              className="mb-5 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            >
              Hi, I&apos;m
            </motion.span>

            <motion.h1
              variants={child}
              transition={childT}
              className="font-heading text-6xl font-bold leading-[1.05] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Rehma
              <br />
              <span className="text-gradient">Muskan</span>
            </motion.h1>

            <motion.p
              variants={child}
              transition={childT}
              className="mt-6 max-w-xl font-body text-lg leading-relaxed text-text-muted"
            >
              I love exploring technology&mdash;building things, solving problems,
              and learning something new every day.
            </motion.p>

            <motion.div variants={child} transition={childT} className="mt-10 flex flex-wrap gap-4">
              <Button
                icon={<ArrowDown size={18} />}
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                icon={<Download size={18} />}
                href={resumePath}
                download="Rehma_Muskan_Resume.pdf"
              >
                Resume
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-accent/4 blur-3xl" />
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="group relative h-[320px] w-[320px] overflow-hidden rounded-full border border-white/[0.06] shadow-2xl shadow-black/40 md:h-[400px] md:w-[400px]"
            >
              <ImageLoader
                src={images.hero}
                alt="Rehma Muskan"
                className="h-full w-full"
                wrapperClassName="h-full w-full"
                fallback={
                  <span className="font-heading text-6xl font-bold text-accent/20">
                    RM
                  </span>
                }
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.04] transition-all duration-500 group-hover:ring-accent/20" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          aria-label="Scroll"
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex cursor-pointer items-center justify-center text-text-dim transition-colors hover:text-accent"
        >
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
}