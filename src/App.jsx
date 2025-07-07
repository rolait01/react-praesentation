// src/App.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import topics from "./data/topics";
import TopicCard from "./components/TopicCard";
import logo from "./assets/hs_esslingen_logo.svg";
import "./App.css";


function App() {
    const navigate = useNavigate();

    return (
        <div className="app-container">
            <img
                src={logo}
                alt="Hochschule Esslingen Logo"
                className="logo"
            />
            <div className="header pl-6">
                <h1 className="title">
                    <span className="highlight">React</span> Experten-Talk
                </h1>
                <p className="subtitle">Ein modernes Frontend-Framework im Einsatz</p>
            </div>
            <div className="grid-container">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(topic.path)}
                        className="cursor-pointer"
                    >
                        <TopicCard
                            title={topic.title}
                            description={topic.description}
                            icon={topic.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
