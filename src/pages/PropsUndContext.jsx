import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function ReactLifecycle() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was sind Props?",
            body: (
                <>
                    <ul>
                        <li>Props (Properties) übergeben Daten von einer Komponente zur anderen.</li>
                        <li>Sie sind readonly – also nicht veränderbar durch die empfangende Komponente.</li>
                        <li>Beispiel:</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/Parent.png"
                                alt="PropsDrilling"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/Parent.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "Problem: Props-Drilling",
            body: (
                <>
                    <ul>
                        <li>Bei tief verschachtelten Komponenten müssen Props durch viele Ebenen „durchgereicht“ werden.</li>
                        <li>Das macht den Code schwerer wartbar.</li>
                        <li>Lösung: Context API</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Was ist die Context API?",
            body: (
                <>
                    <ul>
                        <li>Context ermöglicht globale Daten – z. B. Theme, Sprache oder Login-Status.</li>
                        <li>Kein Props-Drilling nötig: Komponenten greifen direkt auf die Daten zu.</li>
                        <li>Beispiel:</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/createContext.png"
                                alt="Initialisierung einer Komponente"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/createContext.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                        <div className="image-container">
                            <img
                                src="/images/useContext.png"
                                alt="Definition einer Komponente"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/useContext.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "Context in Aktion",
            body: (
                <>
                    <ul>
                        <li>Mit <code>useContext()</code> greifen Komponenten direkt auf Daten zu.</li>
                        <li>Beispiel: <code>{`const user = useContext(UserContext)`}</code></li>
                        <li>Ideal für globale UI-Zustände wie Darkmode oder Sprache.</li>
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
