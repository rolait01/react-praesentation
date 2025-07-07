import React from "react";
import "./Lightbox.css";

export default function Lightbox({ src, alt, onClose }) {
    return (
        <div className="lightbox-backdrop" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt={alt} />
                <button className="lightbox-close" onClick={onClose}>×</button>
            </div>
        </div>
    );
}
