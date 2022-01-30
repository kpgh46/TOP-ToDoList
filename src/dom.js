
import {addProject} from './addProject';

let dom = (() => {

    let projectList = document.querySelector("#project-list");
    let todoList = document.querySelector("#todo-section");

    let createProjectDiv = (title, id) => {
        let div = document.createElement('div');
        div.classList.add("project-div");
        div.textContent = title;
        div.dataset.id = id;
        addProject.currentID = id;

        let deletebtn = document.createElement('button');
        deletebtn.textContent = "X";
        deletebtn.classList.add('delete-btn');
        deletebtn.dataset.id = id;
        deletebtn.id = "delete-project";

        div.appendChild(deletebtn);
        
        return div;
    };

    let createToDoDiv = (task, description,duedate,priority,complete) => {
        let todoDiv = document.createElement('div');
        todoDiv.classList.add("todo-div");
        
        
        let todoTask = document.createElement('div')
        let todoDescription = document.createElement('div')
        let todoDueDate = document.createElement('div')
        let todoPriority = document.createElement('div')
        let todoComplete = document.createElement('div');

        let todoInformationArray = [todoDescription,todoDueDate,todoPriority,todoComplete];

        todoInformationArray.forEach(item => {
            item.classList.add("todoInfo");
            todoDiv.appendChild(item);
        });

        todoTask.textContent = task;
        todoDescription.textContent = description;
        todoDueDate.textContent = duedate;
        todoPriority.textContent = priority;
        todoComplete.textContent = complete;

        return todoDiv;
        
    };


    let appendToDoDiv = (div) => {
        todoList.appendChild(div);
    }

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
            dom.appendProjectDiv(dom.createProjectDiv(project.title, project.id));
            project.tasks.forEach(task => {
                appendToDoDiv(createToDoDiv(task.task,task.description, task.duedate, task.priority,task.completed));
            })
        });
 
    };

    return {createProjectDiv, appendProjectDiv, render}
})();

export {dom};

