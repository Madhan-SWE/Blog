import "./App.css";

import React, { useState } from "react";

import SideNavBar from "./components/SideNavBar";
import ContentBar from "./components/ContentBar";

function App() {
    const [activeItem, setActiveItem] = useState("Home");

    function changeActiveItem(value) {
        setActiveItem(value);
        console.log(value)
    }
    return (
        <>
            <div className="row app_bar p-3">
                <SideNavBar />
                <ContentBar
                    activeItem={activeItem}
                    changeActiveItem={changeActiveItem}
                />
            </div>
        </>
    );
}

export default App;
