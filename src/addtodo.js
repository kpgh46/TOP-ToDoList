import { addProject } from "./addProject";
import { dom } from "./dom";

let addTodo = (() => {

    let clickTodoButton = () => {
        let todoBox = document.querySelector("#todo-box");

        todoBox.style.display = "none" ? todoBox.style.display = "block" : todoBox.style.display = "none";
    }

    return { clickTodoButton }

})();

export { addTodo }