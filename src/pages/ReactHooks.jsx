import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function ReactHooks() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Was sind Hooks?",
            body: (
                <>
                    <ul>
                        <li>Hooks bringen State und Lifecycle-Logik in Funktionskomponenten.</li>
                        <li>Sie ersetzen Klassenmethoden wie <code>this.state</code> oder <code>componentDidMount</code>.</li>
                        <li>Wichtigste Hooks: <code>useState</code> und <code>useEffect</code>.</li>
                        <li>Hooks starten immer mit „use“ und dürfen nur auf oberster Ebene verwendet werden.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "useState in Aktion",
            body: (
                <>
                    <ul>
                        <li>Ermöglicht lokalen Zustand direkt in einer Komponente.</li>
                        <li>Beispiel hier: Aktiver Slide und geöffnete Lightbox werden per <code>useState</code> gesteuert.</li>
                        <li>State-Änderung triggert ein automatisches Re-Rendern – das UI passt sich sofort an.</li>
                        <li><code>const [count, setCount] = useState(0)</code> ist die typische Schreibweise.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "useEffect für Events",
            body: (
                <>
                    <ul>
                        <li><code>useEffect</code> wird verwendet für Seiteneffekte („side effects“).</li>
                        <li>Typische Beispiele: Event Listener, Daten laden, Timer setzen.</li>
                        <li>In dieser Präsentation: Wir registrieren z. B. Tastatursteuerung für die Slide-Navigation.</li>
                        <li>Auch das Entfernen von Event-Handlern erfolgt mit <code>return () =&gt; ...</code>.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "useEffect – Beispiel Tastatursteuerung",
            body: (
                <>
                    <ul>
                        <li>In unserer Präsentationsseite nutzen wir <code>useEffect</code>, um Tasteneingaben zu erkennen.</li>
                        <li>Die Pfeiltasten (← →) navigieren zwischen den Cards – ideal für Präsentationen.</li>
                        <li>Der Event Listener wird beim Mount registriert und beim Unmount entfernt.</li>
                    </ul>
                    <div className="image-row">
                        <div className="image-container">
                            <img
                                src="/images/useEffectKeyboard.png"
                                alt="useEffect mit Tastatursteuerung"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    openImage("/images/useEffectKeyboard.png");
                                }}
                                style={{ cursor: "zoom-in" }}
                            />
                        </div>
                    </div>
                </>
            ),
        },
        {
            title: "Wann welcher Hook?",
            body: (
                <>
                    <ul>
                        <li><code>useState</code>: Wenn du Werte speichern willst, die sich im Laufe der Nutzung ändern.</li>
                        <li><code>useEffect</code>: Wenn du auf Änderungen reagieren oder externe Effekte einbauen willst.</li>
                        <li>Hooks lassen sich modular kombinieren – z. B. mehrere <code>useEffect</code> in einer Komponente.</li>
                        <li>Nur Funktionskomponenten können Hooks verwenden – nicht in regulären Funktionen!</li>
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
