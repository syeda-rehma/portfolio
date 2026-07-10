import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center md:h-[440px] md:w-[440px]">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent/25" />
        <div className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary/25" />
      </motion.div>

      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-accent/15" />
      </motion.div>

      {/* Ring paths */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 440">
        <circle
          cx="220"
          cy="220"
          r="170"
          fill="none"
          stroke="rgba(79, 138, 139, 0.06)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle
          cx="220"
          cy="220"
          r="120"
          fill="none"
          stroke="rgba(214, 167, 91, 0.04)"
          strokeWidth="1"
          strokeDasharray="2 10"
        />
      </svg>

      {/* Central glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03] bg-gradient-to-br from-accent/8 to-accent/3 shadow-2xl shadow-accent/10"
      />

      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/10 bg-secondary/5"
      />

      {/* Floating symbols */}
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute left-[30px] top-[80px] font-mono text-2xl text-accent/25"
      >
        {"<"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute right-[30px] bottom-[80px] font-mono text-2xl text-secondary/25"
      >
        {"/>"}
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-[50px] top-[100px] font-mono text-lg text-accent/20"
      >
        {"{"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
        className="absolute left-[50px] bottom-[100px] font-mono text-lg text-secondary/20"
      >
        {"}"}
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute right-[80px] top-[150px] font-mono text-base text-accent/15"
      >
        _
      </motion.div>

      {/* Particles */}
      <motion.div
        animate={{ y: [0, -5, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute left-[120px] top-[60px] h-1.5 w-1.5 rounded-full bg-accent/25"
      />
      <motion.div
        animate={{ y: [0, 5, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut", delay: 0.8 }}
        className="absolute right-[120px] bottom-[60px] h-1.5 w-1.5 rounded-full bg-secondary/25"
      />
      <motion.div
        animate={{ y: [0, -4, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 1.5 }}
        className="absolute left-[160px] bottom-[40px] h-1 w-1 rounded-full bg-accent/20"
      />
      <motion.div
        animate={{ y: [0, 4, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        className="absolute right-[160px] top-[50px] h-1 w-1 rounded-full bg-secondary/20"
      />
    </div>
  );
}