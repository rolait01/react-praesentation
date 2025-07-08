// src/components/SideNav.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import topics from "../data/Topics.js";
import NavCard from "./NavCard";
import { ArrowLeft } from "lucide-react";
import "./SideNav.css";

export default function SideNav({ onHome }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <aside className="sidenav-container">
            {/* Home-Button (nur Icon, rund) */}
            <button
                onClick={onHome ?? (() => navigate("/"))}
                className="sidenav-button"
            >
                <ArrowLeft className="sidenav-icon" />
            </button>

            {/* Abstand zwischen Button und den NavCards */}
            <div className="sidenav-spacer" />

            {/* Deine Topics als NavCards */}
            {topics.map((topic) => (
                <NavCard
                    key={topic.path}
                    topic={topic}
                    isActive={pathname === topic.path}
                    onClick={() => navigate(topic.path)}
                />
            ))}
        </aside>
    );
}
