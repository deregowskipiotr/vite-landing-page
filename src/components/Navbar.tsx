import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NAV_LINKS } from "../constants";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");

  // change style on scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // sort visible sections by their top position
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveHash(`#${id}`);
        }
      },
      {
        root: null,
        threshold: 0.35, // how much of section must be visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <>
      {/* fixed bar */}
      <motion.header
        className="fixed inset-x-0 top-0 z-40"
        initial={false}
        animate={{
          backdropFilter: isScrolled ? "blur(6px)" : "blur(0px)",
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="mx-auto mt-3 w-full max-w-7xl px-3 md:px-5">
          <div className="w-full rounded-md border border-border/40 bg-background/80">
            {/* DESKTOP / TABLET */}
            <nav className="hidden md:flex items-center justify-between px-5 md:px-10 py-3">
              {/* Left: logo */}
              <div className="flex items-center gap-2">
                <span className="text-lg italic tracking-tight">PD</span>
              </div>

              {/* Center: links */}
              <div className="flex items-center gap-6 text-sm font-medium">
                {NAV_LINKS.map((link) => {
                  const isActive = activeHash === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative pb-1 transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 bottom-0 h-px w-full rounded-full transition-all duration-500 ease-in-out ${
                          isActive
                            ? "bg-destructive"
                            : "bg-transparent group-hover:bg-destructive/60"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              {/* Right: theme + button sign in */}
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  type="button"
                  className="flex rounded-md bg-destructive px-5 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-colors duration-300 hover:bg-destructive/90 cursor-pointer"
                >
                  <span>Sign In</span>
                </button>
              </div>
            </nav>

            {/* MOBILE BAR */}
            <div className="flex items-center justify-between px-5 py-3 md:hidden">
              {/* Left: logo */}
              <div className="flex items-center gap-2">
                <span className="text-base italic tracking-tight">PD</span>
              </div>

              {/* Right: switch + theme toggle */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleMobile}
                  className="flex items-center gap-1 text-[12px] font-medium text-foreground/80 cursor-pointer"
                >
                  <span>{mobileOpen ? "switch up" : "switch down"}</span>
                  {mobileOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU PANEL (below fixed bar) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="fixed inset-x-0 top-[52px] z-30 md:hidden bg-background/95 border-b border-border/40 h-full"
          >
            <div className="mx-auto w-full max-w-7xl px-3 md:px-5 pb-4 pt-2">
              {/* links */}
              <motion.ul
                className="flex flex-col mt-2 gap-2 text-sm font-medium"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                {NAV_LINKS.map((link, index) => {
                  const isActive = activeHash === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.15 + index * 0.05 },
                        },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`inline-block w-full px-1 py-1.5 transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* full-width button below links */}
              <button
                type="button"
                className="mt-4 w-full rounded-md bg-destructive px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
