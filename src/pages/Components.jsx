import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function Component() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was sind Komponenten?",
            body: (
                <>
                    <ul>
                        <li>Komponenten sind die Bausteine jeder React-App.</li>
                        <li>Sie kapseln Struktur, Logik und Verhalten in einem Modul.</li>
                        <li>Moderne React-Apps bestehen fast nur noch aus Funktionskomponenten.</li>
                        <li>Komponenten lassen sich beliebig kombinieren („Composition“).</li>
                        <li>Das UI wird dadurch wiederverwendbar, testbar und gut strukturiert.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Komponenten definieren & verwenden",
            body: (
                <>
                    <ul>
                        <li>Eine Komponente ist eine JavaScript-Funktion, die JSX zurückgibt.</li>
                        <li>Sie wird wie ein HTML-Element verwendet: <code>{`<ComponentName />`}</code></li>
                        <li>Props ermöglichen dynamisches Verhalten – dazu gleich mehr.</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/initComponent.png"
                                alt="Initialisierung einer Komponente"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/initComponent.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="/images/component.png"
                                alt="Definition einer Komponente"
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
            title: "Komponentenstruktur in dieser Präsentation",
            body: (
                <>
                    <ul>
                        <li>Diese Seite ist selbstverständlich auch in Komponenten aufgeteilt.</li>
                        <li>Sie nutzt u. a. eigene Komponenten wie <code>CardSlider</code>, <code>Lightbox</code> und <code>TopicCard</code>.</li>
                        <li>Im Projekt sind alle Bestandteile modular in <code>/components</code> organisiert.</li>
                        <li>So bleibt der Code übersichtlich, testbar und gut wartbar.</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/componentStructure.png"
                                alt="Komponentenstruktur in WebStorm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/componentStructure.png");
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
