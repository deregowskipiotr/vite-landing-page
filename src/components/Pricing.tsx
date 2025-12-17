
// src/components/Pricing.tsx
import { PLANS } from "@/constants";
import { motion, easeOut } from "framer-motion";



const containerVariants = {
  hidden: { opacity: 0, y: 24 },
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
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl py-16 md:py-24"
    >
      {/* heading */}
      <motion.div
        className="mb-10 space-y-3 md:mb-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.22em] text-destructive"
          variants={itemVariants}
        >
          Pricing overview
        </motion.p>
        <motion.h2
          className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          variants={itemVariants}
        >
          Choose a plan that{" "}
          <span className="bg-linear-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
            fits the way you like to work
          </span>
          <span className="text-destructive">.</span>
        </motion.h2>
      </motion.div>

      {/* cards */}
      <motion.div
        className="grid gap-3 md:gap-0 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {PLANS.map((plan) => {
          const isHighlight = Boolean(plan.highlight);

          return (
            <motion.article
              key={plan.id}
              variants={itemVariants}
              className={`relative flex flex-col justify-between rounded-md border px-5 py-6 shadow-sm backdrop-blur-md md:px-6 md:py-7 ${
                isHighlight
                  ? "border-destructive/70 bg-destructive/15 md:-mt-4 md:mb-4"
                  : "border-border/60 bg-background/80"
              }`}
            >
              {/* top badge for highlight plan */}
              {plan.badge && (
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-destructive/50 bg-destructive/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-destructive">
                    <span className="h-1.5 w-1.5 rounded-full bg-destructive shadow-[0_0_10px_rgba(220,38,38,0.9)]" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              {/* main content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold tracking-tight text-foreground md:text-base">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-2xl font-semibold md:text-3xl ${
                      isHighlight ? "text-destructive" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-xs text-muted-foreground md:text-sm">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-foreground/90">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex gap-2">
                      <span className="mt-1 inline-flex h-1.5 w-3 rounded-full bg-linear-to-r from-destructive via-primary to-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* bottom CTA block */}
              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  className={`w-full rounded-md px-4 py-2 text-sm font-medium shadow-sm transition-colors cursor-pointer ${
                    isHighlight
                      ? "bg-destructive text-primary-foreground hover:bg-destructive/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Choose this plan
                </button>

                <button
                  type="button"
                  className="w-full rounded-md border border-dashed border-border px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-destructive/70 hover:text-destructive cursor-pointer"
                >
                  Think about a discount? See details
                </button>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

