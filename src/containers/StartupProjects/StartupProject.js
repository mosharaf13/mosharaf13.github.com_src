import React from "react";
import "./StartupProjects.css";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StartupProject() {
    function openProjectInNewWindow(url) {
        var win = window.open(url, "_blank");
        win.focus();
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
                <div>
                    <h1 className="skills-heading">{bigProjects.title}</h1>
                    <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
                    <div className="startup-projects-main">

                        {bigProjects.projects.map(project => {
                            return (
                                <div className="startup-project-card">
                                    <div className="project-card-head">
                                        <div className="startup-project-image"
                                             onClick={() => openProjectInNewWindow(project.link)}>
                                            <img alt="Mosharaf Working" src={project.image}></img>
                                        </div>
                                        <div className="project-title"
                                             onClick={() => openProjectInNewWindow(project.link)}>
                                            {project.title}
                                        </div>
                                    </div>
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
