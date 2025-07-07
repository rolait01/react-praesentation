// src/pages/VirtualDOM.jsx
import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function VirtualDOM() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was ist der Virtual DOM?",
            body: (
                <>
                    <ul>
                        <li>Der Virtual DOM ist eine In-Memory-Repräsentation des echten DOMs.</li>
                        <li>React rendert Änderungen zuerst in diesem virtuellen DOM.</li>
                        <li>Nur die Unterschiede („Diffs“) werden anschließend ins echte DOM übernommen.</li>
                        <li>Das macht UI-Updates schnell, effizient und reaktiv.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Warum ist das effizient?",
            body: (
                <>
                    <ul>
                        <li>DOM-Manipulation ist langsam – der Virtual DOM reduziert diese drastisch.</li>
                        <li>React führt einen „Diffing“-Algorithmus aus, um nur die minimal nötigen Änderungen zu erkennen.</li>
                        <li>So entstehen weniger Reflows und Repaints im Browser.</li>
                        <li>Das Ergebnis: bessere Performance, flüssigere UIs.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Wie funktioniert das technisch?",
            body: (
                <>
                    <ul>
                        <li>React erstellt nach jedem State-Update eine neue Version des Virtual DOM.</li>
                        <li>Diese neue Version wird mit der vorherigen verglichen („Diffing“).</li>
                        <li>Nur veränderte Elemente werden durch „Reconciliation“ im echten DOM aktualisiert.</li>
                        <li>Dieser Prozess läuft automatisch – und ist ein zentraler Teil von Reacts Performance-Vorteilen.</li>
                        <li>Auch unsere Präsentationsseite nutzt diesen Mechanismus: Bei jedem Slide-Wechsel wird nur die aktive Komponente neu gerendert.</li>
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
