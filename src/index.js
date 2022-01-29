import './style.css';
import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';
import { addProject, mainArr} from './addProject';
import { deleteProject } from './deleteproject'

//Default Project
let defaultProject = projectConstructor("Default");
addProject.pushToMainArr(defaultProject);
dom.render();


//All Event Listeners

//Add Project Button on main page
document.addEventListener("click", (el) => {
    if (el.target.id === "add-project-btn"){
        addProject.addProjectToList();
    }
})

document.addEventListener("click", (el) => {
    if (el.target.id === "delete-project"){
        deleteProject.deleteProjectDiv(el);
    }
})