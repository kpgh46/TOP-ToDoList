import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';

let mainArr = [];

let addProject = (() => {

    let checkIfEmpty = (selector) => {
        if (selector.value === ""){
            alert ("Please enter a value")
        }
    }

    let getProjectName = () => {
        let projectNameValue = document.querySelector("#project-entry");

        if (projectNameValue.value === ""){
            checkIfEmpty(projectNameValue)
        } else {
            return projectNameValue.value;

        };
        
        
    }
    
    let pushToMainArr = (project) => {
        mainArr.push(project);
    };

    let addProjectToList = () => {
        let newProject = projectConstructor(getProjectName());
        pushToMainArr(newProject);
        dom.render();
    }

    return {pushToMainArr, addProjectToList, checkIfEmpty }
})();

export {addProject, mainArr};