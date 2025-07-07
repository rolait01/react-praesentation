import React, { useEffect, useState, useRef } from "react";
import "./StopwatchWidget.css";

export default function StopwatchWidget() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const widgetRef = useRef(null);
    const pos = useRef({ x: 30, y: 30 });

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => setTime((prev) => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [running]);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    // Drag & Drop
    useEffect(() => {
        const widget = widgetRef.current;
        if (!widget) return;

        let offsetX = 0, offsetY = 0;
        const handleMouseDown = (e) => {
            offsetX = e.clientX - widget.getBoundingClientRect().left;
            offsetY = e.clientY - widget.getBoundingClientRect().top;
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        };
        const handleMouseMove = (e) => {
            pos.current = { x: e.clientX - offsetX, y: e.clientY - offsetY };
            widget.style.left = `${pos.current.x}px`;
            widget.style.top = `${pos.current.y}px`;
        };
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
        widget.addEventListener("mousedown", handleMouseDown);
        return () => {
            widget.removeEventListener("mousedown", handleMouseDown);
        };
    }, []);

    return (
        <div ref={widgetRef} className="stopwatch-widget">
            <div className="stopwatch-display">
                {(() => {
                    const chars = formatTime(time).split("");
                    const firstNonZeroIndex = chars.findIndex(c => c !== "0" && c !== ":");
                    return chars.map((char, index) => (
                        <span
                            key={index}
                            className={`digit ${
                                index === firstNonZeroIndex ? "highlight" : ""
                            } ${char === ":" ? "colon" : "number"}`}
                        >
            {char}
        </span>
                    ));
                })()}
            </div>
            <div className="stopwatch-controls">
                <button onClick={() => setRunning((r) => !r)}>
                    {running ? "Pause" : "Start"}
                </button>
                <button onClick={() => { setTime(0); setRunning(false); }}>
                    Reset
                </button>
            </div>
        </div>
    );
}
