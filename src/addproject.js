import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';



let addProject = (() => {
    let projectNameValue = document.querySelector("#project-entry");
    let mainArr = [];

    let resetInputValue = (selector) => {
        selector.value = "";
    }
    
    let checkIfEmpty = (selector) => {
        if (selector.value === ""){
            alert ("Please enter a value")
        }
    }

    let getProjectName = () => {
        
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
        resetInputValue(projectNameValue);
        dom.render();
    }

    return {pushToMainArr, addProjectToList, checkIfEmpty, mainArr, resetInputValue}
})();

export {addProject};