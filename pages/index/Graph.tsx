import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import Tilt from "react-parallax-tilt";
import CardNode from "./CardNode";
import graphData, { GraphNodeJSON, categoryColors } from "./graphData";
import { cn } from "@/lib/utils";

const LINE_WIDTH = 4;
const DEFAULT_LINE_COLOR = "#64748b";
const DIMMED_LINE_ALPHA = "20";
const HOVER_LEAVE_DELAY = 150;

const walk = (start: string, edges: Map<string, string[]>) => {
    const seen = new Set<string>();
    const stack = [start];
    while (stack.length) {
        const id = stack.pop()!;
        (edges.get(id) ?? []).forEach((next) => {
            if (!seen.has(next)) {
                seen.add(next);
                stack.push(next);
            }
        });
    }
    return seen;
};

export default function Graph() {
    const nodes = graphData as GraphNodeJSON[];
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const leaveTimer = useRef<number | undefined>(undefined);

    useEffect(() => () => window.clearTimeout(leaveTimer.current), []);

    const handleHover = (id: string, hovered: boolean) => {
        window.clearTimeout(leaveTimer.current);
        if (hovered) {
            setHoveredId(id);
        } else {
            leaveTimer.current = window.setTimeout(() => setHoveredId(null), HOVER_LEAVE_DELAY);
        }
    };

    const { byId, parents, children } = useMemo(() => {
        const byIdMap = new Map(nodes.map((n) => [n.id, n]));
        const parentsMap = new Map<string, string[]>();
        const childrenMap = new Map<string, string[]>();

        nodes.forEach((n) =>
            n.relations.forEach((r) => {
                childrenMap.set(n.id, [...(childrenMap.get(n.id) ?? []), r.targetId]);
                parentsMap.set(r.targetId, [...(parentsMap.get(r.targetId) ?? []), n.id]);
            })
        );
        return { byId: byIdMap, parents: parentsMap, children: childrenMap };
    }, [nodes]);

    const activeIds = useMemo(() => {
        const active = new Set<string>();
        if (!hoveredId) return active;

        active.add(hoveredId);
        walk(hoveredId, parents).forEach((id) => active.add(id));

        if (byId.get(hoveredId)?.level !== 0) {
            walk(hoveredId, children).forEach((id) => active.add(id));
        }

        return active;
    }, [hoveredId, parents, children, byId]);

    const isDimmed = (node: GraphNodeJSON) => node.level >= 2 && !activeIds.has(node.id);

    return (
        <div
            className={cn(
                "relative -mt-8 w-full overflow-hidden font-sans pt-16",
                "[&_svg_path]:transition-colors [&_svg_path]:duration-300 [&_svg_path]:ease-in-out"
            )}
            style={{ height: "calc(100vh - 104px)" }}
        >
            <ArcherContainer
                style={{ height: "100%", width: "100%" }}
                strokeColor={DEFAULT_LINE_COLOR}
                strokeWidth={LINE_WIDTH}
                endShape={{ arrow: { arrowLength: 0 } }}
            >
                {nodes.map((node) => {
                    const catColor = node.category
                        ? categoryColors[node.category]
                        : node.color || DEFAULT_LINE_COLOR;

                    const dim = isDimmed(node);
                    const isHovered = hoveredId === node.id; // Check if this node is active/hovered

                    return (
                        <div
                            key={node.id}
                            className="absolute transition-all duration-300 ease-in-out"
                            style={{
                                left: `${node.x}%`,
                                top: `${node.y}%`,
                                transform: "translate(-50%, -50%)",
                                // Dynamic z-index: Hovered item instantly jumps to the very front (50)
                                zIndex: isHovered ? 50 : node.level === 0 ? 20 : dim ? 1 : 10,
                            }}
                            onMouseEnter={() => handleHover(node.id, true)}
                            onMouseLeave={() => handleHover(node.id, false)}
                        >
                            <ArcherElement
                                id={node.id}
                                relations={node.relations.map((rel) => {
                                    const target = byId.get(rel.targetId);
                                    const targetDimmed = target ? isDimmed(target) : false;

                                    return {
                                        targetId: rel.targetId,
                                        targetAnchor: rel.targetAnchor,
                                        sourceAnchor: rel.sourceAnchor,
                                        style: {
                                            lineStyle: "curve",
                                            strokeColor: targetDimmed
                                                ? `${DEFAULT_LINE_COLOR}${DIMMED_LINE_ALPHA}`
                                                : DEFAULT_LINE_COLOR,
                                            strokeWidth: LINE_WIDTH,
                                        },
                                    };
                                })}
                            >
                                <div>
                                    {node.level === 0 ? (
                                        /* --- CENTER PROFILE CIRCLE --- */
                                        <div className={cn("transition-all duration-300 ease-in-out", dim ? "opacity-35 grayscale-[0.6]" : "")}>
                                            <Tilt
                                                scale={node.tilt ? 1.05 : 1}
                                                tiltEnable={node.tilt ?? false}
                                                className="relative flex h-60 w-60 items-center justify-center overflow-hidden rounded-full border-4 border-slate-800 bg-slate-900 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                                            >
                                                {node.imageUrl && (
                                                    <img
                                                        src={node.imageUrl}
                                                        alt={node.label || "Profile"}
                                                        className="h-full w-full object-cover"
                                                    />
                                                )}
                                            </Tilt>
                                        </div>
                                    ) : (
                                        /* --- STANDARD CARDS FOR EVERYTHING ELSE --- */
                                        <CardNode
                                            label={node.label}
                                            caption={node.caption}
                                            captionHref={node.href}
                                            imageUrl={node.imageUrl}
                                            infoContent={node.backContent}
                                            categoryColor={catColor}
                                            tilt={node.tilt}
                                            dimmed={dim}
                                            level={node.level}
                                        />
                                    )}
                                </div>
                            </ArcherElement>
                        </div>
                    );
                })}
            </ArcherContainer>
        </div>
    );
}