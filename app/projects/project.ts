import { NameLink } from "../template/link/nameLink";
import { NavLink } from "../template/link/navLink";
import { projectDatabase } from "./projectDatabase";

export class Project {
    private name: string;
    private title: string;
    private isPrivate: boolean;
    private informationLink: NavLink;
    private isWebsite: boolean;

    public static ALL_PROJECTS(): {[key: string]: Project} { // Gets every project
        return ALL_PROJECTS;
    }

    public static CreateFromObject(obj : {[key: string]: unknown}) { // Creates a project from an object with any keys (anything can be empty)
        const pName = obj.name ? obj.name as string : "";
        const pTitle = obj.title ? obj.title as string : "Unnamed Project";
        const pIsPrivate = obj.isPrivate != undefined ? obj.isPrivate as boolean : false;
        const pIsWebsite = obj.isWebsite != undefined ? obj.isWebsite as boolean : true;

        return new Project(pName, pTitle, pIsPrivate, pIsWebsite)
    }

    public static getProjectByName(name: string) {
        if (!(name in ALL_PROJECTS)) {
            return Project.CreateFromObject({})
        }
        return ALL_PROJECTS[name]
    }

    private constructor(name: string, title: string, isPrivate: boolean, isWebsite: boolean) {
        this.name = name;
        this.title = title;
        this.isPrivate = isPrivate;
        this.isWebsite = isWebsite;
        if (isWebsite) {
            this.informationLink = new NameLink(this.title, "https://" + this.name + ".ShephardLuke.co.uk"); //new NavLink(this.title, "projects/view?name=" + this.name);
        } else {
            this.informationLink = new NameLink(this.title, "https://github.com/ShephardLuke/" + this.name)
        }

    }

    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getIsPrivate() {
        return this.isPrivate;
    }

    getInformationLink() {
        return this.informationLink;
    }
}

function createProjects(): {[key: string]: Project} { // Create an array of projects from a list of objects
    const allProjects: {[key: string]: Project} = {}
    for (let i = 0; i < projectDatabase.length; i++) {
        allProjects[projectDatabase[i].name] = (Project.CreateFromObject(projectDatabase[i]))
    }
    return allProjects
}

const ALL_PROJECTS: {[key: string]: Project} = createProjects()

