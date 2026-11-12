import { graphData, categoryColors, NodeCategory } from "./GraphData";

export function BubbleGrid() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {graphData.map((node) =>
                    node.relations.map((rel, i) => (
                        <line
                            key={`${node.id}-${rel.targetId}-${i}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${graphData.find((n) => n.id === rel.targetId)?.x ?? 0}%`}
                            y2={`${graphData.find((n) => n.id === rel.targetId)?.y ?? 0}%`}
                            stroke={node.category ? categoryColors[node.category as NodeCategory] : "#888"}
                            strokeWidth={1.5}
                            opacity={0.6}
                        />
                    ))
                )}
            </svg>
            {graphData.map((node) => (
                <a
                    key={node.id}
                    href={node.href || undefined}
                    target={node.href ? "_blank" : undefined}
                    rel={node.href ? "noopener noreferrer" : undefined}
                    className="absolute rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: `${node.radius * 16}px`,
                        height: `${node.radius * 16}px`,
                        background: node.color || (node.category ? categoryColors[node.category as NodeCategory] : "#333"),
                        border: `3px solid ${node.category ? categoryColors[node.category as NodeCategory] : "#555"}`,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    {node.imageUrl && (
                        <img src={node.imageUrl} alt={node.label || node.caption || ""} className="w-full h-full object-cover" />
                    )}
                </a>
            ))}
        </div>
    );
}
