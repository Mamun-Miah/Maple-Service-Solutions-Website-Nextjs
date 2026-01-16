"use client";

import { motion, useReducedMotion } from "framer-motion";
import ShinyText from "../ui/ShinyText";
type Props = {
  className?: string;
};

export function HeroHeadline({ className }: Props) {
  const reduce = useReducedMotion();

  // Timing controls
  const baseDelay = 0.15; // delay between words
  const wordDur = 0.28;

  // Word schedule (We, Build, [Intelligent injected], Products, That, Define, Markets.)
  // We'll animate all words, but "Intelligent" is special: it slides in AFTER Build.
  const words = ["We", "Build", "Intelligent", "Products", "That", "Define", "Markets."];

  // Compute per-word reveal delays (excluding the special intelligent injection start)
  const delays: Record<string, number> = {
    We: 0.0,
    Build: baseDelay * 1,
    Products: baseDelay * 3.2, // start after Intelligent finishes
    That: baseDelay * 4.2,
    Define: baseDelay * 5.2,
    "Markets.": baseDelay * 6.2,
  };

  // Intelligent injection timing
  const buildDelay = delays.Build; // when Build appears
  const intelligentStart = buildDelay + 0.55; // after Build is visible
  const intelligentDur = 0.55;

  if (reduce) {
    // Reduced motion: just render headline without animation
    return (
      <h1 className={className}>
        We Build <span className="premium-intelligent">Intelligent</span> Products That Define Markets.
      </h1>
    );
  }

  return (
    <h1 className={className} aria-label="We Build Intelligent Products That Define Markets.">
      {/* Use inline-flex + wrap so it stays responsive */}
      <span className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2">
        {/* We */}
        <WordReveal text="We" delay={delays.We} dur={wordDur} />

        {/* Build (acts as the “source” word) */}
        <span className="relative inline-flex items-baseline">
          <WordReveal text="Build" delay={delays.Build} dur={wordDur} />

          {/* Intelligent injected "from behind Build" */}
          <span className="relative ">
            {/* Blank slot placeholder (space) — keeps layout stable */}
            <span
              className="inline-block align-baseline"
              style={{ width: "8.2ch" }} // reserve space for "Intelligent"
              aria-hidden="true"
            />

            {/* The injected word */}
            <motion.span
              className="premium-intelligent absolute left-0 top-0 inline-block"
              initial={{ opacity: 0, x: "-70%", filter: "blur(6px)" }}
              animate={{ opacity: 1, x: "0%", filter: "blur(0px)" }}
              transition={{
                delay: intelligentStart,
                duration: intelligentDur,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ShinyText
                text="Intelligent"
                speed={1.9}
                delay={0}
                color="#6366f1"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
              />
            </motion.span>
          </span>
        </span>

        {/* Products */}
        <WordReveal text="Products" delay={delays.Products} dur={wordDur} />
        {/* That */}
        <WordReveal text="That" delay={delays.That} dur={wordDur} />
        {/* Define */}
        <WordReveal text="Define" delay={delays.Define} dur={wordDur} />
        {/* Markets. */}
        <WordReveal text="Markets." delay={delays["Markets."]} dur={wordDur} />
      </span>
    </h1>
  );
}

function WordReveal({
  text,
  delay,
  dur,
}: {
  text: string;
  delay: number;
  dur: number;
}) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: dur,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {text}
    </motion.span>
  );
}