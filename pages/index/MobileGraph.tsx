import React from "react";
import graphData, { GraphNodeJSON, categoryColors } from "./graphData";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Sparkles } from "lucide-react";

export default function MobileFeed() {
    const nodes = graphData as GraphNodeJSON[];

    const centerNode = nodes.find((n) => n.level === 0);
    const otherNodes = nodes.filter((n) => n.level !== 0);

    // Group nodes by level to maintain the structure of your data
    const groupedByLevel = otherNodes.reduce((acc, node) => {
        const lvl = node.level;
        if (!acc[lvl]) acc[lvl] = [];
        acc[lvl].push(node);
        return acc;
    }, {} as Record<number, GraphNodeJSON[]>);

    return (
        <div className="w-full px-4 py-12 space-y-10 font-sans text-[#f2f7f6]">
            {/* Center / Hero Profile Section */}
            {centerNode && (
                <div className="flex flex-col items-center justify-center text-center space-y-4 pt-4">
                    <Tilt
                        scale={1.02}
                        tiltEnable={centerNode.tilt ?? false}
                        className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-[#07ebc8]/30 bg-slate-900 shadow-2xl shadow-[#07ebc8]/10"
                    >
                        {centerNode.imageUrl && (
                            <img
                                src={centerNode.imageUrl}
                                alt={centerNode.label || "Profile"}
                                className="h-full w-full object-cover"
                            />
                        )}
                    </Tilt>
                    <div className="space-y-1">
                        {centerNode.label && (
                            <h1 className="text-2xl font-bold tracking-tight text-[#f2f7f6]">
                                {centerNode.label}
                            </h1>
                        )}
                        {centerNode.caption && (
                            <p className="text-sm text-[#b8cbc9] max-w-xs mx-auto">
                                {centerNode.caption}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* Hierarchical Sections */}
            {Object.entries(groupedByLevel).map(([levelStr, levelNodes]) => {
                const levelNum = Number(levelStr);
                return (
                    <div key={levelNum} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#07ebc8]">
                                Tier {levelNum}
                            </span>
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#07ebc8]/40 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {levelNodes.map((node) => {
                                const catColor = node.category
                                    ? categoryColors[node.category]
                                    : node.color || "#07ebc8";

                                const CardWrapper = node.href ? "a" : "div";
                                const wrapperProps = node.href
                                    ? { href: node.href, target: "_blank", rel: "noopener noreferrer" }
                                    : {};

                                return (
                                    <CardWrapper
                                        key={node.id}
                                        {...wrapperProps}
                                        className="group relative block rounded-2xl border border-white/10 bg-[#07202c]/60 p-5 backdrop-blur-xl transition-all active:scale-[0.98]"
                                        style={{ borderLeftColor: catColor, borderLeftWidth: "4px" }}
                                    >
                                        <div className="flex items-start gap-4">
                                            {node.imageUrl && (
                                                <div className="size-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-slate-800">
                                                    <img
                                                        src={node.imageUrl}
                                                        alt={node.label || ""}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            )}

                                            <div className="flex-1 min-w-0 space-y-1">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h3 className="font-heading text-base font-bold text-[#f2f7f6] truncate">
                                                        {node.label}
                                                    </h3>
                                                    {node.href && (
                                                        <ExternalLink className="size-4 text-[#07ebc8] shrink-0 opacity-70" />
                                                    )}
                                                </div>

                                                {node.caption && (
                                                    <p className="text-xs text-[#b8cbc9] line-clamp-2">
                                                        {node.caption}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {node.backContent && (
                                            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-[#b8cbc9]/90 leading-relaxed">
                                                {node.backContent}
                                            </div>
                                        )}
                                    </CardWrapper>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}