import React from "react";
import "./TopicCard.css";

import {
    Brain,
    Puzzle,
    RefreshCw,
    FunctionSquare,
    Folder,
    MousePointer,
    Network,
    Rocket,
    Clock,
    Layers
} from "lucide-react";
import "./TopicCard.css"; // <-- hier

const iconMap = {
    brain: Brain,
    puzzle: Puzzle,
    refreshcw: RefreshCw,
    functionsquare: FunctionSquare,
    folder: Folder,
    mousepointer: MousePointer,
    network: Network,
    rocket: Rocket,
    clock: Clock,
    layers: Layers
};

const TopicCard = ({ title, icon }) => {
    const Icon = iconMap[icon.toLowerCase()] || Brain;

    return (
        <div className="card">
            <Icon className="icon mx-auto h-10 w-10" />
            <h3 className="card-title">{title}</h3>
        </div>
    );
};

export default TopicCard;
