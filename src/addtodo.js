import { addProject } from "./addProject";
import { dom } from "./dom";
import { todoConstructor } from "./todoConstructor";

let addTodo = (() => {
    let todoBox = document.querySelector("#todo-box");
    let tasktodo = document.querySelector("#task-title");
    let descriptiontodo = document.querySelector("#task-description");
    let duedatetodo = document.querySelector("#task-duedate");
    let prioritytodo = document.querySelector("#task-priority");
    //do I need "completed"?

    let clickTodoButton = () => {
        
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

    let resetTodoDiv = () => {
        todoBox.style.display = "none";
        addProject.resetInputValue(tasktodo)
        addProject.resetInputValue(descriptiontodo)
        addProject.resetInputValue(duedatetodo)
        addProject.resetInputValue(prioritytodo)
    }

    let pushToDo = () => {
        let newTodo = todoConstructor(getTaskTodo(),getDescriptionTodo(),getDueDateTodo(),getPriorityTodo());
        
        addProject.mainArr.forEach(project => {
            if (project.id === Number(newTodo.id)) {
                project.tasks.push(newTodo)
            }
        });

        resetTodoDiv();
        dom.render();
        
    }

    let showToDoDetails = (el) => {
        let toDoDiv = document.querySelector(".todo-div");
        
        el.target.parentElement.classList.toggle("visible");
        
    }


    

    return { clickTodoButton, pushToDo, showToDoDetails};

})();

export { addTodo }