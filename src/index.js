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

let projectLists = document.querySelector("#project-list");
let todoSection = document.querySelector("#todo-section")


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

//Main Add To Do button
document.addEventListener("click", (el) => {
    if (el.target.id === "add-todo-btn"){
        addTodo.clickTodoButton();
    }
});

//submitting from Todo Div
document.addEventListener("click", (el) => {
    if(el.target.id === "submit-todo"){
        addTodo.pushToDo();
    }
})

todoSection.addEventListener("click", (el) => {
    if (el.target.className = 'details-button'){
        addTodo.showToDoDetails(el);
        
    }
})

dom.render();