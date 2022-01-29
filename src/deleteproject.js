import { addProject } from "./addProject";

let deleteProject = (() => {

    let getDataIDDelete = (el) => {

        console.log(el.target.getAttribute("data-id"));
    };

    let deleteProjectDiv = (el) => {

        el.target.parentElement.remove();

    }

    return {getDataIDDelete, deleteProjectDiv};

})();

export {deleteProject};