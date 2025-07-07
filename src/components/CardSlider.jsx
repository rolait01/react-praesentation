import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../pages/PageStyles.css";
import { ArrowRight } from "lucide-react";

export default function CardSlider({ cards }) {
    const [currentCard, setCurrentCard] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const topics = [
        "/was-ist-react",
        "/virtual-dom",
        "/components",
        "/props-und-context",
        "/react-hooks",
        "/state-management",
        "/react-router",
        "/sharepoint-and-react",
    ];

    const currentPath = location.pathname;
    const currentIndex = topics.indexOf(currentPath);
    const nextPath = topics[currentIndex + 1];

    const handleNext = () => {
        setCurrentCard((prev) => (prev + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight" || e.key === "PageDown") handleNext();
            else if (e.key === "ArrowLeft" || e.key === "PageUp") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [cards.length]);

    return (
        <div className="react-page-container">
            <div className="cardslider-vertical-wrapper">
                <div className="react-card-wrapper">
                    <div className="react-card" onClick={handleNext}>
                        <h2 className="card-title">{cards[currentCard].title}</h2>
                        <div className="card-body">{cards[currentCard].body}</div>
                    </div>
                </div>

                <div className="progress-wrapper">
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${((currentCard + 1) / cards.length) * 100}%`,
                            }}
                        ></div>
                    </div>

                    <div className="progress-footer-centered">
                        <p className="progress-text">
                            {currentCard + 1} / {cards.length}
                        </p>

                        {currentCard === cards.length - 1 && nextPath && (
                            <button
                                className="next-topic-button"
                                onClick={() => navigate(nextPath)}
                            >
                                    <span className="next-button-content">
                                            Weiter zum nächsten Thema
                                            <ArrowRight size={18} className="inline-icon" />
                                    </span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
