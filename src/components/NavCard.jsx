import React from "react";
import * as LucideIcons from "lucide-react";

const iconMap = {
    brain: LucideIcons.Brain,
    puzzle: LucideIcons.Puzzle,
    refreshcw: LucideIcons.RefreshCw,
    functionsquare: LucideIcons.FunctionSquare,
    folder: LucideIcons.Folder,
    mousepointer: LucideIcons.MousePointer,
    network: LucideIcons.Network,
    rocket: LucideIcons.Rocket,
    clock: LucideIcons.Clock,
    layers: LucideIcons.Layers
};

export default function NavCard({ topic, isActive, onClick }) {
    const Icon = iconMap[topic.icon];

    return (
        <div
            onClick={onClick}
            className={`nav-card ${isActive ? "nav-card--active" : ""}`}
        >
            <span className="nav-card__title">{topic.title}</span>
            {Icon ? (
                <Icon className="nav-card__icon" />
            ) : (
                <span style={{ color: "red" }}>?</span>
            )}
        </div>
    );
}
