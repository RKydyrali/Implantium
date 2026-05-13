import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { dentalDecorBySurface, type DentalDecorItem, type DentalDecorSurface } from "@/data/dentalDecor";
import { cn } from "@/lib/utils";

type DentalParallaxBackgroundProps = {
  surface: DentalDecorSurface;
  className?: string;
};

export function DentalParallaxBackground({ surface, className }: DentalParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const items = dentalDecorBySurface[surface];

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      {items.map((item) => (
        <DecorativeTooth
          key={item.id}
          item={item}
          progress={scrollYProgress}
          shouldReduceMotion={Boolean(shouldReduceMotion)}
        />
      ))}
    </div>
  );
}

function DecorativeTooth({
  item,
  progress,
  shouldReduceMotion,
}: {
  item: DentalDecorItem;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean;
}) {
  const y = useTransform(
    progress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [item.parallax, -item.parallax]
  );

  return (
    <motion.div
      className={cn("absolute select-none", item.className)}
      style={{ y, rotate: item.rotation, opacity: item.opacity }}
    >
      <motion.img
        src={item.src}
        alt=""
        className="block h-auto w-full [filter:drop-shadow(0_24px_36px_rgba(68,45,34,0.13))]"
        draggable={false}
        loading="lazy"
        decoding="async"
        animate={shouldReduceMotion ? undefined : { y: [0, -item.float, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
    </motion.div>
  );
}
