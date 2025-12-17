// src/components/About.tsx
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const MOMENTS = [
  {
    label: "Idea",
    title: "A place to experiment",
    text: "A small surface to try layouts, motion patterns, and color systems without shipping pressure.",
  },
  {
    label: "Build",
    title: "Modern foundations",
    text: "React, Tailwind v4, motion, and a theme system that makes changing direction safe.",
  },
  {
    label: "Polish",
    title: "Deliberate details",
    text: "Thin lines, gradients, and subtle motion used only when they add clarity.",
  },
  {
    label: "Next",
    title: "Evolves with you",
    text: "Later this can grow into a real product story, but it will keep the same calm energy.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl py-16 md:py-24 px-4 md:px-8"
    >
      {/* soft background band */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-destructive/10 via-background to-background" />
        <div className="absolute -right-32 bottom-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <motion.div
        className="space-y-8 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top copy */}
        <div className="max-w-2xl space-y-4">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.22em] text-destructive"
            variants={itemVariants}
          >
            About this space
          </motion.p>

          <motion.h2
            className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            variants={itemVariants}
          >
            Not a full product yet—just a{" "}
            <span className="bg-linear-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
              clean lane
            </span>{" "}
            for trying ideas
            <span className="text-destructive">.</span>
          </motion.h2>

          <motion.p
            className="text-sm text-muted-foreground md:text-base"
            variants={itemVariants}
          >
            Right now this project exists to answer one question: what does a
            small, motion-aware interface look like when it&apos;s reduced to
            the essentials? Everything else can come later.
          </motion.p>
        </div>

        {/* Horizontal timeline band */}
        <motion.div className="relative mt-4" variants={itemVariants}>
          

          {/* desktop: horizontal rail */}
          <div className="mt-6 hidden grid-cols-4 gap-6 md:grid">
            {MOMENTS.map((moment) => (
              <motion.div
                key={moment.label}
                className="space-y-2"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
                  <span>{moment.label}</span>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {moment.title}
                </p>
                <p className="text-[13px] text-foreground/85">{moment.text}</p>
              </motion.div>
            ))}
          </div>

          {/* mobile: vertical rail */}
          <div className="relative mt-4 flex gap-4 md:hidden">
            {/* vertical line */}
            <div className="relative w-px bg-border/70">
              <motion.div
                className="absolute left-0 top-0 h-full w-0.5 origin-top bg-linear-to-b from-destructive via-primary to-accent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: easeOut }}
              />
            </div>

            <div className="flex-1 space-y-5">
              {MOMENTS.map((moment) => (
                <motion.div
                  key={moment.label}
                  className="space-y-1"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
                    <span>{moment.label}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {moment.title}
                  </p>
                  <p className="text-[13px] text-foreground/85">
                    {moment.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
