'use client'

import Footer from "../template/global/footer"
import Header from "../template/global/header"
import { Project } from "./project";
import ProjectPreview from "./projectPreview";

export default function Page() {
    const projects = Project.ALL_PROJECTS();

    const projectNamesByDateDescending  = Object.keys(projects).sort((a, b) => projects[b].getCreated().unix() - projects[a].getCreated().unix())
    const projectsByDateDescending = projectNamesByDateDescending.map(project => projects[project]);
    console.log(projectsByDateDescending)
    
    const projectLabels = Object.values(projectsByDateDescending).map(project => <div className="pt-2" key={project.getName()}><ProjectPreview project={project}/></div>)   

    return (
        <>
            <Header currentPage="Projects"/>
            <div className="main">
                <h1>Projects</h1>
                <p>Here are my projects. Most are on GitHub but some here will be private like university ones.<br/>Clicking one will give you more information on the project, and ways to view it if it has any.</p>
                <div className="grid grid-cols-3 gap-5 pt-5 text-center">
                    {projectLabels}
                </div>
            </div>
            <Footer/>
        </>
    )
}