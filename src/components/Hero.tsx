import { CHIPS } from "@/constants";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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
    transition: { duration: 0.45, ease: easeOut },
  },
};

const ribbonVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, staggerChildren: 0.06 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: easeOut },
  },
};



export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 md:px-8 overflow-hidden"
    >
      {/* soft background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-destructive/10 via-background to-background" />
        <div className="absolute -left-32 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 top-10 h-52 w-52 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <motion.div
        className="flex w-full flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* soft mist behind main text */}
        <div className="pointer-events-none absolute inset-x-4 mx-auto h-60 max-w-3xl rounded-[40%] bg-destructive/10 blur-3xl md:inset-x-10" />

        {/* content on top */}
        <motion.div className="relative flex flex-col items-center text-center"></motion.div>
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          variants={itemVariants}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
          <span className=" mt-1">Preview build · Hero concept</span>
        </motion.div>

        <motion.h1
          className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          variants={itemVariants}
        >
          A{" "}
          <span className="bg-linear-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
            modern, animated surface
          </span>{" "}
          for your next idea
          <span className="text-destructive">.</span>
        </motion.h1>

        <motion.p
          className="mt-4 md:max-w-2xl text-pretty text-sm text-muted-foreground md:text-base"
          variants={itemVariants}
        >
          This hero is just a canvas. Later you can swap in your real product,
          but the motion, layout, and theming are already tuned to feel sharp
          and deliberate.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          variants={itemVariants}
        >
          <button
            type="button"
            className="rounded-md bg-destructive w-full md:w-auto px-7 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-destructive/90 cursor-pointer"
          >
            Start exploring
          </button>
          <button
            type="button"
            className="rounded-md border border-border w-full md:w-auto px-7 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/70 cursor-pointer"
          >
            See how it’s built
          </button>
        </motion.div>

        {/* animated ribbon of chips */}
        <motion.div
          className="mt-10 w-full max-w-3xl"
          variants={ribbonVariants}
        >
          <div className="relative rounded-full border border-border/60 bg-background/80 px-3 py-3 shadow-sm backdrop-blur-md">
            <motion.div
              className="flex flex-nowrap gap-2 overflow-x-auto md:justify-center md:overflow-visible"
              variants={ribbonVariants}
            >
              {CHIPS.map((chip) => (
                <motion.div
                  key={chip}
                  variants={chipVariants}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/70 px-3 py-1 text-[11px] font-medium text-foreground/90 whitespace-nowrap"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-destructive via-primary to-accent" />
                  <span>{chip}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* subtle moving highlight */}
            <motion.div
              className="pointer-events-none absolute inset-y-0.5 left-0 w-1/3 rounded-full bg-linear-to-r from-transparent via-destructive/20 to-transparent"
              initial={{ x: "0%" }}
              animate={{ x: "150%" }}
              transition={{
                duration: 2.6,
                ease: easeOut,
                repeat: Infinity,
                repeatDelay: 1.4,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
