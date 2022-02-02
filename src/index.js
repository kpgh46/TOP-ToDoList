import './style.css';
import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';
import { addProject, mainArr, currentID} from './addProject';
import { deleteProject } from './deleteproject';
import { addTodo } from './addtodo';



//Default Project
let defaultProject = projectConstructor("Default");
defaultProject.tasks.push({task: "Yard Work", description: "cut the grass", duedate: "Feb-12-22", priority: "medium", completed: "no"})
defaultProject.tasks.push({task: "Grocery", description: "pick up food and cook", duedate: "Mar-17-22", priority: "high", completed: "yes"})
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
        addProject.currentID = el.target.dataset.id;
        dom.render();
    }
})

document.addEventListener("click", (el) => {
    if (el.target.id === "add-todo-btn"){
        addTodo.clickTodoButton();
    }
});

document.addEventListener("click", (el) => {
    if(el.target.id === "submit-todo"){
        addTodo.pushToDo();
    }
})

dom.render();