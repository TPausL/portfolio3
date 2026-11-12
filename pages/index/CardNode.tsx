import React from "react";
import Tilt from "react-parallax-tilt";
import { cn } from "@/lib/utils";

export interface CardNodeProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    caption?: string;
    imageUrl?: string;
    infoContent?: React.ReactNode;
    categoryColor?: string;
    dimmed?: boolean;
    tilt?: boolean;
    captionHref?: string;
    level?: number;
}

const CardNode = React.forwardRef<HTMLDivElement, CardNodeProps>(
    (
        {
            className,
            tilt = false,
            label,
            caption,
            imageUrl,
            infoContent,
            categoryColor = "#4cc9f0",
            dimmed,
            captionHref,
            level = 1,
            style,
            ...rest
        },
        ref
    ) => {
        const isCenter = level === 0;
        const isMain = level === 1;

        const widthClass = isCenter ? "w-[320px]" : isMain ? "w-[260px]" : "w-[220px]";
        const logoClass = isCenter ? "h-28 w-28" : isMain ? "h-20 w-20" : "h-14 w-14";
        const titleClass = isCenter ? "text-xl" : isMain ? "text-base" : "text-sm";

        return (
            <div
                ref={ref}
                style={{
                    ...style,
                }}
                className={cn("relative transition-all duration-300 ease-in-out hover:z-50", widthClass, className)}
                {...rest}
            >
                <Tilt
                    scale={tilt ? 1.05 : 1}
                    tiltEnable={tilt}
                    className={cn(
                        "group relative flex flex-col overflow-hidden rounded-xl border p-4 shadow-2xl transition-all duration-300",
                        dimmed
                            ? "border-slate-800 bg-slate-800 text-slate-500 shadow-none hover:border-slate-600 hover:bg-slate-900 hover:text-white hover:shadow-2xl"
                            : "border-slate-700/60 bg-slate-900 text-white hover:border-slate-500"
                    )}
                >
                    {/* Top Category Accent Line */}
                    <div
                        className={cn(
                            "absolute left-0 top-0 h-1.5 w-full transition-all duration-300",
                            dimmed && "saturate-[0.55] brightness-90 group-hover:saturate-100 group-hover:brightness-100"
                        )}
                        style={{ backgroundColor: categoryColor }}
                    />

                    <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-col flex-1 pt-1">
                            <h3
                                className={cn(
                                    "font-bold leading-tight transition-colors duration-300",
                                    titleClass,
                                    dimmed ? "text-slate-500 group-hover:text-white" : "text-white"
                                )}
                            >
                                {label}
                            </h3>

                            {caption && (
                                <div className="mt-2.5 hidden group-hover:block">
                                    <div>
                                        <div className="pt-1">
                                            {captionHref ? (
                                                <a
                                                    href={captionHref}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors shadow-sm"
                                                    style={{
                                                        backgroundColor: `${categoryColor}35`,
                                                        color: categoryColor,
                                                    }}
                                                >
                                                    {caption}
                                                </a>
                                            ) : (
                                                <span
                                                    className="inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-sm transition-colors"
                                                    style={{
                                                        backgroundColor: `${categoryColor}25`,
                                                        color: categoryColor,
                                                    }}
                                                >
                                                    {caption}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Logo Container */}
                        {imageUrl && (
                            <div
                                className={cn(
                                    "flex shrink-0 items-center justify-center transition-all duration-300",
                                    logoClass
                                )}
                            >
                                <img
                                    src={imageUrl}
                                    alt={label}
                                    className={cn(
                                        "max-h-full max-w-full object-contain drop-shadow-md transition-all duration-300",
                                        dimmed && "grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                                    )}
                                />
                            </div>
                        )}
                    </div>

                    {infoContent && (
                        <div className="mt-4 grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-hover:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                                <div className="pt-3 text-sm text-slate-300 border-t border-slate-800">
                                    {infoContent}
                                </div>
                            </div>
                        </div>
                    )}
                </Tilt>
            </div>
        );
    }
);

CardNode.displayName = "CardNode";
export default CardNode;