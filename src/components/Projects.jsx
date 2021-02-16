import React from "react";

import { PROJECTS } from "../store/constants";

import {ICONS} from "../assets/icons"

export default function Projects() {
    return (
        <div className="row app_projects_bar">
            <div className="col-12 ">
                <h5 className="text-white p-2 pr-3 text-right"> <span className="pr-3"> Filter </span>
                <select className="app_project_filter">
                    <option> All </option>
                    <option > React </option>
                </select>
                </h5>
                <div className="row ">
                    {PROJECTS.map((project) => {
                        return (
                            <div className="col-sm-6 mb-2 mt-2">
                                <div class="card h-100 text-black bg-light">
                                    {/* <div class="card-header">
                                        {project.name}
                                    </div> */}
                                    <div class="card-body">
                                        <h5 class="card-title">{project.name}</h5>
                                        <p class="card-text">
                                            {project.description}
                                        </p>
                                        <h6>Written in:</h6>
                                        {
                                            project.languages.map((lang)=>{
                                                return(
                                                    <img width="48px" height="48px" src={ICONS[lang][0]}></img>
                                                )
                                            })
                                        }
                                    </div>
                                    <div class="card-footer">
                                        <div className="row">
                                            <div className="col-6 text-left">
                                            <img width="28px" height="28px" src={ICONS["code"][0]}/> {ICONS["code"][1]}
                                            </div>
                                            <div className="col-6 text-right">
                                            <img width="28px" height="28px" src={ICONS["demo"][0]}/> {ICONS["demo"][1]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
