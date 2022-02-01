import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';

let addProject = (() => {
    let projectNameValue = document.querySelector("#project-entry");
    let mainArr = [];
    let currentID;

    let resetInputValue = (selector) => {
        selector.value = "";
    }
    
    let checkIfEmpty = (selector) => {
        if (selector.value === ""){
            alert ("Please enter a value")
        }
    }

    let getValue = (inputField) => {
        
        if (inputField.value === ""){
            checkIfEmpty(inputField)
        } else {
            return inputField.value;
        };
    }
    
    let pushToMainArr = (project) => {
        if (project.title.length > 0){
        mainArr.push(project);
        }
    };

    let addProjectToList = () => {
        let newProject = projectConstructor(getValue(projectNameValue));
        pushToMainArr(newProject);
        currentID = newProject.id;
        resetInputValue(projectNameValue);
        dom.render();
        
    }

    return {pushToMainArr, addProjectToList, checkIfEmpty, mainArr, resetInputValue, currentID, getValue}
})();

export {addProject};