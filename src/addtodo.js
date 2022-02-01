import { addProject } from "./addProject";
import { dom } from "./dom";
import { todoConstructor } from "./todoConstructor";

let addTodo = (() => {

    let tasktodo = document.querySelector("#task-title");
    let descriptiontodo = document.querySelector("#task-description");
    let duedatetodo = document.querySelector("#task-duedate");
    let prioritytodo = document.querySelector("#task-priority");
    //do I need "completed"?

    let clickTodoButton = () => {
        let todoBox = document.querySelector("#todo-box");
        todoBox.style.display = "none" ? todoBox.style.display = "block" : todoBox.style.display = "none";
    };

    let getTaskTodo = () => {
        return addProject.getValue(tasktodo)
    };
    let getDescriptionTodo = () => {
        return addProject.getValue(descriptiontodo)
    }
    let getDueDateTodo = () => {
        return addProject.getValue(duedatetodo)
    }
    let getPriorityTodo = () => {
        return addProject.getValue(prioritytodo)
    };

    let createTodoObject = () => {
        let testTodo = todoConstructor(getTaskTodo(),getDescriptionTodo(),getDueDateTodo(),getPriorityTodo());
        console.log(testTodo);
    }


    

    return { clickTodoButton, createTodoObject }

})();

export { addTodo }