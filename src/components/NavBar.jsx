import React from "react";

export default function NavBar(props) {
    return (
        <div className="row">
            <div className="col-12">
                <ul className="app_navigation bg-light text-black">
                    <li
                        className={
                            props.activeItem === "Home"
                                ? "app_navigation_item active"
                                : "app_navigation_item"
                        }
                        onClick={(e) => props.changeActiveItem("Home")}
                    >
                        Home
                    </li>
                    <li
                        className={
                            props.activeItem === "Experience"
                                ? "app_navigation_item active"
                                : "app_navigation_item"
                        }
                        onClick={(e) => props.changeActiveItem("Experience")}
                    >
                        Experience
                    </li>
                    <li
                        className={
                            props.activeItem === "Skills"
                                ? "app_navigation_item active"
                                : "app_navigation_item"
                        }
                        onClick={(e) => props.changeActiveItem("Skills")}
                    >
                        Skills
                    </li>
                    <li
                        className={
                            props.activeItem === "Projects"
                                ? "app_navigation_item active"
                                : "app_navigation_item"
                        }
                        onClick={(e) => props.changeActiveItem("Projects")}
                    >
                        Projects
                    </li>
                </ul>
            </div>
        </div>
    );
}
