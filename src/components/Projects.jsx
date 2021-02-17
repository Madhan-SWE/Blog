import React, {useState} from "react";

import { PROJECTS } from "../store/constants";

import {ICONS} from "../assets/icons"

export default function Projects() {

    const [projects, setProjects] = useState(PROJECTS);

    function changeType(e){
        
        
        console.log(e.target.value)
        setProjects(PROJECTS.filter(
            
            (project)=>{
                console.log(project.categories.indexOf(e.target.value))
                console.log(project.categories)
                console.log(e.target.value)
                if (project.categories.indexOf(e.target.value)>=0 || project.languages.indexOf(e.target.value) >= 0)
                    return true
                return false
            }
        ))
    }
    return (
        <div className="row app_projects_bar">
            <div className="col-12 ">
            <h2 className="app_page_title text-center">Projects</h2>
            
                <h5 className="text-white p-2 pr-3 text-right"> <span className="pr-3"> Filter </span>
                <select className="app_project_filter" onChange={e=>changeType(e)}>
                    <option value="All"> All </option>
                    <option value="FrontEnd"> FrontEnd </option>
                    <option value="FullStack"> FullStack </option>
                </select>
                </h5>
                <div className="row ">
                
                    {projects.map((project) => {
                        return (
                            <div className="col-sm-6 mb-2 mt-2 app_project_card">
                                <div className="card h-100 text-black bg-light">
                                
                                    <div className="card-body">
                                        <h5 className="card-title app_project-title">{project.name}</h5>
                                        <p className="card-text">
                                            {project.description}
                                        </p>
                                        <h6 className="app_project-title">Written in:</h6>
                                        {
                                            project.languages.map((lang)=>{
                                                return(
                                                    <img className="app_icon" width="48px" height="48px" src={ICONS[lang][0]}></img>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-6 text-left">
                                            <a className="app_project_link"  href={project.code}><img className="app_icon" width="28px" height="28px" src={ICONS["code"][0]}/> {ICONS["code"][1]}</a>
                    
                                            </div>
                                            <div className="col-6 text-right">
                                            <a  className="app_project_link" href={project.demo}>
                                            <img className="app_icon" width="28px"  height="28px" src={ICONS["demo"][0]}/> {ICONS["demo"][1]}
                                            </a>
                                            
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
