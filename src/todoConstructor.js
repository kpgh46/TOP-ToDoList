import { addProject } from "./addProject";

let todoConstructor = (task, description, duedate, priority, completed, id) => {
    id = addProject.currentID;
    completed = false
    return { task, description, duedate, priority, completed, id}
}

export { todoConstructor };