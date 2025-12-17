// src/components/Contact.tsx
import { motion, easeOut } from "framer-motion";
import { Github, Mail, Twitter } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl py-16 md:py-20 px-4 md:px-8"
    >
      {/* subtle background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-destructive/20 via-background to-background" />
        <div className="absolute -left-24 top-4 h-40 w-40 rounded-full bg-primary/14 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.22em] text-destructive"
          variants={itemVariants}
        >
          Contact
        </motion.p>

        <motion.h2
          className="mt-2 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl"
          variants={itemVariants}
        >
          Have feedback or want to{" "}
          <span className="bg-linear-to-r from-destructive via-primary to-accent bg-clip-text text-transparent">
            talk about the build
          </span>
          <span className="text-destructive">?</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-sm text-muted-foreground md:text-base"
          variants={itemVariants}
        >
          This space is still evolving. If you have ideas, suggestions, or just
          want to say hi, choose a channel below and reach out any time.
        </motion.p>

        {/* main contact action */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          variants={itemVariants}
        >
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-destructive px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-destructive/90 cursor-pointer"
          >
            <Mail className="h-4 w-4" />
            <span>Send an email</span>
          </a>
        </motion.div>

        {/* social row */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground"
          variants={itemVariants}
        >
          <span className="text-[11px] uppercase tracking-[0.18em]">
            Or find me here
          </span>
        </motion.div>

        <motion.div
          className="mt-3 flex flex-wrap items-center justify-center gap-3"
          variants={itemVariants}
        >
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-md transition-colors hover:border-destructive/70 hover:text-destructive cursor-pointer"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-md transition-colors hover:border-destructive/70 hover:text-destructive cursor-pointer"
          >
            <Twitter className="h-4 w-4" />
            <span>Twitter / X</span>
          </a>

          {/* add more if needed */}
        </motion.div>

        {/* tiny bottom line with location */}
        <motion.p
          className="mt-8 text-[11px] text-muted-foreground"
          variants={itemVariants}
        >
          Based somewhere between code editors and coffee shops. Built with love
          for clean interfaces and subtle motion.
        </motion.p>
      </motion.div>
    </section>
  );
}
