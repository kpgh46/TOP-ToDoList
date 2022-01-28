
import {addProject} from './addProject';

let dom = (() => {

    let projectList = document.querySelector("#project-list");

    let createProjectDiv = (title, id) => {
        let div = document.createElement('div');
        div.classList.add("project-div");
        div.textContent = title;
        div.dataset.id = id;

        let deletebtn = document.createElement('button');
        deletebtn.textContent = "X";
        deletebtn.classList.add('delete-btn');
        deletebtn.dataset.id = id;

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
        addProject.mainArr.forEach(project => {
            dom.appendProjectDiv(dom.createProjectDiv(project.title, project.id))
        })
    };

    return {createProjectDiv, appendProjectDiv, render}
})();

export {dom};

