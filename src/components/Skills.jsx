import React from 'react'

import { ICONS } from "../assets/icons"


export default function Skills() {
    return (
        <div className="row app_skills_bar">
            <div className="col-12 ">
            <h3 className="text-center text-white">Skills</h3>
            <hr />
            <div className="row ">
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["python"][0]} /> </span>
                <span className="text-bold">PYTHON</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["javascript"][0]} /> </span>
                <span className="text-bold">JAVASCRIPT</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["node"][0]} /> </span>
                <span className="text-bold">Node JS</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["react"][0]} /> </span>
                <span className="text-bold">React JS</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["mongo"][0]} /> </span>
                <span className="text-bold">Mongo DB</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["typescript"][0]} /> </span>
                <span className="text-bold">TypeScript</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["html"][0]} /> </span>
                <span className="text-bold">HTML</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["css"][0]} /> </span>
                <span className="text-bold">CSS</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["ansible"][0]} /> </span>
                <span className="text-bold">Ansible</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["terraform"][0]} /> </span>
                <span className="text-bold">Terraform</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["jenkins"][0]} /> </span>
                <span className="text-bold">Jenkins</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["docker"][0]} /> </span>
                <span className="text-bold">Docker</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["kubernetes"][0]} /> </span>
                <span className="text-bold">Kubernetes</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["bootstrap"][0]} /> </span>
                <span className="text-bold">Bootstrap</span>
            </div>
            <div className="col-xs-2 col-sm-4 col-lg-3 mb-2 mt-2 mb-2 text-white">
                <span className="pr-2"> <img width="48" height="48" src={ICONS["express"][0]} /> </span>
                <span className="text-bold">Express JS</span>
            </div>
            </div>
            
            </div>
        </div>
    )
}
