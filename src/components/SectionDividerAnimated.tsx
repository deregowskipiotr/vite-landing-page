// src/components/SectionDividerAnimated.tsx
import { motion, easeInOut } from "framer-motion";

export function SectionDividerAnimated() {
  return (
    <div className="mx-auto my-12 max-w-5xl px-4 md:px-8">
      <div className="relative h-px rounded-full bg-linear-to-r from-destructive/50 via-primary/60 to-accent/50 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-destructive to-transparent"
          initial={{ x: "-70%" }}
          animate={{ x: "170%" }}
          transition={{
            duration: 2.4,
            ease: easeInOut,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
        />
      </div>
    </div>
  );
}
