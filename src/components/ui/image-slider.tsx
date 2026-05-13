import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ImageSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: ImageSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    },
    []
  );

  const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ("clientX" in e) {
      handleMove(e.clientX);
    } else {
      handleMove(e.touches[0].clientX);
    }
  };

  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    if (isDragging) {
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("mousemove", handleGlobalMouseMove);
    }

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-xl select-none bg-secondary",
        className
      )}
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchMove={onTouchMove}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 size-full object-cover object-[center_42%]"
        draggable={false}
      />

      {/* Before Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden border-r-2 border-white/80 shadow-[4px_0_24px_rgba(0,0,0,0.25)]"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover object-center"
          style={{ width: `${10000 / sliderPosition}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-3">
        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
          {beforeLabel}
        </span>
        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
          {afterLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute bottom-0 top-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-primary text-white shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-ew-resize">
          <div className="flex items-center justify-center gap-0.5">
            <CaretLeft weight="bold" className="size-4" />
            <CaretRight weight="bold" className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
