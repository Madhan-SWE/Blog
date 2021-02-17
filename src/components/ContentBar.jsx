import React from 'react';
import NavBar from "./NavBar"

/* Content Components*/

import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience"

export default function ContentBar(props) {
    if (props.activeItem ==="Home"){
        return(
            <div className="col-lg-9 app_contentbar bg-dark">
                <NavBar changeActiveItem={props.changeActiveItem} activeItem={props.activeItem}/>
                <Home />
            </div>
        )
    }

    if (props.activeItem ==="Experience"){
        return(
            <div className="col-lg-9 app_contentbar bg-dark">
                <NavBar changeActiveItem={props.changeActiveItem} activeItem={props.activeItem}/>
                <Experience />
            </div>
        )
    }

    if (props.activeItem ==="Skills"){
        return(
            <div className="col-lg-9 app_contentbar bg-dark">
                <NavBar changeActiveItem={props.changeActiveItem} activeItem={props.activeItem}/>
                <Skills />
            </div>
        )
    }

    if (props.activeItem ==="Projects"){
        return(
            <div className="col-lg-9 app_contentbar bg-dark">
                <NavBar changeActiveItem={props.changeActiveItem} activeItem={props.activeItem}/>
                <Projects />
            </div>
        )
    }
    
    
}
