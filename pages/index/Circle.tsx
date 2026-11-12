import React from "react";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils"; // Standard shadcn utility

export interface CircleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  radius: number;
  x: number;
  y: number;
  color?: "primary" | "secondary" | string;
  tilt?: boolean;
  infoContent?: React.ReactNode;
  ringColor?: string;
  ringWidth?: number;
  dimmed?: boolean;
  caption?: string;
  captionHref?: string;
  onHoverChange?: (hovered: boolean) => void;
}

const Circle = React.forwardRef<HTMLDivElement, CircleProps>(
  (
    {
      className,
      children,
      id,
      tilt = false,
      onClick,
      color,
      radius,
      x,
      y,
      infoContent,
      ringColor,
      ringWidth = 3,
      dimmed,
      caption,
      captionHref,
      onHoverChange,
      style,
      ...rest
    },
    ref
  ) => {
    // Check if info is allowed (must have infoContent and tilt must be false)
    const isInfoEnabled = Boolean(infoContent) && !tilt;

    // Original formula maps radius multiplier to pixel size
    const size = radius * 32;

    return (
      <div
        ref={ref}
        id={id}
        onMouseEnter={() => onHoverChange?.(true)}
        onMouseLeave={() => onHoverChange?.(false)}
        style={{
          left: `calc(${x}% - ${size / 2}px)`,
          top: `calc(${y}% - ${size / 2}px)`,
          width: size,
          height: size,
          opacity: dimmed ? 0.35 : 1,
          filter: dimmed ? "grayscale(0.6)" : "none",
          zIndex: dimmed ? 1 : 2,
          ...style,
        }}
        className={cn("absolute transition-all duration-300 ease-in-out", className)}
        {...rest}
      >
        <Tilt
          scale={tilt || onClick ? 1.15 : undefined}
          tiltEnable={tilt}
          onClick={onClick}
          className={cn(
            "relative flex h-full w-full items-center justify-center overflow-hidden rounded-full font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]",
            onClick && "cursor-pointer",
            isInfoEnabled && "group", // Enables child group-hover utilities
            color === "primary" ? "bg-primary" : color === "secondary" ? "bg-secondary" : "bg-background"
          )}
          style={{
            backgroundColor: color && color !== "primary" && color !== "secondary" ? color : undefined,
            boxShadow: ringColor ? `0 0 0 ${ringWidth}px ${ringColor}` : undefined,
          }}
        >
          {/* Main Content (Front) */}
          <div className="flex h-full w-full items-center justify-center">
            {children}
          </div>

          {/* Sliding Info Overlay */}
          {isInfoEnabled && (
            <div className="absolute inset-0 z-10 flex translate-y-full items-center justify-center bg-slate-900/50 p-3 opacity-0 backdrop-blur-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
              <div className="translate-y-2 text-center text-[11px] leading-tight opacity-0 transition-all delay-75 duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                {infoContent}
              </div>
            </div>
          )}
        </Tilt>

        {/* Caption */}
        {caption &&
          (captionHref ? (
            <a
              href={captionHref}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap text-[13px] font-semibold tracking-wide text-slate-200 underline decoration-dotted underline-offset-[3px] drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)] transition-colors hover:text-white hover:decoration-solid"
            >
              {caption}
            </a>
          ) : (
            <div className="pointer-events-none absolute left-1/2 top-full mt-2.5 -translate-x-1/2 whitespace-nowrap text-[13px] font-semibold tracking-wide text-slate-200 drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              {caption}
            </div>
          ))}
      </div>
    );
  }
);

Circle.displayName = "Circle";

export default Circle;