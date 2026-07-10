import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const img = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!img) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Image ${index + 1} of ${images.length}`}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-text transition-colors hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <div className="flex h-full w-full items-center justify-center px-4">
          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-text transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="flex max-h-[85vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              draggable={false}
            />
          </motion.div>

          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-2 text-text transition-colors hover:bg-white/20 md:right-16"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 font-body text-sm text-text">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}