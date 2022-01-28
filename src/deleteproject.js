import { addProject } from "./addProject";

let deleteProject = (() => {

    let getDataIDDelete = (el) => {

        console.log(el.target.getAttribute("data-id"));
    }

    return {getDataIDDelete}

})();

export {deleteProject};