import './style.css';
import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';
import { addProject, mainArr} from './addProject';
import { deleteProject } from './deleteproject'

//Default Project
let defaultProject = projectConstructor("Default");
defaultProject.tasks.push({task: "Yard Work", description: "cut the grass", duedate: "today", priority: "medium", completed: "no"})
defaultProject.tasks.push({task: "Grocery", description: "pick up food and cook", duedate: "this weekend", priority: "high", completed: "yes"})
addProject.pushToMainArr(defaultProject);


dom.render();
console.log(addProject.mainArr)


//All Event Listeners

//Add Project Button on main page
document.addEventListener("click", (el) => {
    if (el.target.id === "add-project-btn"){
        addProject.addProjectToList();
    }
})

document.addEventListener("click", (el) => {
    if (el.target.id === "delete-project"){
        deleteProject.removeProject(el);
       
    }
})