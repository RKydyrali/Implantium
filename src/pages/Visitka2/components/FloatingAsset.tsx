import { motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

type FloatingAssetProps = {
  src: string
  alt: string
  className?: string
  delay?: number
  duration?: number
  floatY?: number
  floatX?: number
  rotate?: number
}

export function FloatingAsset({
  src,
  alt,
  className,
  delay = 0,
  duration = 10,
  floatY = 18,
  floatX = 8,
  rotate = 5,
}: FloatingAssetProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
      draggable={false}
      className={cn(
        "pointer-events-none absolute z-[1] h-auto select-none will-change-transform [filter:drop-shadow(0_22px_34px_rgba(70,47,37,0.24))]",
        className
      )}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -floatY, -floatY * 0.45, 0],
              x: [0, floatX, -floatX * 0.35, 0],
              rotate: [-rotate, rotate * 0.6, rotate, -rotate],
              scale: [1, 1.025, 1.01, 1],
            }
      }
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration,
              delay,
              repeat: Infinity,
              ease: [0.42, 0, 0.58, 1],
            }
      }
    />
  )
}
