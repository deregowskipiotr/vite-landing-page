import { motion, easeOut } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="max-w-7xl rounded-md md:border border-border/50 py-10 shadow-sm backdrop-blur-[0.1px] md:px-20 md:py-14"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          {/* Left: text block */}
          <div className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-4 md:gap-2 rounded-full border border-border/60 bg-muted/60 px-5 md:py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
              variants={itemVariants}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
              <span className="mt-1.5 md:mt-1">
                Preview build · Hero concept
              </span>
            </motion.div>

            <motion.h1
              className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              variants={itemVariants}
            >
              Start with a clean, animated{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                hero section
              </span>
              <span className="text-destructive">.</span>
            </motion.h1>

            <motion.p
              className="max-w-xl text-pretty text-sm text-muted-foreground md:text-base"
              variants={itemVariants}
            >
              Replace this copy later with your real product story. The layout,
              theming, and animation are ready — just plug in your text and
              visuals when you decide the final topic.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-around md:justify-start items-center md:gap-3 pt-2"
              variants={itemVariants}
            >
              <button
                type="button"
                className="rounded-md bg-destructive px-10 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-destructive/90 cursor-pointer"
              >
                Primary action
              </button>
              <button
                type="button"
                className="rounded-md border border-border px-10 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted/70 cursor-pointer"
              >
                Secondary link
              </button>
            </motion.div>
          </div>

          {/* Right: placeholder visual block */}
          <motion.div
            className="relative h-40 rounded-md border border-border/60 bg-linear-to-br from-muted/80 via-background to-accent/10 shadow-inner backdrop-blur-sm md:h-64"
            variants={itemVariants}
          >
            {/* Placeholder for future image or illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs uppercase md:tracking-[0.16em] text-muted-foreground px-4 md:px-0 text-center">
                Drop your image / 3D / mockup here
              </span>
            </div>

            {/* simple animated accent line */}
            <motion.div
              className="absolute inset-x-8 top-6 h-px bg-linear-to-r from-destructive/20 via-primary/60 to-destructive/20 origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            />

            <motion.div
              className="absolute inset-x-6 top-6 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent origin-left"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: 1.0,
                duration: 0.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
