// src/pages/State.jsx
import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function State() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was ist State?",
            body: (
                <>
                    <ul>
                        <li>State beschreibt den internen Zustand einer Komponente.</li>
                        <li>Typische Beispiele: der aktive Slider-Index, ein Klickzähler oder Formulareingaben.</li>
                        <li>Ändert sich der State, wird die Komponente automatisch neu gerendert.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "useState Hook",
            body: (
                <>
                    <ul>
                        <li><code>useState()</code> ist der zentrale Hook zur Verwaltung von lokalem Zustand.</li>
                        <li>Er liefert ein Array mit dem aktuellen Wert und einer Funktion zum Aktualisieren.</li>
                        <li>Beispiel: <code>const [count, setCount] = useState(0)</code></li>
                    </ul>
                </>
            ),
        },
        {
            title: "State in dieser Präsentation",
            body: (
                <>
                    <ul>
                        <li>Diese Präsentationsseite nutzt <code>useState</code>, um die aktive Karte zu steuern.</li>
                        <li>Auch das Öffnen und Schließen der Lightbox funktioniert über State.</li>
                        <li>Jede React-Seite verwendet dabei ihren eigenen lokalen Zustand – getrennt, übersichtlich, unabhängig.</li>
                    </ul>
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
