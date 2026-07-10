import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Camera, BookOpen, Coffee } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Lightbox from "@/components/ui/Lightbox";

const TOTAL = 7;

const galleryImages = Array.from({ length: TOTAL }, (_, i) => {
  const num = i + 1;
  return {
    src: new URL(
      `../../assets/photography/photo${num}.jpg`,
      import.meta.url,
    ).href,
    alt: `Photograph ${num}`,
  };
});

const hobbies = [
  {
    icon: Camera,
    title: "Photography",
    desc: "I enjoy capturing everyday moments and unique perspectives through a camera lens.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    desc: "Always reading something—tech blogs, data science articles, or a good fiction book.",
  },
  {
    icon: Coffee,
    title: "Coffee & Code",
    desc: "There's nothing quite like a quiet morning with coffee and a challenging problem to solve.",
  },
];

export default function Hobbies() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setLightboxIndex(index), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i > 0 ? i - 1 : galleryImages.length - 1,
      ),
    [],
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < galleryImages.length - 1 ? i + 1 : 0,
      ),
    [],
  );

  return (
    <section id="hobbies" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/3 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Hobbies & Interests"
          subtitle="Beyond Code"
          number="06"
        />

        <div className="mb-20 grid gap-5 md:grid-cols-3">
          {hobbies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-white/[0.04] bg-card/40 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent/15 hover:bg-card hover:shadow-xl"
            >
              <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-2.5 text-accent transition-colors group-hover:bg-accent/15">
                <item.icon size={20} />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <blockquote className="mb-10 text-center font-heading text-2xl font-light italic leading-relaxed text-text-muted md:text-3xl">
            &ldquo;Sometimes the best way to tell a story is without words.&rdquo;
          </blockquote>

          <div className="columns-2 gap-4 sm:columns-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="mb-4 inline-block w-full cursor-pointer break-inside-avoid"
                onClick={() => open(i)}
              >
                <div className="group/image relative overflow-hidden rounded-lg shadow-lg shadow-black/20 transition-shadow duration-300 hover:shadow-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {lightboxIndex !== null && (
          <Lightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </div>
    </section>
  );
}
