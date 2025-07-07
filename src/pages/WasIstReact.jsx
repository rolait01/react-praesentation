// src/pages/WasIstReact.jsx
import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function WasIstReact() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was ist React?",
            body: (
                <>
                    <ul>
                        <li>React ist eine JavaScript-Bibliothek für moderne Web-Oberflächen.</li>
                        <li>Sie basiert auf dem Konzept von wiederverwendbaren Komponenten.</li>
                        <li>Statt klassischem HTML nutzt React eine Syntax namens JSX.</li>
                        <li>Die UI wird automatisch aktualisiert, wenn sich Daten ändern.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Komponenten: Die Basis von React",
            body: (
                <>
                    <ul>
                        <li>In React ist (fast) alles eine Komponente.</li>
                        <li>Komponenten sind kleine UI-Bausteine mit eigener Logik.</li>
                        <li>Sie können verschachtelt, wiederverwendet und konfiguriert werden.</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/component.png"
                                alt="Komponentenstruktur"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/component.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "JSX – HTML in JavaScript?",
            body: (
                <>
                    <ul>
                        <li>JSX sieht aus wie HTML, ist aber JavaScript mit UI-Syntax.</li>
                        <li>Damit lassen sich Komponenten deklarativ beschreiben.</li>
                        <li>Logik und Oberfläche liegen nah beieinander – das macht React besonders.</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/jsxScript.png"
                                alt="JSX Beispiel"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/jsxScript.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "React in Aktion",
            body: (
                <>
                    <ul>
                        <li>Diese Präsentation ist selbst mit React gebaut.</li>
                        <li>Wir nutzen Komponenten, State und Routing – alles live demonstriert.</li>
                        <li>Los geht’s mit dem nächsten Thema: Virtual DOM.</li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <>
            <CardSlider cards={cards} nextTopicPath="/virtualdom" />
            {lightboxImage && (
                <Lightbox src={lightboxImage} alt="Screenshot" onClose={closeImage} />
            )}
        </>
    );
}
