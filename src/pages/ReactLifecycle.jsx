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
            title: "Lifecycle in React",
            body: (
                <>
                    <ul>
                        <li>Jede Komponente hat einen Lebenszyklus: Mounting → Updating → Unmounting.</li>
                        <li>Früher gelöst mit Klassenmethoden wie <code>componentDidMount</code>.</li>
                        <li>Heute übernehmen <code>useEffect</code> und andere Hooks diese Rolle in Funktionskomponenten.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Mounting – Initiales Laden",
            body: (
                <>
                    <ul>
                        <li><code>useEffect(() =&gt; &#123; ... &#125;, [])</code> wird einmal beim ersten Rendern ausgeführt.</li>
                        <li>In dieser Präsentation: Die Slide-Steuerung per Tastatur wird nur hier aktiviert.</li>
                        <li>So binden wir Logik nur dann ein, wenn die Komponente tatsächlich sichtbar ist.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Updating – Reaktion auf Änderungen",
            body: (
                <>
                    <ul>
                        <li><code>useEffect(() =&gt; &#123; ... &#125;, [abhängigkeit])</code> reagiert auf Veränderungen.</li>
                        <li>Beispiel: Wenn sich der aktive Slide ändert, können neue Effekte ausgelöst werden.</li>
                        <li>So bleiben UI und Logik immer synchron.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Unmounting – Aufräumen nicht vergessen",
            body: (
                <>
                    <ul>
                        <li>Mit <code>return () =&gt; &#123; ... &#125;</code> wird beim Entfernen der Komponente aufgeräumt.</li>
                        <li>Wichtig für Event-Listener, Timeouts und externe Ressourcen.</li>
                        <li>Beispiel hier: Die Tastatursteuerung wird bei Verlassen der Seite wieder deaktiviert.</li>
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
