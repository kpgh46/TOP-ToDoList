import './style.css';
import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';
import { addProject, mainArr, currentID} from './addProject';
import { deleteProject } from './deleteproject';
import { clickProject } from './clickEvents'

//Default Project
let defaultProject = projectConstructor("Default");
defaultProject.tasks.push({task: "Yard Work", description: "cut the grass", duedate: "today", priority: "medium", completed: "no"})
defaultProject.tasks.push({task: "Grocery", description: "pick up food and cook", duedate: "this weekend", priority: "high", completed: "yes"})
addProject.pushToMainArr(defaultProject);

let projectLists = document.querySelector("#project-list")

console.log(addProject.mainArr)


//All Event Listeners

//Add Project Button on main page
document.addEventListener("click", (el) => {
    if (el.target.id === "add-project-btn"){
        addProject.addProjectToList();
    }
})

// Delete Project Button on main page
document.addEventListener("click", (el) => {
    if (el.target.id === "delete-project"){
        deleteProject.removeProject(el);
       
    }
})

//Select Project with mouse
projectLists.addEventListener("click", (el) => {
    if (el.target.classList.contains("project-div")){
        let t = el.target.dataset.id;
        
        addProject.currentID = t;
        dom.render();
    }
})

dom.render();