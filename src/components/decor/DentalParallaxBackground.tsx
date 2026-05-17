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
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        "[mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]",
        className
      )}
    >
      {items.map((item) => (
        <DecorativeTooth
          key={item.id}
          item={item}
          progress={scrollYProgress}
          shouldReduceMotion={Boolean(shouldReduceMotion)}
        />
      ))}
    </motion.div>
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
  const sway = item.sway ?? 5;
  const drift = item.floatX ?? 6;
  const lift = item.float;

  return (
    <motion.div
      className={cn("absolute select-none will-change-transform", item.className)}
      style={{ y, rotate: item.rotation, opacity: item.opacity }}
    >
      <motion.img
        src={item.src}
        alt=""
        className="block h-auto w-full [filter:drop-shadow(0_20px_32px_rgba(68,45,34,0.22))_drop-shadow(0_6px_16px_rgba(255,255,255,0.4))]"
        draggable={false}
        loading="lazy"
        decoding="async"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -lift * 0.4, -lift, -lift * 0.55, 0],
                x: [0, drift * 0.6, drift, drift * 0.35, 0],
                rotate: [-sway, sway * 0.6, sway, sway * 0.35, -sway],
                scale: [1, 1.02, 1.05, 1.02, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
                times: [0, 0.22, 0.5, 0.78, 1],
              }
        }
      />
    </motion.div>
  );
}
