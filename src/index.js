import './style.css';
import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';
import { addProject, mainArr} from './addProject';

//Default Project
let defaultProject = projectConstructor("Default");
let anotehre = projectConstructor("fasdd");
addProject.pushToMainArr(defaultProject);
addProject.pushToMainArr(anotehre);
dom.render();


//All Event Listeners

//Add Project Button on main page
document.addEventListener("click", (el) => {
    if (el.target.id === "add-project-btn"){
        addProject.getProjectName();
    }
})