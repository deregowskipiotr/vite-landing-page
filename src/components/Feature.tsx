// src/components/FeatureSpotlight.tsx
import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { FEATURES } from "@/constants";




const listVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut, staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function Feature() {
  const [activeId, setActiveId] = useState<string>(FEATURES[0]?.id);

  const activeFeature =
    FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[0];

  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl py-16 md:py-24"
    >
      <div className="mb-10 space-y-3 md:mb-14">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-destructive">
          Feature spotlight
        </p>
        <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Explore the core pieces
          <br />
          that make this experience{" "}
          <span className="bg-linear-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
            feel sharp and intentional
          </span>
          <span className="text-destructive">.</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
        {/* Left: interactive feature list */}
        <motion.ul
          className="space-y-3"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {FEATURES.map((feature) => {
            const isActive = feature.id === activeId;
            return (
              <motion.li
                key={feature.id}
                variants={itemVariants}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(feature.id)}
                  className={`group flex w-full items-center justify-between gap-3 rounded-md border px-3 py-3 text-left text-sm transition-colors cursor-pointer ${
                    isActive
                      ? "border-destructive/70 bg-destructive/10"
                      : "border-border/60 bg-background/60 hover:bg-muted/70"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                        isActive
                          ? "bg-destructive text-primary-foreground shadow-[0_0_14px_rgba(220,38,38,0.9)]"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {feature.label[0]}
                    </span>
                    <div className="space-y-0.5">
                      <span
                        className={`block text-xs font-medium uppercase tracking-[0.18em] ${
                          isActive
                            ? "text-destructive"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature.label}
                      </span>
                      <span className="block text-sm text-foreground/90">
                        {feature.title}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive
                        ? "bg-destructive shadow-[0_0_10px_rgba(220,38,38,0.9)]"
                        : "bg-border"
                    }`}
                  />
                </button>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Right: spotlight panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            layout
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.99 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative overflow-hidden rounded-xl border border-border/70 bg-background/80 px-5 py-6 shadow-sm backdrop-blur-md md:px-7 md:py-7"
          >
            {/* corner accent */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-destructive/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>

            {/* top tag + title */}
            <div className="relative mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-destructive">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
                  <span>{activeFeature.label}</span>
                </div>
                <h3 className="max-w-xl text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {activeFeature.title}
                </h3>
              </div>

              {/* small badge */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-destructive/30 blur-xl" />
                <div className="relative flex items-center gap-2 rounded-full border border-destructive/50 bg-background/80 px-3 py-1 text-[11px] font-medium text-destructive">
                  <span className="h-1 w-1 rounded-full bg-destructive" />
                  <span>Focused view</span>
                </div>
              </div>
            </div>

            {/* description + bullets */}
            <div className="relative space-y-4">
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                {activeFeature.description}
              </p>

              <ul className="space-y-2 text-sm text-foreground/90">
                {activeFeature.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 inline-flex h-1.5 w-3 rounded-full bg-linear-to-r from-destructive via-primary to-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
