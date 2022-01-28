
import {addProject, mainArr} from './addProject';

let dom = (() => {

    let projectList = document.querySelector("#project-list");

    let createProjectDiv = (title) => {
        let div = document.createElement('div');
        div.classList.add("project-div");
        div.textContent = title;

        let deletebtn = document.createElement('button');
        deletebtn.textContent = "X";
        deletebtn.classList.add('delete-btn')

        div.appendChild(deletebtn);
        
        return div;
    };

    let appendProjectDiv = (div) => {

        projectList.appendChild(div);
    };

    let clearPage = (el) => {
        while (el.firstChild) {
          el.removeChild(el.firstChild)
        }
      }

    let render = () => {
        clearPage(projectList);
        mainArr.forEach(project => {
            dom.appendProjectDiv(dom.createProjectDiv(project.title))
        })
    };

    return {createProjectDiv, appendProjectDiv, render}
})();

export {dom};

