'use client'

import Footer from "../template/global/footer"
import Header from "../template/global/header"
import { Project } from "./project";
import ProjectLabel from "./projectLabel";

export default function Page() {
    const projectLabels = Object.values(Project.ALL_PROJECTS()).map(project => <div className="pt-2" key={project.getName()}><ProjectLabel project={project}/></div>)   

    return (
        <>
            <Header currentPage="Projects"/>
            <div className="main">
                <h1>Projects</h1>
                <p>At the moment this page is a list of my projects (working on a better page).<br/>Clicking one will take you to its website if it has one, or its github page otherwise.</p>
                <div className="pt-5 text-2xl">
                    {projectLabels}
                </div>
            </div>
            <Footer/>
        </>
    )
}