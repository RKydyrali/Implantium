import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useDragControls, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type MobileServiceSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
  closeLabel: string;
  expandLabel: string;
  collapseLabel: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

const sheetTitleId = "mobile-service-sheet-title";
const sheetDescriptionId = "mobile-service-sheet-description";

const CLOSE_DRAG_OFFSET = 96;
const CLOSE_VELOCITY = 720;
const EXPAND_DRAG_OFFSET = -48;
const EXPAND_VELOCITY = -420;
const COLLAPSE_DRAG_OFFSET = 56;
const COLLAPSE_VELOCITY = 420;

export function MobileServiceSheet({
  open,
  onOpenChange,
  expanded,
  onExpandedChange,
  closeLabel,
  expandLabel,
  collapseLabel,
  title,
  description,
  children,
  className,
}: MobileServiceSheetProps) {
  const dragControls = useDragControls();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const sheetTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, damping: 32, stiffness: 340, mass: 0.85 };

  const overlayTransition = reduceMotion ? { duration: 0 } : { duration: 0.22 };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label={closeLabel}
            className="fixed inset-0 z-50 bg-[#1F2528]/45 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={sheetTitleId}
            aria-describedby={sheetDescriptionId}
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-hidden rounded-t-[1.75rem] border border-b-0 border-[#DDE3E7] bg-white shadow-[0_28px_90px_rgba(31,37,40,0.16)]",
              className
            )}
            initial={{ y: "100%" }}
            animate={{ y: 0, height: expanded ? "92dvh" : "70dvh" }}
            exit={{ y: "100%" }}
            transition={sheetTransition}
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.08, bottom: 0.28 }}
            onDragEnd={(_, info) => {
              const { offset, velocity } = info;

              if (offset.y > CLOSE_DRAG_OFFSET || velocity.y > CLOSE_VELOCITY) {
                if (!expanded || offset.y > CLOSE_DRAG_OFFSET * 1.35 || velocity.y > CLOSE_VELOCITY * 1.15) {
                  onOpenChange(false);
                  return;
                }

                onExpandedChange(false);
                return;
              }

              if (offset.y < EXPAND_DRAG_OFFSET || velocity.y < EXPAND_VELOCITY) {
                onExpandedChange(true);
                return;
              }

              if (offset.y > COLLAPSE_DRAG_OFFSET || velocity.y > COLLAPSE_VELOCITY) {
                onExpandedChange(false);
              }
            }}
          >
            <button
              type="button"
              aria-label={expanded ? collapseLabel : expandLabel}
              aria-expanded={expanded}
              onPointerDown={(event) => dragControls.start(event)}
              className="flex h-10 w-full shrink-0 cursor-grab touch-none items-center justify-center text-[#8A949B] active:cursor-grabbing"
            >
              <span className="h-1.5 w-14 rounded-full bg-[#C8D3D9]" />
            </button>

            <h2 id={sheetTitleId} className="sr-only">
              {title}
            </h2>
            <p id={sheetDescriptionId} className="sr-only">
              {description}
            </p>

            <button
              type="button"
              aria-label={closeLabel}
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-sm text-[#8A949B] opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <X className="size-4" />
            </button>

            <motion.div layout className="min-h-0 flex-1 overflow-y-auto">
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
