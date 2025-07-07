import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WasIstReact from "./pages/WasIstReact";
import VirtualDOM from "./pages/VirtualDOM";
import Components from "./pages/Components";
import StateManagement from "./pages/StateManagement";
import ReactHooks from "./pages/ReactHooks";
import ReactLifecycle from "./pages/ReactLifecycle";
import ReactRouter from "./pages/ReactRouter";
import PropsUndContext from "./pages/PropsUndContext";
import SharePointAndReact from "./pages/SharePointAndReact";
import TopicLayout from "./layout/TopicLayout";
import StopwatchWidget from "./components/StopwatchWidget";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />

                <Route element={<TopicLayout />}>
                    <Route path="/was-ist-react" element={<WasIstReact />} />
                    <Route path="/virtual-dom" element={<VirtualDOM />} />
                    <Route path="/components" element={<Components />} />
                    <Route path="/state-management" element={<StateManagement />} />
                    <Route path="/react-hooks" element={<ReactHooks />} />
                    <Route path="/props-und-context" element={<PropsUndContext />} />
                    <Route path="/react-lifecycle" element={<ReactLifecycle />} />
                    <Route path="/react-router" element={<ReactRouter />} />
                    <Route path="/sharepoint-and-react" element={<SharePointAndReact />} />
                </Route>
            </Routes>
            <StopwatchWidget />
        </BrowserRouter>
    </React.StrictMode>
);
