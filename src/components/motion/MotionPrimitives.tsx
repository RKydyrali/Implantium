import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const clinicalEase = [0.16, 1, 0.3, 1] as const;

const routeTransition = {
  duration: 0.32,
  ease: clinicalEase,
};

const revealViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -80px 0px",
} as const;

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
};

type RevealProps = MotionWrapperProps & {
  delay?: number;
};

type TextRevealProps = RevealProps & {
  as?: "div" | "span";
};

export function MotionPage({ children, className }: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex min-w-0 flex-1 flex-col", className)}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      transition={reduceMotion ? { duration: 0.12 } : routeTransition}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{
        duration: reduceMotion ? 0.12 : 0.44,
        delay: reduceMotion ? 0 : delay,
        ease: clinicalEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, className, delay = 0, as = "div" }: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "span" ? motion.span : motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{
        duration: reduceMotion ? 0.1 : 0.38,
        delay: reduceMotion ? 0 : delay,
        ease: clinicalEase,
      }}
    >
      {children}
    </Component>
  );
}

export function Stagger({ children, className }: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.055,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0.12 : 0.36,
            ease: clinicalEase,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type MotionListItemProps = MotionWrapperProps & {
  index?: number;
  interactive?: boolean;
  layout?: MotionProps["layout"];
};

export function MotionListItem({
  children,
  className,
  index = 0,
  interactive = false,
  layout = true,
}: MotionListItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      layout={layout}
      className={cn(interactive && "will-change-transform", className)}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
      whileHover={
        !reduceMotion && interactive
          ? { y: -4, transition: { type: "spring", stiffness: 320, damping: 26 } }
          : undefined
      }
      whileTap={
        !reduceMotion && interactive
          ? { y: -1, scale: 0.992, transition: { type: "spring", stiffness: 360, damping: 28 } }
          : undefined
      }
      transition={{
        duration: reduceMotion ? 0.12 : 0.28,
        delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.18),
        ease: clinicalEase,
      }}
    >
      {children}
    </motion.div>
  );
}
