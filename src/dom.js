
import {addProject, mainArr} from './addProject';

let dom = (() => {

    let createProjectDiv = (title) => {
        let div = document.createElement('div');
        div.classList.add("project-div");
        div.textContent = title;

        
        return div;
    };

    let appendProjectDiv = (div) => {
        let left = document.querySelector("#left");
        left.appendChild(div);
    }

    let render = () => {
        mainArr.forEach(project => {
            dom.appendProjectDiv(dom.createProjectDiv(project.title))
        })
    };

    return {createProjectDiv, appendProjectDiv, render}
})();

export {dom};

