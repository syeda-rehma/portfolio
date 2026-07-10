import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
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
    category: ["Nature", "Landscape", "Street", "Portrait", "Architecture", "Travel"][num % 6],
  };
});

const categories = ["All", "Nature", "Landscape", "Street", "Portrait", "Architecture", "Travel"];

export default function Photography() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => galleryImages.filter(
      (img) => activeCategory === "All" || img.category === activeCategory,
    ),
    [activeCategory],
  );

  const open = useCallback((index: number) => setLightboxIndex(index), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i > 0 ? i - 1 : filtered.length - 1,
      ),
    [filtered.length],
  );
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i !== null && i < filtered.length - 1 ? i + 1 : 0,
      ),
    [filtered.length],
  );

  return (
    <section id="photography" className="relative px-6 py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-orange/[0.02] to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Photography"
          subtitle="Through My Lens"
          number="02"
        />

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 font-body text-xs font-medium uppercase tracking-[0.1em] transition-all ${
                activeCategory === cat
                  ? "bg-forest text-beige shadow-lg shadow-forest/20"
                  : "border border-forest/15 text-muted hover:border-forest/30 hover:text-forest"
              }`}
            >
              {cat === "All" && <Camera size={14} className="mr-1.5 inline" />}
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="mb-6 inline-block w-full cursor-pointer break-inside-avoid"
                onClick={() => open(i)}
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <div className="aspect-[3/4] overflow-hidden bg-beige-dark/40">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-3 py-1 font-body text-xs font-medium text-charcoal shadow-sm backdrop-blur-sm">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center font-body text-xs text-muted/40"
        >
          Supported:{" "}
          <code className="rounded bg-forest/10 px-2 py-0.5 font-body text-forest">
            .jpg .jpeg .png .webp
          </code>
          &nbsp;&mdash; just drop images in{" "}
          <code className="rounded bg-forest/10 px-2 py-0.5 font-body text-forest">
            src/assets/photography/
          </code>
        </motion.p>

        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
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
