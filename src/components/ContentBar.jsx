import React from 'react';
import NavBar from "./NavBar"

/* Content Components*/

import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience"

export default function ContentBar() {
    return (
        <div className="col-lg-9 app_contentbar bg-dark">
        <NavBar />
        {/* <Home /> */}
        <Projects />
        {/* <Skills /> */}
        {/* <Experience /> */}
        </div>
    )
}
