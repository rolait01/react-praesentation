// src/pages/SharePointAndReact.jsx
import "../pages/PageStyles.css";
import { useState } from "react";
import CardSlider from "../components/CardSlider";
import Lightbox from "../components/Lightbox";

export default function SharePointAndReact() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const openImage = (src) => setLightboxImage(src);
    const closeImage = () => setLightboxImage(null);

    const cards = [
        {
            title: "Warum React mit SharePoint?",
            body: (
                <>
                    <ul>
                        <li>SharePoint ist in Unternehmen weit verbreitet – aber oft wenig benutzerfreundlich.</li>
                        <li>React bringt moderne UI-Komponenten und eine bessere User Experience.</li>
                        <li>Das SharePoint Framework (SPFx) unterstützt React als Standard.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Unsere Ausgangslage",
            body: (
                <>
                    <ul>
                        <li>Das bestehende WMP basierte auf klassischen SharePoint-Elementen.</li>
                        <li>Unübersichtliche Navigation, fehlende Konsistenz, keine Mobiloptimierung.</li>
                        <li>Das Ziel: Modernisierung durch ein benutzerfreundliches, komponentenbasiertes Frontend.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Wie wir React integriert haben",
            body: (
                <>
                    <ul>
                        <li>Die Präsentation (diese Seite) wurde mit React gebaut – wie ein echtes SPFx-Webpart.</li>
                        <li>Wir nutzen Routing, Komponenten, Props, State – alles, was auch im Produktivcode vorkommt.</li>
                        <li>Die Struktur lässt sich problemlos in SharePoint über den Generator integrieren.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Das React-Frontend als Beispiel",
            body: (
                <>
                    <ul>
                        <li>Diese Beispielseite zeigt, wie modernes UX/UI auch in SharePoint realisiert werden kann.</li>
                        <li>Technisch und visuell klar strukturiert – aber vollständig eingebettet in SharePoint.</li>
                        <li>Kein Neuladen, keine klassischen ListViews – sondern flüssige, komponentenbasierte Navigation.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Einbindung in SharePoint (technisch)",
            body: (
                <>
                    <ul>
                        <li>Verwendet das <code>SharePoint Framework (SPFx)</code>.</li>
                        <li>React-Komponenten werden in das DOM eingebettet und über Webparts geladen.</li>
                        <li>Die erstellten Komponenten können direkt als <code>Custom Webparts</code> deployed werden.</li>
                    </ul>
                </>
            ),
        },
        {
            title: "Was wir daraus lernen",
            body: (
                <>
                    <ul>
                        <li>Mit React lassen sich moderne Frontends auf SharePoint umsetzen – unabhängig vom alten UI.</li>
                        <li>Bestehende Schwächen (z.B. fehlende Mobilfähigkeit, unklare Navigation) lassen sich gezielt verbessern.</li>
                        <li>React ist damit ein ideales Werkzeug zur UX-Modernisierung im Enterprise-Umfeld.</li>
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
