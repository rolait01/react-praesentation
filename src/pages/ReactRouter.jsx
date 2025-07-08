// src/pages/ReactRouter.jsx
import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function ReactRouter() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was macht React Router?",
            body: (
                <>
                    <ul>
                        <li>React Router ermöglicht Navigation ohne Seiten-Neuladen.</li>
                        <li>Jede Komponente wird einer URL zugeordnet.</li>
                        <li>Das Verhalten erinnert an klassische Webseiten – nur viel dynamischer.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Routing in dieser Präsentation",
            body: (
                <>
                    <ul>
                        <li>Wir nutzen <code>react-router-dom</code> zur Navigation zwischen Themen.</li>
                        <li>Jede Themenseite (z. B. <code>/hooks</code>) hat ihre eigene Route.</li>
                        <li>Das Grundlayout bleibt erhalten – der Inhalt wird über <code>&lt;Outlet /&gt;</code> ausgetauscht.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Technischer Aufbau bei uns",
            body: (
                <>
                    <ul>
                        <li>Navigation erfolgt über <code>useNavigate()</code> und klickbare Kacheln.</li>
                        <li><code>TopicLayout</code> rendert links das Menü und rechts den Content.</li>
                        <li>Die aktiven Inhalte werden dynamisch über das <code>Outlet</code> geladen.</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/routingStructure.png"
                                alt="Routing-Übersicht"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/routingStructure.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <CardSlider cards={cards} />
            {lightboxImage && (
                <Lightbox src={lightboxImage} alt="Screenshot" onClose={closeImage} />
            )}
        </>
    );
}
