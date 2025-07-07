// src/layout/TopicLayout.jsx
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import topics from "../data/topics";
import SideNav from "../components/SideNav";
import "./TopicLayout.css";

export default function TopicLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const current = topics.find((t) => t.path === pathname);
    const title = current?.title || "";

    return (
        <div className="topic-layout-container">
            <div className="topic-layout-sidenav">
                <SideNav onHome={() => navigate("/")} />
            </div>

            <main className="topic-layout-content">
                <header className="topic-layout-header">
                    <h1 className="topic-layout-title">{title}</h1>
                </header>
                <section className="topic-layout-section">
                    <Outlet />
                </section>
            </main>
        </div>
    );
}
