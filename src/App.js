
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
    const [selectedNews, setSelectedNews] = useState({});

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<About setSelectedNews={setSelectedNews} />}
                />
                <Route
                    path="/contact/:publishedAt"
                    element={<Contact selectedNews={selectedNews} />}
                />
            </Routes>
        </>
    );
}

export default App;
